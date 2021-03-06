const t_e_s_t = (input, program) => {  
    let inputArray = program
        .split(',')
        .map(x => parseInt(x));

    let output = 0;
    let i = 0;
    let skip = 2;
    let par1 = 0;
    let par2 = 0;

    while(i < inputArray.length) {
        let intcode = inputArray[i].toString().split('');
        intcode.reverse();

        // console.log(intcode);

        skip = 2;
        par1 = 0;
        par2 = 0;
        
        par1 = (intcode.length < 3 || intcode[2] === '0') ? inputArray[inputArray[i+1]] : inputArray[i+1];
        
        if(intcode[0] === '1' || intcode[0] === '2') {
            skip = 4;
            par2 = (intcode.length < 4 || intcode[3] === '0') ? inputArray[inputArray[i+2]] : inputArray[i+2];
            par3 = inputArray[i+3];
        }

        if(intcode[0] === '1') {
            inputArray[par3] = par1 + par2;
        } else if(intcode[0] === '2') {
            inputArray[par3] = par1 * par2;
        } else if(intcode[0] === '3') {
            inputArray[inputArray[i+1]] = input;
        } else if(intcode[0] === '4') {
            output = par1;
        } else if(intcode.length === 2 && intcode[0] === '9' && intcode[1] === '9')
            break;

        i += skip;
    }

	return output;
};

module.exports = t_e_s_t;
