const assert = require('assert');
const circuits = require('./circuits');
const expect = require('chai').expect;
const fs = require('fs');

// Day 7 - part I tests
describe('Day 7 - Part I Amplification Circuit', () => {
    it('should return 43210 when input is 3,15,3,16,1002,16,10,16,1,16,15,15,4,15,99,0,0', () => {
		let program = '3,15,3,16,1002,16,10,16,1,16,15,15,4,15,99,0,0';
		assert.strictEqual(circuits(program), 43210);
	});
});

describe('Day 7 - Part I Amplification Circuit', () => {
    it('should return 54321 when input is 3,23,3,24,1002,24,10,24,1002,23,-1,23,101,5,23,23,1,24,23,23,4,23,99,0,0', () => {
		let program = '3,23,3,24,1002,24,10,24,1002,23,-1,23,101,5,23,23,1,24,23,23,4,23,99,0,0';
		assert.strictEqual(circuits(program), 54321);
	});
});

describe('Day 7 - Part I Amplification Circuit', () => {
    it('should return 65210 when input is 3,31,3,32,1002,32,10,32,1001,31,-2,31,1007,31,0,33,1002,33,7,33,1,33,31,31,1,32,31,31,4,31,99,0,0,0', () => {
		let program = '3,31,3,32,1002,32,10,32,1001,31,-2,31,1007,31,0,33,1002,33,7,33,1,33,31,31,1,32,31,31,4,31,99,0,0,0';
		assert.strictEqual(circuits(program), 65210);
	});
});

describe('Day 7 - Part I Amplification Circuit solution', () => {
	let input;
	it('should return not undefined', (done) => {
		fs.readFile('./day-7/input.txt', 'utf8', (err, data) => {
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
		const output = circuits(input);
		console.log(`\tSolution to part I: ${output}`);
		expect(output).to.be.a('number');
	});
});