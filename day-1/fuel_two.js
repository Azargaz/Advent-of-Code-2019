const fuel = input => {
    let inputArray = input
        .split('\n')
        .map(el => parseInt(el.trim()), 10);

	inputArray = inputArray.map(el => {
        let result = 0;
        while(Math.floor(el / 3.0) > 0) {            
            el = Math.floor(el / 3.0) - 2;
            el = el < 0 ? 0 : el;
            result += el;
        }
        return result;
    });
	const total = inputArray.reduce((a, b) => a + b);
	return total;
};

module.exports = fuel;