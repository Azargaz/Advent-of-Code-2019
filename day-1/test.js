const assert = require('assert');
const fuel = require('./fuel');
const fuel_two = require('./fuel_two');
const expect = require('chai').expect;
const fs = require('fs');

// Day 1 - part I tests
describe('Day 1 - Part I Fuel Counter-Upper', () => {
	it('should return 34241 when input is 12, 14, 1969, 100756', () => {
		let input = `12 
        14
        1969
        100756`;
		assert.strictEqual(fuel(input), 34241);
	});
});

describe('Day 1 - Part I Fuel Counter-Upper solution', () => {
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
		console.log(`\tSolution to part I: ${output}`);
		expect(output).to.be.a('number');
	});
});

// Day 1 - part II tests
describe('Day 1 - Part II Fuel Counter-Upper', () => {
	it('should return 51316 when input is 12, 14, 1969, 100756', () => {
		let input = `12 
        14
        1969
        100756`;
		assert.strictEqual(fuel_two(input), 51316);
	});
});

describe('Day 1 - Part II Fuel Counter-Upper solution', () => {
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
		const output = fuel_two(input);
		console.log(`\tSolution to part II: ${output}`);
		expect(output).to.be.a('number');
	});
});