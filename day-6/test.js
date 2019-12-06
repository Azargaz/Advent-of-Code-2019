const assert = require('assert');
const orbits = require('./orbits');
const orbits_two = require('./orbits_two');
const expect = require('chai').expect;
const fs = require('fs');

// Day 6 - part I tests
describe('Day 6 - Part I Universal Orbit Map', () => {
    it('should return 42 when input is COM)B B)C C)D D)E E)F B)G G)H D)I E)J J)K K)L', () => {
		let input = `COM)B
B)C
C)D
D)E
E)F
B)G
G)H
D)I
E)J
J)K
K)L`;
		assert.strictEqual(orbits(input), 42);
	});
});

describe('Day 6 - Part I Universal Orbit Map', () => {
    it('should return 42 when input is (different order of) COM)B B)C C)D D)E E)F B)G G)H D)I E)J J)K K)L', () => {
        let input = `E)F
K)L
D)E
COM)B
B)G
G)H
D)I
E)J
B)C
C)D
J)K`;
		assert.strictEqual(orbits(input), 42);
	});
});

describe('Day 6 - Part I Universal Orbit Map solution', () => {
	let input;
	it('should return not undefined', (done) => {
		fs.readFile('./day-6/input.txt', 'utf8', (err, data) => {
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
		const output = orbits(input);
		console.log(`\tSolution to part I: ${output}`);
		expect(output).to.be.a('number');
	});
});

// Day 6 - part II tests
describe('Day 6 - Part II Universal Orbit Map', () => {
    it('should return 4 when input is COM)B B)C C)D D)E E)F B)G G)H D)I E)J J)K K)L K)YOU I)SAN', () => {
        let input = `COM)B
B)C
C)D
D)E
E)F
B)G
G)H
D)I
E)J
J)K
K)L
K)YOU
I)SAN`;
		assert.strictEqual(orbits_two(input), 4);
	});
});

describe('Day 6 - Part II Universal Orbit Map solution', () => {
	let input;
	it('should return not undefined', (done) => {
		fs.readFile('./day-6/input.txt', 'utf8', (err, data) => {
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
		const output = orbits_two(input);
		console.log(`\tSolution to part II: ${output}`);
		expect(output).to.be.a('number');
	});
});