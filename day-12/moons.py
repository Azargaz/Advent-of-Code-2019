import re

def printMoons(pos, vel):
    for j in range(0, len(pos)):
        p = pos[j]
        v = vel[j]
        print("pos=<x={}, y={}, z={}>, vel=<x={}, y={}, z={}>".format(p[0], p[1], p[2], v[0], v[1], v[2]))

def simulateMoons(input_value, steps, verbose=False):
    input_value = re.sub('[<>= x-z]', '', input_value).split('\n')

    moons_pos = []
    moons_vel = []
        
    for line in input_value:
        line = line.split(',')
        line = [int(i) for i in line]
        moons_pos.append(line)
        moons_vel.append([0, 0, 0])

    i = 0
    while i < steps:
        if verbose:
            print("After {} steps:".format(i))
            printMoons(moons_pos, moons_vel)

        for j in range(0, len(moons_pos)):
            p1 = moons_pos[j]
            v1 = moons_vel[j]
            for k in range(j, len(moons_pos)):
                if k == j:
                    continue

                p2 = moons_pos[k]
                v2 = moons_vel[k]
                
                for d in range(0, len(p1)):
                    if p1[d] == p2[d]:
                        continue
                    else:
                        if p1[d] > p2[d]:
                            v2[d] += 1
                            v1[d] -= 1
                        else:
                            v1[d] += 1
                            v2[d] -= 1

        for j in range(0, len(moons_pos)):
            p1 = moons_pos[j]
            v1 = moons_vel[j]

            for d in range(0, len(p1)):
                p1[d] += v1[d]
        
        i += 1

    pot_energy = []
    kin_energy = []
    total_energy = 0

    for x,y,z in moons_pos:
        pot_energy.append(abs(x) + abs(y) + abs(z))
    for x,y,z in moons_vel:
        kin_energy.append(abs(x) + abs(y) + abs(z))

    for i in range(0, len(pot_energy)):
        total_energy += pot_energy[i] * kin_energy[i]

    return total_energy