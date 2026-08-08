from PIL import Image
im = Image.open('C:/Users/Spoidy/peek/comp-mobile.png').convert('RGB')
W, H = im.size
px = im.load()

def sig(x0, x1, y, step=3):
    """Signature of a row: dominant colors."""
    colors = {}
    for x in range(x0, x1, step):
        c = '#%02x%02x%02x' % px[x, y]
        colors[c] = colors.get(c, 0) + 1
    top = sorted(colors.items(), key=lambda kv: -kv[1])[:3]
    return ' '.join('%s x%d' % (c, n) for c, n in top)

print('=== B column (x 352-704) band segmentation, every 6px ===')
for y in range(0, H, 6):
    print(y, '|', sig(360, 700, y))
