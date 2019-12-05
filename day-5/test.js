const assert = require('assert');
const t_e_s_t = require('./t_e_s_t');
const t_e_s_t_two = require('./t_e_s_t_two');
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

// Day 5 - part II tests
describe('Day 5 - Part II TEST', () => {
	let program = '3,9,8,9,10,9,4,9,99,-1,8';
	it('should return 0 when input is lower than 8', () => {
		assert.strictEqual(t_e_s_t_two(6, program), 0);
	});
	it('should return 0 when input is greater than 8', () => {
		assert.strictEqual(t_e_s_t_two(10, program), 0);
	});
	it('should return 1 when input is 8', () => {
		assert.strictEqual(t_e_s_t_two(8, program), 1);
	});
});

describe('Day 5 - Part II TEST', () => {
	let program = '3,9,7,9,10,9,4,9,99,-1,8';
	it('should return 1 when input is lower than 8', () => {
		assert.strictEqual(t_e_s_t_two(3, program), 1);
	});
	it('should return 0 when input is greater than 8', () => {
		assert.strictEqual(t_e_s_t_two(99, program), 0);
	});
	it('should return 0 when input is 8', () => {
		assert.strictEqual(t_e_s_t_two(8, program), 0);
	});
});

describe('Day 5 - Part II TEST', () => {
	let program = '3,3,1108,-1,8,3,4,3,99';
	it('should return 0 when input is lower than 8', () => {
		assert.strictEqual(t_e_s_t_two(1, program), 0);
	});
	it('should return 0 when input is greater than 8', () => {
		assert.strictEqual(t_e_s_t_two(11, program), 0);
	});
	it('should return 1 when input is 8', () => {
		assert.strictEqual(t_e_s_t_two(8, program), 1);
	});
});

describe('Day 5 - Part II TEST', () => {
	let program = '3,3,1107,-1,8,3,4,3,99';
	it('should return 1 when input is lower than 8', () => {
		assert.strictEqual(t_e_s_t_two(7, program), 1);
	});
	it('should return 0 when input is greater than 8', () => {
		assert.strictEqual(t_e_s_t_two(9, program), 0);
	});
	it('should return 0 when input is 8', () => {
		assert.strictEqual(t_e_s_t_two(8, program), 0);
	});
});

describe('Day 5 - Part II TEST', () => {
	let program = '3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9';
	it('should return 0 when input is 0', () => {
		assert.strictEqual(t_e_s_t_two(0, program), 0);
	});
	it('should return 1 when input is not 0', () => {
		assert.strictEqual(t_e_s_t_two(10, program), 1);
	});
});

describe('Day 5 - Part II TEST', () => {
	let program = '3,3,1105,-1,9,1101,0,0,12,4,12,99,1';
	it('should return 0 when input is 0', () => {
		assert.strictEqual(t_e_s_t_two(0, program), 0);
	});
	it('should return 1 when input is not 0', () => {
		assert.strictEqual(t_e_s_t_two(10, program), 1);
	});
});

describe('Day 5 - Part II TEST', () => {
	let program = '3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99';
	it('should return 999 when input is lower than 8', () => {
		assert.strictEqual(t_e_s_t_two(7, program), 999);
	});
	it('should return 1000 when input is equal to 8', () => {
		assert.strictEqual(t_e_s_t_two(8, program), 1000);
	});
	it('should 1001 when input is greater than 8', () => {
		assert.strictEqual(t_e_s_t_two(9, program), 1001);
	});
});

describe('Day 5 - Part II TEST solution', () => {
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
		const output = t_e_s_t_two(5, input);
		console.log(`\tSolution to part II: ${output}`);
		expect(output).to.be.a('number');
	});
});