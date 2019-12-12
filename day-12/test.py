from moons import simulateMoons

input_value = open("input.txt", "r").read()
# input_value = """<x=-1, y=0, z=2>
# <x=2, y=-10, z=-7>
# <x=4, y=-8, z=8>
# <x=3, y=5, z=-1>"""

result = simulateMoons(input_value, 1000)
print("Solution to part I: {}".format(result))