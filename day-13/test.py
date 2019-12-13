from game import play

input_value = open("input.txt", "r").read()

result = play(input_value)
print("Solution to part I: {}".format(result))