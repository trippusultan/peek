from PIL import Image
im = Image.open('C:/Users/Spoidy/peek/comp-mobile.png').convert('RGB')

# B KPI cards region
im.crop((352, 130, 704, 245)).save('crop_b_kpi.png')
# B table top region
im.crop((352, 330, 704, 560)).save('crop_b_table_top.png')
# B table bottom region
im.crop((352, 550, 704, 757)).save('crop_b_table_bottom.png')
# A bottom region
im.crop((0, 330, 352, 757)).save('crop_a_bottom.png')
# A KPI region
im.crop((0, 130, 352, 245)).save('crop_a_kpi.png')
# A header
im.crop((0, 0, 352, 130)).save('crop_a_header.png')
# B header
im.crop((352, 0, 704, 130)).save('crop_b_header.png')
# A chart
im.crop((0, 245, 352, 420)).save('crop_a_chart.png')
# B chart
im.crop((352, 245, 704, 420)).save('crop_b_chart.png')
print('done')
