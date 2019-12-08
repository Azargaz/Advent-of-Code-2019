from decode import getImageFromData, validateImage, decodeImage

image_data = open("input.txt", "r").read()

width = 25
height = 6
image = getImageFromData(image_data, width, height)

# Part I
noOf1sAnd2s = validateImage(image, width, height)
print("Solution to part I: {}".format(noOf1sAnd2s))

# Part II
decodeImage(image, width, height)
print("Solution to part II in 'img.png'")