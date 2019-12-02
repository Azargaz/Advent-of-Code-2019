const assert = require('assert');
const opcode = require('./opcode');
const opcode_two = require('./opcode_two');
const expect = require('chai').expect;
const fs = require('fs');

// Day 2 - part I tests
describe('Day 2 - Part I Intcode Computer', () => {
	it('should return 3500,9,10,70,2,3,11,0,99,30,40,50 when input is 1,9,10,3,2,3,11,0,99,30,40,50', () => {
		let input = '1,9,10,3,2,3,11,0,99,30,40,50';
		let output = '3500,9,10,70,2,3,11,0,99,30,40,50';
		assert.strictEqual(opcode(input).join(), output);
	});
});

describe('Day 2 - Part I Intcode Computer', () => {
	it('should return 2,0,0,0,99 when input is 1,0,0,0,99', () => {
		let input = '1,0,0,0,99';
		let output = '2,0,0,0,99';
		assert.strictEqual(opcode(input).join(), output);
	});
});

describe('Day 2 - Part I Intcode Computer', () => {
	it('should return 2,3,0,6,99 when input is 2,3,0,3,99', () => {
		let input = '2,3,0,3,99';
		let output = '2,3,0,6,99';
		assert.strictEqual(opcode(input).join(), output);
	});
});

describe('Day 2 - Part I Intcode Computer', () => {
	it('should return 2,4,4,5,99,9801 when input is 2,4,4,5,99,0', () => {
		let input = '2,4,4,5,99,0';
		let output = '2,4,4,5,99,9801';
		assert.strictEqual(opcode(input).join(), output);
	});
});

describe('Day 2 - Part I Intcode Computer', () => {
	it('should return 30,1,1,4,2,5,6,0,99 when input is 1,1,1,4,99,5,6,0,99', () => {
		let input = '1,1,1,4,99,5,6,0,99';
		let output = '30,1,1,4,2,5,6,0,99';
		assert.strictEqual(opcode(input).join(), output);
	});
});

describe('Day 2 - Part I Intcode Computer solution', () => {
	let input;
	it('should return not undefined', (done) => {
		fs.readFile('./day-2/input.txt', 'utf8', (err, data) => {
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
		const output = opcode(input)[0];
		console.log(`\tSolution to part I: ${output}`);
		expect(output).to.be.a('number');
	});
});

// Day 2 - part II tests
describe('Day 2 - Part II Intcode Computer solution', () => {
	let input;
	let result;
	it('should return not undefined', (done) => {
		fs.readFile('./day-2/input2.txt', 'utf8', (err, data) => {
			if (err) {
				console.error(err);
				return;
			}
			input = data;
			expect(input).to.be.not.undefined;
			done();
		});
	});

	it(`should return 19690720 when input is ${input}`, (done) => {
		result = opcode_two(input, 19690720);
		const output = result[0];
		assert.strictEqual(output, 19690720);
		done();
	});

	it('should return valid solution', () => {		
		const output = 100 * result[1] + result[2];
		console.log(`\tSolution to part II: ${output}`);
		expect(output).to.be.a('number');
	});
});