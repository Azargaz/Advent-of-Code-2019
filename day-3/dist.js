const move = (x, y, dir, step) => {
    if(dir === 'U')
        y += step;
    if(dir === 'D')
        y -= step;
    if(dir === 'R')
        x += step;
    if(dir === 'L')
        x -= step;
    return {x, y};
};

const manhattan = ({x, y}) => {
    return Math.abs(x) + Math.abs(y);
};

const dist = input => {  
    let rows = input
        .split('\n');

    let firstWire = [];
    let secondWire = [];
    let curPos = {
        x: 0,
        y: 0
    }

    row = rows[0].split(',');

    row.forEach(col => {
        let dir = col.slice(0, 1);
        col = parseInt(col.slice(1));

        while(col > 0) {
            firstWire.push(curPos);
            curPos = move(curPos.x, curPos.y, dir, 1);
            col--;
        }
    });

    row = rows[1].split(',');
    curPos = {
        x: 0,
        y: 0
    }

    row.forEach(col => {
        let dir = col.slice(0, 1);
        col = parseInt(col.slice(1));

        while(col > 0) {
            secondWire.push(curPos);
            curPos = move(curPos.x, curPos.y, dir, 1);
            col--;
        }
    });

    let positions = firstWire.filter((pos) => {
        return secondWire.findIndex((el) => (el.x === pos.x && el.y === pos.y)) !== -1;
    });

    if(positions.length <= 0) return 0;

    let min = manhattan(positions[positions.length-1]);
    positions.forEach((pos) => {
        const dist = manhattan(pos);
        if(dist === 0) return;
        if(dist < min) min = dist;
    });
    
	return min;
};

module.exports = dist;
