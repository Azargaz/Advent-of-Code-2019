from intcode import processIntcode

program = open("input.txt", "r").read()
# program = '109,1,204,-1,1001,100,1,100,1008,100,16,101,1006,101,0,99' # copy of itself
# program = '104,1125899906842624,99' # outpust big number in the middle
# program = '109,1,203,11,209,8,204,1,99,10,0,42,0' # 42

result = processIntcode(program, 1)
print("Solution to part I: {}".format(result))