from PIL import Image
im = Image.open('C:/Users/Spoidy/peek/comp-mobile.png').convert('RGB')

# Upscaled full-column strips for reliable viewing
im.crop((0, 0, 352, 757)).resize((352 * 2, 757 * 2), Image.NEAREST).save('strip_A_2x.png')
im.crop((352, 0, 704, 757)).resize((352 * 2, 757 * 2), Image.NEAREST).save('strip_B_2x.png')

# B chart region zoom
im.crop((352, 240, 704, 520)).resize((704, 560), Image.NEAREST).save('zoom_B_chart.png')
# B table region zoom
im.crop((352, 340, 704, 757)).resize((704, 834), Image.NEAREST).save('zoom_B_table.png')
# A table/tabs region zoom
im.crop((0, 560, 352, 757)).resize((704, 394), Image.NEAREST).save('zoom_A_tabs.png')
# A chart region zoom
im.crop((0, 240, 352, 560)).resize((704, 640), Image.NEAREST).save('zoom_A_chart.png')
print('done')
