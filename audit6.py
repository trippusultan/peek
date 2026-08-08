from PIL import Image
im = Image.open('C:/Users/Spoidy/peek/comp-mobile.png').convert('RGB')
W, H = im.size
px = im.load()

def hex_at(x, y):
    r, g, b = px[x, y]
    return '#%02x%02x%02x' % (r, g, b)

# 1. B top table row glyph: is the icon blue? scan x 358-400, y 626-665 for blue-ish px
print('=== B table row 1 glyph area (x 358-410, y 626-666): blue glyph? ===')
for y in range(626, 667, 3):
    blues = [x for x in range(358, 412) if px[x, y][2] > 140 and px[x, y][2] > px[x, y][0] + 40]
    brights = [x for x in range(358, 412) if px[x, y][0] > 130 and px[x, y][1] > 130 and px[x, y][2] > 130]
    if blues or brights:
        print(y, 'blue:', (min(blues), max(blues)) if blues else None, 'bright:', (min(brights), max(brights)) if brights else None)

# 2. A x-axis labels right side: scan y 630-680 for bright text, max x
print('\n=== A x-axis labels (y 620-690): bright text extent ===')
for y in range(620, 691, 3):
    bright = [x for x in range(0, 352) if px[x, y][0] > 100 and px[x, y][1] > 100 and px[x, y][2] > 100]
    if bright:
        print(y, min(bright), '-', max(bright))

# 3. A chart line right extent (fix filter: purple/blue-ish line)
print('\n=== A chart line/area right extent (y 460-560): colored px max x ===')
for y in range(460, 561, 6):
    colored = [x for x in range(0, 352) if abs(px[x, y][0] - px[x, y][2]) > 40 or (px[x, y][0] > 90 and px[x, y][2] > 120)]
    if colored:
        print(y, 'colored to x', max(colored))

# 4. B chart area fill right extent (y 400-500, x 640-704)
print('\n=== B chart fill right extent (y 400-510): fill color at right ===')
for y in range(400, 511, 5):
    xs = [x for x in range(640, 704, 2) if not (abs(px[x, y][0]-9) < 8 and abs(px[x, y][1]-9) < 8 and abs(px[x, y][2]-11) < 8)]
    if xs:
        print(y, 'non-bg to x', max(xs), 'samples:', len(xs))

# 5. KPI hero sizes: measure value text height in A vs B
# B primary card value "415": find text rows in card 1 (x 360-500, y 165-230)
print('\n=== B card1 (highlighted) value text rows (x 365-470) ===')
for y in range(160, 235):
    bright = [x for x in range(365, 470) if px[x, y][0] > 150 and px[x, y][1] > 150 and px[x, y][2] > 150]
    if bright:
        pass
# print summary ranges instead
rows = []
for y in range(155, 240):
    bright = [x for x in range(360, 500) if px[x, y][0] > 150 and px[x, y][1] > 150 and px[x, y][2] > 150]
    if bright:
        rows.append((y, min(bright), max(bright)))
print('B card1 bright text rows:', len(rows), 'span y', rows[0][0], '-', rows[-1][0] if rows else None)
if rows:
    print('first few:', rows[:5])
    print('last few:', rows[-5:])

# B card2 (normal) value: x 520-660
rows2 = []
for y in range(155, 240):
    bright = [x for x in range(520, 660) if px[x, y][0] > 150 and px[x, y][1] > 150 and px[x, y][2] > 150]
    if bright:
        rows2.append((y, min(bright), max(bright)))
print('B card2 bright text rows:', len(rows2), 'span y', rows2[0][0], '-', rows2[-1][0] if rows2 else None)

# A card1 value (Unique Visitors "296k"): A KPI cards at y 120-460? find first card value rows
rowsA = []
for y in range(110, 470):
    bright = [x for x in range(10, 340) if px[x, y][0] > 150 and px[x, y][1] > 150 and px[x, y][2] > 150]
    if bright and len(bright) > 8:
        rowsA.append((y, min(bright), max(bright)))
# cluster into bands
bands = []
for r in rowsA:
    if bands and r[0] - bands[-1][-1][0] <= 3:
        bands[-1].append(r)
    else:
        bands.append([r])
print('\nA bright-text bands (y ranges, count):')
for b in bands:
    print(' ', b[0][0], '-', b[-1][0], 'n=', len(b))
