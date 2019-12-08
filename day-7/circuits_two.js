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

const processIntcodes = (input, phase, amp) => {
    let inputArray = amp.program;
    let i = amp.index;
    let usedPhase = false;

    let skip = 0;
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
            inputArray[inputArray[i+1]] = (amp.index === 0 && !usedPhase) ? phase : input;
            usedPhase = true;
        } else if(intcode[0] === '4') {
            amp.output = par1;
            amp.index = i+skip;
            amp.program = inputArray.slice();
            break;            
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
        } else if(intcode.length === 2 && intcode[0] === '9' && intcode[1] === '9') {
            amp.stop = true;
            break;
        }            

        i += skip;
    }
};

const testPermutation = (phases, programs) => {
    let savedIndexes = [0, 0, 0, 0, 0];
    let amp = {
        output: 0,
        index: 0,
        program: [],
        stop: false
    }

    let output = 0;

    for(let j = 0; j < phases.length; j++) {
        amp.index = savedIndexes[j];
        amp.program = programs[j];

        processIntcodes(amp.output, phases[j], amp);

        savedIndexes[j] = amp.index;
        programs[j] = amp.program;

        // console.log(j, amp.index, amp.output);

        if(amp.stop) {
            output = amp.output;
            break;
        }

        if(j === phases.length - 1) {
            j = -1;
        }
    }

    return output;
};

var phasesPermutations = [];

const circuits = (program) => {
    if(phasesPermutations.length <= 0) {
        permuteArray([5, 6, 7, 8, 9], phasesPermutations);
    }

    program = program
        .split(',')
        .map(x => parseInt(x));

    let output = 0;
    let curInput = 0;
    let currentPrograms = [];
    
    for(let i = 0; i < phasesPermutations.length; i++) {
        currentPrograms = [program, program, program, program, program];
        
        // console.log(`Start: ${i+1}/${phasesPermutations.length}`);
        curInput = testPermutation(phasesPermutations[i], currentPrograms);
        // console.log(`Done: ${i+1}/${phasesPermutations.length}`);

        if(curInput >= output)
            output = curInput;
    }

	return output;
};

module.exports = circuits;