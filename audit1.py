from PIL import Image
im = Image.open('C:/Users/Spoidy/peek/comp-mobile.png').convert('RGB')
W, H = im.size  # 704x757
px = im.load()

def hex_at(x, y):
    r, g, b = px[x, y]
    return '#%02x%02x%02x' % (r, g, b)

def near(c1, c2, tol=6):
    return all(abs(a - b) <= tol for a, b in zip(c1, c2))

BG = (9, 9, 11)        # #09090b
PANEL = (24, 24, 27)   # #18181b
ACCENT = (48, 133, 254)  # #3085fe

# --- 1. Find vertical extent of content in each half: last row that is not BG ---
def last_content_row(x0, x1):
    last = 0
    for y in range(H - 1, -1, -1):
        row_non_bg = 0
        for x in range(x0, x1):
            if not near(px[x, y], BG, 8):
                row_non_bg += 1
        if row_non_bg > 3:
            last = y
            break
    return last

a_last = last_content_row(0, 351)
b_last = last_content_row(352, 703)
print('A last content row:', a_last, '-> bottom clearance', H - 1 - a_last)
print('B last content row:', b_last, '-> bottom clearance', H - 1 - b_last)

# --- 2. Panel bg colors in B KPI area (find card rows) ---
# B KPI cards region approx y 130-330. Sample backgrounds.
print('\nB KPI card bg samples (row scan for PANEL vs highlighted):')
for y in range(120, 340, 10):
    row = {}
    for x in range(360, 700, 10):
        c = px[x, y]
        key = '#%02x%02x%02x' % c
        row[key] = row.get(key, 0) + 1
    top = sorted(row.items(), key=lambda kv: -kv[1])[:3]
    print(y, top)

# --- 3. B table: top row highlight + glyph + share bars ---
print('\nB table area scan:')
# find table panel y range: scan for panels in lower area of B
for y in range(400, 700, 8):
    sample = [hex_at(x, y) for x in range(360, 700, 20)]
    panelish = sum(1 for s in sample if near(px[360 + (sample.index(s))*20 if False else 0, y], PANEL, 10) or True)
    # just print a row signature: count of panel-colored px and accent-ish px
    pc = sum(1 for x in range(352, 704, 4) if near(px[x, y], PANEL, 10))
    ac = sum(1 for x in range(352, 704, 2) for _ in [0] if near(px[x, y], ACCENT, 60))
    bluish = sum(1 for x in range(352, 704, 2) if px[x, y][2] > px[x, y][0] + 20 and px[x, y][2] > px[x, y][1] + 20)
    print(y, 'panel_px4:', pc, 'bluish_px2:', bluish)
