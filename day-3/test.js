const assert = require('assert');
const dist = require('./dist');
const dist_two = require('./dist_two');
const expect = require('chai').expect;
const fs = require('fs');

// Day 3 - part I tests
describe('Day 3 - Part I Crossed Wires', () => {
	it('should return 6 when input is R8,U5,L5,D3\nU7,R6,D4,L4', () => {
		let input = 'R8,U5,L5,D3\nU7,R6,D4,L4';
		assert.strictEqual(dist(input), 6);
	});
});

describe('Day 3 - Part I Crossed Wires', () => {
	it('should return 159 when input is R75,D30,R83,U83,L12,D49,R71,U7,L72\nU62,R66,U55,R34,D71,R55,D58,R83', () => {
		let input = 'R75,D30,R83,U83,L12,D49,R71,U7,L72\nU62,R66,U55,R34,D71,R55,D58,R83';
		assert.strictEqual(dist(input), 159);
	});
});

describe('Day 3 - Part I Crossed Wires', () => {
	it('should return 135 when input is R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51\nU98,R91,D20,R16,D67,R40,U7,R15,U6,R7', () => {
		let input = 'R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51\nU98,R91,D20,R16,D67,R40,U7,R15,U6,R7';
		assert.strictEqual(dist(input), 135);
	});
});

describe('Day 3 - Part I Crossed Wires solution', () => {
	let input;
	it('should return not undefined', (done) => {
		fs.readFile('./day-3/input.txt', 'utf8', (err, data) => {
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
		const output = dist(input);
		console.log(`\tSolution to part I: ${output}`);
		expect(output).to.be.a('number');
	});
});

// Day 3 - part II tests
describe('Day 3 - Part II Crossed Wires', () => {
	it('should return 30 when input is R8,U5,L5,D3\nU7,R6,D4,L4', () => {
		let input = 'R8,U5,L5,D3\nU7,R6,D4,L4';
		assert.strictEqual(dist_two(input), 30);
	});
});

describe('Day 3 - Part II Crossed Wires', () => {
	it('should return 610 when input is R75,D30,R83,U83,L12,D49,R71,U7,L72\nU62,R66,U55,R34,D71,R55,D58,R83', () => {
		let input = 'R75,D30,R83,U83,L12,D49,R71,U7,L72\nU62,R66,U55,R34,D71,R55,D58,R83';
		assert.strictEqual(dist_two(input), 610);
	});
});

describe('Day 3 - Part II Crossed Wires', () => {
	it('should return 410 when input is R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51\nU98,R91,D20,R16,D67,R40,U7,R15,U6,R7', () => {
		let input = 'R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51\nU98,R91,D20,R16,D67,R40,U7,R15,U6,R7';
		assert.strictEqual(dist_two(input), 410);
	});
});

describe('Day 3 - Part II Crossed Wires solution', () => {
	let input;
	it('should return not undefined', (done) => {
		fs.readFile('./day-3/input.txt', 'utf8', (err, data) => {
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
		const output = dist_two(input);
		console.log(`\tSolution to part II: ${output}`);
		expect(output).to.be.a('number');
	});
});