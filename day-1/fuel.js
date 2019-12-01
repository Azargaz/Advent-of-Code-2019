const fuel = input => {
    let inputArray = input
        .split('\n')
        .map(el => parseInt(el.trim()), 10);

	inputArray = inputArray.map(el => Math.floor(el / 3.0) - 2);
	const total = inputArray.reduce((a, b) => a + b);
	return total;
};

module.exports = fuel;
