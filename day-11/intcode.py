index = 0
rel_base = 0

def checkIndex(program, i):
    while i >= len(program):
        program.append(0)

def read_param(program, param, mode, relative_base):
    if mode is '0':
        checkIndex(program, param)
        return program[param]
    elif mode is '1':
        return param  
    elif mode is '2':
        checkIndex(program, relative_base + param)
        return program[relative_base + param]

def write_param(program, param, mode, relative_base):
    if mode is '0' or mode is '1':
        return param
    elif mode is '2':
        return param + relative_base

def processIntcode(program, input_value):
    program = program.split(',')

    for i in range(0, len(program)):
        program[i] = int(program[i])

    input_value = int(input_value)
    
    global index
    global rel_base

    i = index
    relative_base = rel_base
    output = []

    while i < len(program):
        intcode = list(reversed(str(program[i])))

        while len(intcode) < 5:
            intcode.append('0')

        if intcode[0] is '9' and intcode[1] is '9':
            return 99, ''

        operation = intcode[0]
        par1_mode = intcode[2]
        par2_mode = intcode[3]
        par3_mode = intcode[4]

        skip = 0
        par1 = 0
        par2 = 0
        par3 = 0

        if operation in ('1', '2', '5', '6', '7', '8'):
            par1 = read_param(program, int(program[i+1]), par1_mode, relative_base)
            par2 = read_param(program, int(program[i+2]), par2_mode, relative_base)

        if operation in ('1', '2', '7', '8'):
            par3 = write_param(program, int(program[i+3]), par3_mode, relative_base)
            checkIndex(program, par3)
            skip = 4

        if operation in ('4', '9'):
            par1 = read_param(program, int(program[i+1]), par1_mode, relative_base)
            skip = 2

        if operation in ('3'):
            par1 = write_param(program, int(program[i+1]), par1_mode, relative_base)
            checkIndex(program, par1)
            skip = 2

        if operation is '1':
            program[par3] = par1 + par2
        elif operation is '2':
            program[par3] = par1 * par2
        elif operation is '3':
            program[par1] = input_value
        elif operation is '4':           
            output.append(par1)
            if len(output) == 2:
                index = i + skip
                rel_base = relative_base
                return output, ','.join(map(str, program))
        elif operation is '5':
            if par1 != 0:
                i = par2
                continue
            else:
                skip = 3
        elif operation is '6':
            if par1 == 0:
                i = par2
                continue
            else:
                skip = 3
        elif operation is '7':            
            if par1 < par2:
                program[par3] = 1
            else:
                program[par3] = 0
        elif operation is '8':            
            if par1 == par2:
                program[par3] = 1
            else:
                program[par3] = 0
        elif operation is '9':
            relative_base += par1
        
        i += skip 
        index = i
        rel_base = relative_base   
    
    return output, ','.join(map(str, program))