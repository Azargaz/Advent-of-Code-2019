def decodeSpaceImageFormat(input, width, height):
    image = []
    layer = []
    row = []

    currentWidth = 0
    currentHeight = 0

    for char in input:
        # append characters to row until it reaches the image's width
        if currentWidth < width:
            row.append(char)
            currentWidth += 1
        
        # if row is the width of image then append new row to layer and reset row array
        if currentWidth == width:
            layer.append(row)
            row = []
            currentWidth = 0

            currentHeight += 1
            # if layer is the height of image then append new layer to image and reset layer array
            if currentHeight == height:
                image.append(layer)
                layer = []
                currentHeight = 0
    
    return image

image_data = open("input.txt", "r").read()
width = 25
height = 6
image = decodeSpaceImageFormat(image_data, width, height)
# print(image)
# print()

min_zeros = width * height
min_zeros_index = 0
index = 0

for layer in image:
    count_zeros = 0
    # print("Layer: {}".format(layer))

    for row in layer:
        # print("Row: {}".format(row))

        for pixel in row:
            if pixel is '0':
                count_zeros += 1

    if count_zeros < min_zeros:
        min_zeros = count_zeros
        min_zeros_index = index
    
    index += 1

print("Zeros: {}".format(min_zeros))
print("Layer index: {}".format(min_zeros_index))

no_of_ones = 0
no_of_twos = 0

for row in image[min_zeros_index]:
    for pixel in row:
        if pixel is '1':
            no_of_ones += 1
        if pixel is '2':
            no_of_twos += 1

print("Solution: {}".format(no_of_ones * no_of_twos))
