const assert = require('assert');
const t_e_s_t = require('./t_e_s_t');
const expect = require('chai').expect;
const fs = require('fs');

// Day 5 - part I tests
describe('Day 5 - Part I TEST', () => {
	it('should return 1 when input is 1 and 3,0,4,0,99', () => {
		let input = '3,0,4,0,99';
		assert.strictEqual(t_e_s_t(1, input), 1);
	});
});

describe('Day 5 - Part I TEST', () => {
	it('should return 0 when input is any number and 1002,4,3,4,33', () => {
		let input = '1002,4,3,4,33';
		assert.strictEqual(t_e_s_t(1, input), 0);
	});
});

describe('Day 5 - Part I TEST solution', () => {
	let input;
	it('should return not undefined', (done) => {
		fs.readFile('./day-5/input.txt', 'utf8', (err, data) => {
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
		const output = t_e_s_t(1, input);
		console.log(`\tSolution to part I: ${output}`);
		expect(output).to.be.a('number');
	});
});