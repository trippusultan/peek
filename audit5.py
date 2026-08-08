from PIL import Image
im = Image.open('C:/Users/Spoidy/peek/comp-mobile.png').convert('RGB')
W, H = im.size
px = im.load()

def hex_at(x, y):
    r, g, b = px[x, y]
    return '#%02x%02x%02x' % (r, g, b)

# 1. B chart x-axis label region: find text pixels near right edge (y ~ 480-515, x 600-703)
print('=== B chart x-axis area (y 480-520), text detection ===')
for y in range(480, 521, 4):
    bright = [x for x in range(600, 704) if px[x, y][0] > 100 and px[x, y][1] > 100 and px[x, y][2] > 100]
    if bright:
        print(y, 'bright text px from x', min(bright), 'to', max(bright))
print('Aug 8 label: x extent of bright text in y 495-515:')
for y in range(495, 516, 2):
    bright = [x for x in range(600, 704) if px[x, y][0] > 100 and px[x, y][1] > 100 and px[x, y][2] > 100]
    if bright:
        print(' y', y, min(bright), '-', max(bright))

# 2. B chart line at right edge: blue px near x 680-703 in chart area (y 400-480)
print('\n=== B chart line right edge (y 380-480, blue px) ===')
for y in range(380, 481, 6):
    blue = [x for x in range(560, 704) if px[x, y][2] > 150 and px[x, y][2] > px[x, y][0] + 60]
    if blue:
        print(y, 'blue line px to x', max(blue))

# 3. B KPI card borders: scan card edges for #464651-ish
print('\n=== B KPI card border check: row y=156-160 (top card edge) ===')
for y in range(154, 162):
    row = {}
    for x in range(352, 704, 2):
        c = '#%02x%02x%02x' % px[x, y]
        row[c] = row.get(c, 0) + 1
    print(y, sorted(row.items(), key=lambda kv: -kv[1])[:5])
print('vertical border between the two KPI cards: x scan at y=190')
for x in range(500, 540, 2):
    print(x, hex_at(x, 190))

# 4. What is B y 246-316?
print('\n=== B y 240-320 content: bright text px ===')
for y in range(240, 321, 4):
    bright = [x for x in range(360, 700) if px[x, y][0] > 120 and px[x, y][1] > 120 and px[x, y][2] > 120]
    blue = [x for x in range(360, 700) if px[x, y][2] > 150 and px[x, y][2] > px[x, y][0] + 60]
    if bright or blue:
        print(y, 'bright:', (min(bright), max(bright)) if bright else None, 'blue:', (min(blue), max(blue)) if blue else None)

# 5. A filter bar date text: y 90-130
print('\n=== A filter bar (y 90-130): bright text extent ===')
for y in range(90, 131, 3):
    bright = [x for x in range(0, 352) if px[x, y][0] > 120 and px[x, y][1] > 120 and px[x, y][2] > 120]
    if bright:
        print(y, min(bright), '-', max(bright))

# 6. A chart right edge: purple line reaching x~349?
print('\n=== A chart line right extent (y 480-560) ===')
for y in range(480, 561, 8):
    purple = [x for x in range(0, 352) if px[x, y][0] > 100 and px[x, y][2] > 120 and px[x, y][1] < 100]
    if purple:
        print(y, 'purple to x', max(purple))
