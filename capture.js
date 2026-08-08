// Capture both dashboard viewports via CDP (the --screenshot CLI flag silently
// drops the table count column at 390px; CDP capture renders faithfully).
const { spawn } = require('node:child_process');
const fs = require('node:fs');

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const URL = 'http://admin:peek-admin-2026@localhost:8000/dashboard?range=7d';
const OUT = (w) => `C:/Users/Spoidy/peek/refs/ours-${w === 1440 ? 'desktop' : 'mobile'}.png`;

async function capture(width, height) {
  const port = 9800 + Math.floor(Math.random() * 100);
  const chrome = spawn(CHROME, [
    '--headless=new', '--disable-gpu', `--remote-debugging-port=${port}`,
    '--user-data-dir=/tmp/cap-' + width, '--no-first-run', 'about:blank'
  ]);
  let target;
  for (let i = 0; i < 50; i++) {
    await new Promise(r => setTimeout(r, 200));
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json`);
      const list = await res.json();
      target = list.find(t => t.type === 'page');
      if (target) break;
    } catch { /* not up yet */ }
  }
  if (!target) { chrome.kill(); throw new Error('no target'); }
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });
  let id = 0;
  const pending = new Map();
  ws.onmessage = e => {
    const m = JSON.parse(e.data);
    if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); }
  };
  const send = (method, params = {}) => new Promise(res => {
    const i = ++id; pending.set(i, res); ws.send(JSON.stringify({ id: i, method, params }));
  });
  await send('Page.enable');
  await send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: width < 760 });
  await send('Page.navigate', { url: URL });
  await new Promise(r => setTimeout(r, 4000));
  const shot = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
  fs.writeFileSync(OUT(width), Buffer.from(shot.result.data, 'base64'));
  console.log(`captured ${OUT(width)} (${width}x${height})`);
  ws.close(); chrome.kill();
}

(async () => {
  await capture(1440, 900);
  await capture(390, 844);
})();
