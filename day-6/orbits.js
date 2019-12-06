const orbits = (input) => {
    let inputArray = input
        .replace(/\r/g, '')
        .split('\n');

    let output = 0;
    let orbitTree = new Map();

    orbitTree.set('COM', null);

    inputArray.forEach(element => {
        let orbit = element.split(')');
        orbitTree.set(orbit[1], orbit[0]);
    });

    let node = '';

    orbitTree.forEach((value) => {
        node = value;
        while(node !== null) {
            node = orbitTree.get(node);
            output++;
        }
    });

    return output;
};

module.exports = orbits;