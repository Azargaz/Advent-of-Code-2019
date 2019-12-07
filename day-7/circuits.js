const processIntcodes = (input, program, phase) => {
    let inputArray = program
        .split(',')
        .map(x => parseInt(x));

    let usedPhase = false;
    let ampOutput = 0;
    let i = 0;
    let skip = 2;
    let par1 = 0;
    let par2 = 0;
    let par3 = 0;

    while(i < inputArray.length) {
        let intcode = inputArray[i].toString().split('');
        intcode.reverse();

        skip = 2;
        par1 = 0;
        par2 = 0;
        par3 = 0;

        par1 = (intcode.length < 3 || intcode[2] === '0') ? inputArray[inputArray[i+1]] : inputArray[i+1];
        
        if(['1', '2', '5', '6', '7', '8'].includes(intcode[0])) {
            skip = 4;
            par2 = (intcode.length < 4 || intcode[3] === '0') ? inputArray[inputArray[i+2]] : inputArray[i+2];
            par3 = inputArray[i+3];
        }

        if(intcode[0] === '1') {
            inputArray[par3] = par1 + par2;
        } else if(intcode[0] === '2') {
            inputArray[par3] = par1 * par2;
        } else if(intcode[0] === '3') {
            inputArray[inputArray[i+1]] = usedPhase ? input : phase;
            usedPhase = true;
        } else if(intcode[0] === '4') {
            ampOutput = par1;
        } else if(intcode[0] === '5') {
            if(par1 !== 0) {
                i = par2;
                continue;
            } else {
                skip = 3;
            }     
        } else if(intcode[0] === '6') {
            if(par1 === 0) {
                i = par2;
                continue;
            } else {
                skip = 3;
            }
        } else if(intcode[0] === '7') {
            if(par1 < par2) {
                inputArray[par3] = 1;
            } else {
                inputArray[par3] = 0;
            }
        } else if(intcode[0] === '8') {
            if(par1 === par2) {
                inputArray[par3] = 1;
            } else {
                inputArray[par3] = 0;
            }
        } else if(intcode.length === 2 && intcode[0] === '9' && intcode[1] === '9')
            break;

        i += skip;
    }

	return ampOutput;
};

const permuteArray = (array, result, rest = []) => {
    if(array.length === 0) {
        result.push(rest);
    } else {
        for(let i = 0; i < array.length; i++) {
            let cur = array.slice();
            let next = cur.splice(i, 1);
            permuteArray(cur.slice(), result, rest.concat(next));
        }
    }
};

var phasesPermutations = [];

const circuits = (program) => {
    if(phasesPermutations.length <= 0) {
        permuteArray([0, 1, 2, 3, 4], phasesPermutations);
    }

    let output = 0;
    let curInput = 0;

    for(let i = 0; i < phasesPermutations.length; i++) {
        curInput = 0;
        for(let j = 0; j < phasesPermutations[i].length; j++) {
            curInput = processIntcodes(curInput, program, phasesPermutations[i][j])
        }
        if(curInput >= output)
            output = curInput;
    }

	return output;
};

module.exports = circuits;