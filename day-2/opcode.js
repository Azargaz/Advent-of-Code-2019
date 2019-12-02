const opcode = input => {
    let inputArray = input
        .split(',')
        .map(x => parseInt(x));

    for(i = 0; i < inputArray.length; i+=4) {
        if(inputArray[i] === 1) {
            inputArray[inputArray[i+3]] = inputArray[inputArray[i+1]] + inputArray[inputArray[i+2]];
        } else if(inputArray[i] === 2) {
            inputArray[inputArray[i+3]] = inputArray[inputArray[i+1]] * inputArray[inputArray[i+2]];
        } else if(inputArray[i] === 99)
            break;
    }    

	return inputArray;
};

module.exports = opcode;
