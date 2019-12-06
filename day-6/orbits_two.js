const orbits = (input) => {
    let inputArray = input
        .replace(/\r/g, '')
        .split('\n');

    let output = 0;
    let orbitTree = new Map();

    orbitTree.set('COM', null);

    // Transform input into map of orbits (keys) and their parent orbits (values)
    inputArray.forEach(element => {
        let orbit = element.split(')');
        orbitTree.set(orbit[1], orbit[0]);
    });

    let pathToYou = [];
    let pathToSan = [];

    // Get all orbits from YOU to COM
    let node = 'YOU';
    while(node !== null) {
        node = orbitTree.get(node);
        pathToYou.push(node);
    }

    // Get all orbits from SAN to COM
    node = 'SAN';
    while(node !== null) {
        node = orbitTree.get(node);
        pathToSan.push(node);
    }

    let commonParent = '';

    // Find common orbit on path from YOU to COM and from SAN to COM
    pathToYou.some(orbit => {
        if(pathToSan.includes(orbit)) {
            commonParent = orbit;
            return true;
        }
        return false;
    });

    // Calculate distance from YOU to commonParent
    for(i = 0; i < pathToYou.length; i++) {
        if(pathToYou[i] === commonParent) {
            commonParent = pathToYou[i];
            break;
        }
        output++;
    }

    // Calculate distance from SAN to commonParent
    for(i = 0; i < pathToSan.length; i++) {
        if(pathToSan[i] === commonParent) {
            break;
        }
        output++;
    }

    return output;
};

module.exports = orbits;