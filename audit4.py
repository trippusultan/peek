from PIL import Image
im = Image.open('C:/Users/Spoidy/peek/comp-mobile.png').convert('RGB')
W, H = im.size
px = im.load()

def hex_at(x, y):
    r, g, b = px[x, y]
    return '#%02x%02x%02x' % (r, g, b)

print('=== B right edge columns (x 690-703) — is anything clipped at viewport edge? ===')
for y in range(340, 700, 10):
    print(y, [hex_at(x, y) for x in range(690, 704, 2)])

print('\n=== A right edge at seam (x 344-351) — A content vs seam ===')
for y in range(0, 757, 20):
    print(y, [hex_at(x, y) for x in range(344, 352)])

print('\n=== B: find exact y where last share-bar row ends (search for #1c293f-ish rows) ===')
def is_sharebar_row(y):
    cnt = 0
    for x in range(360, 704, 2):
        c = px[x, y]
        if c[2] > c[0] + 12 and c[2] > c[1] + 8 and c[2] > 30:
            cnt += 1
    return cnt
for y in range(600, 757, 2):
    c = is_sharebar_row(y)
    if c > 5:
        print(y, 'sharebar-ish px:', c)

print('\n=== B bottom: rows 700-757 full signature ===')
for y in range(700, 757, 3):
    colors = {}
    for x in range(360, 700, 4):
        c = '#%02x%02x%02x' % px[x, y]
        colors[c] = colors.get(c, 0) + 1
    top = sorted(colors.items(), key=lambda kv: -kv[1])[:4]
    print(y, top)
