#!/usr/bin/env python3
"""Build blind A/B composites: left=A, right=B, labels stripped."""
from PIL import Image
import os

REF = 'refs'

def comp(fname, left, right, out, w_each):
    a = Image.open(os.path.join(REF, left)).convert('RGB')
    b = Image.open(os.path.join(REF, right)).convert('RGB')
    a = a.resize((w_each, int(a.height * w_each / a.width)), Image.LANCZOS)
    b = b.resize((w_each, int(b.height * w_each / b.width)), Image.LANCZOS)
    gap = 4
    canvas = Image.new('RGB', (a.width + b.width + gap, max(a.height, b.height)), (30, 30, 34))
    canvas.paste(a, (0, 0))
    canvas.paste(b, (a.width + gap, 0))
    canvas.save(out)
    print(out, canvas.size)

# A = bar (plausible), B = ours. Critics never learn this mapping.
comp('comp-desktop.png', 'bar-desktop.png', 'ours-desktop.png', 'comp-desktop.png', 700)
comp('comp-mobile.png', 'bar-mobile.png', 'ours-mobile.png', 'comp-mobile.png', 350)
