from PIL import Image
im = Image.open('C:/Users/Spoidy/peek/comp-mobile.png').convert('RGB')
W, H = im.size
px = im.load()
BG = (9, 9, 11)

def hex_at(x, y):
    r, g, b = px[x, y]
    return '#%02x%02x%02x' % (r, g, b)

print('=== Last 40 rows of A (x 100) and B (x 500), row signatures ===')
for y in range(H - 40, H):
    a = [hex_at(x, y) for x in range(90, 120, 3)]
    b = [hex_at(x, y) for x in range(500, 530, 3)]
    print(y, 'A:', a[0], a[1], a[2], '| B:', b[0], b[1], b[2])

print('\n=== B bottom area full row scan (y 600-757, x 352-704, step 4) ===')
for y in range(600, H):
    colors = {}
    for x in range(352, 704, 4):
        c = '#%02x%02x%02x' % px[x, y]
        colors[c] = colors.get(c, 0) + 1
    top = sorted(colors.items(), key=lambda kv: -kv[1])[:4]
    print(y, top)

print('\n=== A bottom area full row scan (y 600-757, x 0-352, step 4) ===')
for y in range(600, H):
    colors = {}
    for x in range(0, 352, 4):
        c = '#%02x%02x%02x' % px[x, y]
        colors[c] = colors.get(c, 0) + 1
    top = sorted(colors.items(), key=lambda kv: -kv[1])[:4]
    print(y, top)
