from PIL import Image

def getImageFromData(input, width, height):
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

def validateImage(image, w, h, verbose=False):
    min_zeros = w * h
    min_zeros_index = 0
    index = 0

    # find layer with the lowest number of zeros
    for layer in image:
        count_zeros = 0
        for row in layer:
            for pixel in row:
                if pixel is '0':
                    count_zeros += 1

        if count_zeros < min_zeros:
            min_zeros = count_zeros
            min_zeros_index = index
        
        index += 1

    if verbose:
        print("Zeros: {}".format(min_zeros))
        print("Layer index: {}".format(min_zeros_index))

    no_of_ones = 0
    no_of_twos = 0

    # count 1s and 2s in the found layer
    for row in image[min_zeros_index]:
        for pixel in row:
            if pixel is '1':
                no_of_ones += 1
            if pixel is '2':
                no_of_twos += 1

    return no_of_ones * no_of_twos

def decodeImage(image, w, h):
    # PIL setup
    img = Image.new('RGBA', (w, h), "black")
    pixels = img.load()

    # setting up variables
    decodedImage = []
    NOT_SET = -1
    TRANSPARENT = 2

    # create empty array that will be sum of all layers
    for x in range(img.size[0]):
        decodedImage.append([])
        for y in range(img.size[1]):
            decodedImage[x].append(NOT_SET)

    # go through all layers
    for layer in image:
        y = 0
        for row in layer:
            x = 0
            for pixel in row:
                pixel = int(pixel)
                decodedPixel = decodedImage[x][y]

                # change pixels only if layer above was transparent (or -1 which means not set)
                if decodedPixel is NOT_SET or decodedPixel is TRANSPARENT:
                    decodedImage[x][y] = pixel
                x += 1
            y += 1

    # create image using decodedImage array and img image object from PIL library
    for x in range(img.size[0]):
        for y in range(img.size[1]):
            pixel = decodedImage[x][y]
            g = int(pixel * 255)   

            # check for transparency
            a = 255
            if pixel is TRANSPARENT:
                a = 0       
            
            pixels[x,y] = (g, g, g, a)
    
    img.save("img.png", "PNG")