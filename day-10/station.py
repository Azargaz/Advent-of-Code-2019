from math import sqrt, atan2

def getOtherVisibleAsteroids(map, cur_x, cur_y):
    angles = set()
    for y in range(0, len(map)):
        for x in range(0, len(map[0])):
            if map[x][y] != '#':
                continue
            if cur_x is x and cur_y is y:
                continue
            angle = atan2(y - cur_y, x - cur_x)
            angles.add(angle)

    return len(angles)

def findBestAsteroid(map):
    max = 0

    for y in range(0, len(map)):
        for x in range(0, len(map[0])):
            if map[x][y] != '#':
                continue
            
            other_visible_asteroids = getOtherVisibleAsteroids(map, x, y)

            if other_visible_asteroids > max:
                max = other_visible_asteroids
            
    return max

def findMonitoringStation(input_value):
    input_value = input_value.split('\n')
    asteroid_map = []
    for line in input_value:
        line = list(line)
        asteroid_map.append(line)
    return findBestAsteroid(asteroid_map)