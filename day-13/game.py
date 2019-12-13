from intcode import processIntcode

def validPositions(x, y, board):
    if x >= 0 and x < len(board[0]) and y >= 0 and y < len(board):
        return True
    return False

def play(input_value):
    result_arr = []
    intcode_input = 0
    result, program = processIntcode(input_value, intcode_input)
    while result != 99:
        result_arr.append(result)
        result, program = processIntcode(program, intcode_input)

    game_board = []

    for x, y, tile in result_arr:
        while y >= len(game_board):
            game_board.append([])

        while x >= len(game_board[y]):
            game_board[y].append(0)

        game_board[y][x] = tile

    count_blocks = 0

    for row in game_board:
        for element in row:
            if element == 2:
                count_blocks += 1

    return count_blocks