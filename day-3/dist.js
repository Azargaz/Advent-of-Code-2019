const move = (x, y, instruction) => {
    const step = parseInt(instruction.slice(1)); 
    const dir = instruction.slice(0, 1);

    if(dir === 'U')
        y += step;
    if(dir === 'D')
        y -= step;
    if(dir === 'R')
        x += step;
    if(dir === 'L')
        x -= step;
    
    return {x, y};
}

const manhattan = ({x, y}) => {
    return Math.abs(x) + Math.abs(y);
};

const dist = input => {  
    let inputArray = input.split('\n');
    let firstWire = inputArray[0].split(',');
    let secondWire = inputArray[1].split(',');

    let pos1 = { x: 0, y: 0 };
    let pos2 = { x: 0, y: 0 };

    let crossPos = [];

    for(i = 0; i < firstWire.length; i++) {
        if(i === 0) {
            pos1 = { x: 0, y: 0 };
        }

        let newPos1 = move(pos1.x, pos1.y, firstWire[i]);
            
        let xMin1 = newPos1.x < pos1.x ? newPos1.x : pos1.x;
        let xMax1 = newPos1.x > pos1.x ? newPos1.x : pos1.x;
        let yMin1 = newPos1.y < pos1.y ? newPos1.y : pos1.y;
        let yMax1 = newPos1.y > pos1.y ? newPos1.y : pos1.y; 

        for(j = 0; j < secondWire.length; j++) {   
            if(j === 0) {
                pos2 = { x: 0, y: 0 };
            }
             
            let newPos2 = move(pos2.x, pos2.y, secondWire[j]);  

            let xMin2 = newPos2.x < pos2.x ? newPos2.x : pos2.x;
            let xMax2 = newPos2.x > pos2.x ? newPos2.x : pos2.x;
            let yMin2 = newPos2.y < pos2.y ? newPos2.y : pos2.y;
            let yMax2 = newPos2.y > pos2.y ? newPos2.y : pos2.y; 

            if(newPos1.x === pos1.x && newPos2.y === pos2.y) {
                if(pos2.y >= yMin1 && pos2.y <= yMax1 && pos1.x >= xMin2 && pos1.x <= xMax2)
                    crossPos.push({x: pos1.x, y: pos2.y});
            } else if(newPos1.y === pos1.y && newPos2.x === pos2.x) {
                if(pos2.x >= xMin1 && pos2.x <= xMax1 && pos1.y >= yMin2 && pos1.y <= yMax2)
                    crossPos.push({x: pos2.x, y: pos1.y});
            }

            pos2 = newPos2;
        }

        pos1 = newPos1;
    }

    crossPos = crossPos.filter((pos) => !(pos.x === 0 && pos.y === 0));

    let min = manhattan(crossPos[0]);
    crossPos.forEach((pos) => {
        let dist = manhattan(pos);
        if(dist < min) min = dist;
    })

    return min;    
};

module.exports = dist;
