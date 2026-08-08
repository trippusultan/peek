from PIL import Image
im = Image.open('C:/Users/Spoidy/peek/comp-mobile.png').convert('RGB')

# Bottom strips, 2x upscale
im.crop((352, 690, 704, 757)).resize((704, 134), Image.NEAREST).save('zoom_B_bottom.png')
im.crop((0, 690, 352, 757)).resize((704, 134), Image.NEAREST).save('zoom_A_bottom.png')
# B top table row with glyph
im.crop((352, 620, 704, 700)).resize((704, 160), Image.NEAREST).save('zoom_B_toprow.png')
# A chart right edge
im.crop((0, 440, 352, 690)).resize((704, 500), Image.NEAREST).save('zoom_A_chart2.png')
# B KPI cards
im.crop((352, 130, 704, 245)).resize((704, 230), Image.NEAREST).save('zoom_B_kpi2.png')
print('done')
