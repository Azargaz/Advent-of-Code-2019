const isValid = (pass) => {
    pass = pass.toString().split('').map(x => parseInt(x));

    let hasDoubleDigits = false;
    let isDecreasing = false;
    pass.reduce((cur, next) => {
        if(cur === next) hasDoubleDigits = true;
        if(next < cur) isDecreasing = true;
        return next;
    });

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
