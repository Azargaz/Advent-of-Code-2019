from robot import paint

input_value = open("input.txt", "r").read()

result = paint(input_value)
print("Solution to part I: {}".format(result))