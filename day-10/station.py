from math import sqrt, atan2, pi

def getOtherVisibleAsteroids(map, cur_x, cur_y):
    angles = set()
    for x in range(0, len(map)):
        for y in range(0, len(map[0])):
            if map[x][y] != '#':
                continue
            if cur_x is x and cur_y is y:
                continue
            angle = atan2(y - cur_y, x - cur_x)
            angles.add(angle)
    return len(angles)

def findBestAsteroid(map):
    max = 0
    best_x = 0
    best_y = 0

    for x in range(0, len(map)):
        for y in range(0, len(map[0])):
            if map[x][y] != '#':
                continue            
            other_visible_asteroids = getOtherVisibleAsteroids(map, x, y)
            if other_visible_asteroids > max:
                max = other_visible_asteroids
                best_x = x
                best_y = y  

    return max, (best_x, best_y)

def findMonitoringStation(input_value):
    input_value = input_value.split('\n')
    asteroid_map = []
    for line in input_value:
        line = list(line)
        asteroid_map.append(line)
    return findBestAsteroid(asteroid_map)

def getAllOtherAsteroids(map, cur_x, cur_y):
    asteroids = []
    for x in range(0, len(map)):
        for y in range(0, len(map[0])):
            if map[x][y] != '#':
                continue
            if cur_x == x and cur_y == y:
                continue
            x_dir = x - cur_x
            y_dir = y - cur_y
            angle = atan2(y_dir, x_dir) * 180.0 / pi + 180
            radius = sqrt(x_dir * x_dir + y_dir * y_dir)
            asteroids.append([angle, radius, x, y])
    return asteroids

def rotatingLaser(map, laser_x, laser_y, asteroid_num):    
    laser_targets = getAllOtherAsteroids(map, laser_x, laser_y)
    laser_targets.sort(key=lambda x: (-x[0], x[1]))

    asteroid_num_pos = (0, 0)
    count = 0
    rot = 0
    new_tagets = laser_targets

    while len(laser_targets) > 0:
        last_target = [-1]
        rot += 1
        laser_targets = new_tagets
        new_tagets = []
        for target in laser_targets:
            if last_target[0] == target[0]:
                new_tagets.append(target)
                last_target = target
                continue
            count += 1
            if count == asteroid_num:   
                asteroid_num_pos = (target[2], target[3])

            # print("Rot #{} Destroyed #{}: {}".format(rot, count, target))          
            last_target = target
    
    return asteroid_num_pos

def annihilateAsteroids(input_value):
    input_value = input_value.split('\n')
    asteroid_map = []
    for line in input_value:
        line = list(line)
        asteroid_map.append(line)

    i, (x, y) = findBestAsteroid(asteroid_map)
    (x, y) = rotatingLaser(asteroid_map, x, y, 200)

    return y * 100 + x