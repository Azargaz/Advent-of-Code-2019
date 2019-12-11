from station import findMonitoringStation, annihilateAsteroids

input_value = open("input.txt", "r").read()
# input_value = """.#..##.###...#######
# ##.############..##.
# .#.######.########.#
# .###.#######.####.#.
# #####.##.#.##.###.##
# ..#####..#.#########
# ####################
# #.####....###.#.#.##
# ##.#################
# #####.##.###..####..
# ..######..##.#######
# ####.##.####...##..#
# .#####..#.######.###
# ##...#.##########...
# #.##########.#######
# .####.#.###.###.#.##
# ....##.##.###..#####
# .#.#.###########.###
# #.#.#.#####.####.###
# ###.##.####.##.#..##"""

result, (x, y) = findMonitoringStation(input_value)
print("Solution to part I: {}".format(result))

result = annihilateAsteroids(input_value)
print("Solution to part II: {}".format(result))