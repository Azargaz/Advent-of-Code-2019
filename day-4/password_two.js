const isValid = (pass) => {
    pass = pass.toString().split('').map(x => parseInt(x));

    let hasDoubleDigits = false;
    let isDecreasing = false;

    let combo = 0;
    pass.reduce((last, cur) => {
        if(cur === last) {
            combo++;
        } else {
            if(!hasDoubleDigits && combo === 1) {
                hasDoubleDigits = true;
            }
            combo = 0;
        }
        if(cur < last) isDecreasing = true;
        return cur;
    });

    if(combo === 1) hasDoubleDigits = true;

    return hasDoubleDigits && !isDecreasing;
};

const password = (min, max) => {  
    min = parseInt(min);
    max = parseInt(max);

    let count = 0;
    for(cur = min; cur <= max; cur++) {
        count += isValid(cur) ? 1 : 0;
    }

    return count;
};

module.exports = password;
