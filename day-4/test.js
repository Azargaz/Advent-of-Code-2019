const assert = require('assert');
const password = require('./password');
const expect = require('chai').expect;

// Day 4 - part I tests
describe('Day 4 - Part I Secure Container', () => {
	it('should return 1 when input is 111111', () => {
		let input = '111111';
		assert.strictEqual(password(input, input), 1);
	});
});

describe('Day 4 - Part I Secure Container', () => {
	it('should return 0 when input is 223450', () => {
		let input = '223450';
		assert.strictEqual(password(input, input), 0);
	});
});

describe('Day 4 - Part I Secure Container', () => {
	it('should return 0 when input is 123789', () => {
		let input = '123789';
		assert.strictEqual(password(input, input), 0);
	});
});

describe('Day 4 - Part I Secure Container solution', () => {
	it('should return valid solution', () => {
		let inputMin = '372037';
		let inputMax = '905157';
		const output = password(inputMin, inputMax);
		console.log(`\tSolution to part I: ${output}`);
		expect(output).to.be.a('number');
	});
});