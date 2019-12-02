const opcode_two = (input, expected) => {
    let inputArray = [];

    for(x = 0; x <= 99; x++) {
        for(y = 0; y <= 99; y++) {
            inputArray = input
                .split(',')
                .map(x => parseInt(x));

            inputArray[1] = x;
            inputArray[2] = y;

            for(i = 0; i < inputArray.length; i+=4) {
                if(inputArray[i] === 1) {
                    inputArray[inputArray[i+3]] = inputArray[inputArray[i+1]] + inputArray[inputArray[i+2]];
                } else if(inputArray[i] === 2) {
                    inputArray[inputArray[i+3]] = inputArray[inputArray[i+1]] * inputArray[inputArray[i+2]];
                } else if(inputArray[i] === 99)
                    break;
            }

            if(inputArray[0] === expected)
                return inputArray;
        }
    }

	return inputArray;
};

module.exports = opcode_two;
