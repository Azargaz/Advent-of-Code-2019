const assert = require('assert');
const fuel = require('./fuel');
const expect = require('chai').expect;
const fs = require('fs');

// Day 1 - part I test
describe('Part One Fuel Counter-Upper', () => {
	it('should return 34241 when input is 12, 14, 1969, 100756', () => {
		let input = `12 
        14
        1969
        100756`;
		assert.strictEqual(fuel(input), 34241);
	});
});

describe('Part One Fuel Counter-Upper solution', () => {
	let input;
	
	it('should return not undefined', (done) => {
		fs.readFile('./day-1/input.txt', 'utf8', (err, data) => {
			if (err) {
				console.error(err);
				return;
			}
			input = data;
			expect(input).to.be.not.undefined;
			done();
		});
	});

	it('should return valid solution', () => {
		const output = fuel(input);
		console.log(`\tSolution: ${output}`);
		expect(output).to.be.a('number');
	});
});
