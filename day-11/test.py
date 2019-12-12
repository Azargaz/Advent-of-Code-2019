from robot import paint

input_value = open("input.txt", "r").read()

result = paint(input_value, 0)
print("Solution to part I: {}".format(result))

input_value = open("input.txt", "r").read()

result = paint(input_value, 1)
print("Solution to part II: {}".format(result))