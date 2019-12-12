import matplotlib.pyplot as plt
import numpy as np

from intcode import processIntcode, resetIntcode

NORTH = "NORTH"
EAST = "EAST"
SOUTH = "SOUTH"
WEST = "WEST"

def getNextDirection(cur_dir, turn_right):
    directions = [NORTH, EAST, SOUTH, WEST]
    if turn_right:
        i = directions.index(cur_dir) + 1
        i = 0 if i >= len(directions) else i
    else:
        i = directions.index(cur_dir) - 1
        i = len(directions) - 1 if i < 0 else i
    return directions[i]

def move(x, y, cur_dir):
    if cur_dir == NORTH:
        y += 1
    elif cur_dir == SOUTH:
        y -= 1
    elif cur_dir == EAST:
        x += 1
    elif cur_dir == WEST:
        x -= 1
    return x, y

def paint(input_value, starting_color):
    resetIntcode()
    
    program = input_value

    cur_dir = NORTH

    x, y = 0, 0

    painting = {
        (0, 0): starting_color
    }

    while True:
        if (x, y) not in painting:
            cur_color = 0
        else:
            cur_color = painting[(x, y)]

        result, program = processIntcode(program, cur_color)

        if result == 99:
            break

        cur_color = result[0]
        cur_turn_dir = result[1]
        
        painting[(x, y)] = cur_color
        cur_dir = getNextDirection(cur_dir, True if (cur_turn_dir == 1) else False)

        x, y = move(x, y, cur_dir)

    paint = np.empty((70, 70))
    paint.fill(0)
    
    for x, y in painting:
        paint[y+20, x+20] = painting[(x, y)]
    
    fig = plt.figure()

    plt.imshow(paint, origin="lower")
    plt.savefig("out_{}.png".format(starting_color))

    return len(painting)