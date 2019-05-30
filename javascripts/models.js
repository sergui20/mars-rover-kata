let matrix = [
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null]
]

let robot1 = {
    _id: 1,
    direction: 'N',
    active: true,
    coords: randomCoords('robot'),
    img: null
}

let robot2 = {
    _id: 2,
    direction: 'N',
    active: false,
    coords: randomCoords('robot'),
    img: null
}

let robot3 = {
    _id: 3,
    direction: 'N',
    active: false,
    coords: randomCoords('robot'),
    img: null
}

let obstacle1 = {
    _id: 1,
    coords: randomCoords('obstacle'),
}

let obstacle2 = {
    _id: 2,
    coords: randomCoords('obstacle'),
}

let obstacle3 = {
    _id: 3,
    coords: randomCoords('obstacle'),
}

let obstacle4 = {
    _id: 4,
    coords: randomCoords('obstacle'),
}

function randomCoords(el) {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
  
    while(matrix[x][y] !== null) { // so that the elements have different coordinates always
      console.log("Changing coords...")
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    }
  
    matrix[x][y] = el
    
    return {
      x,
      y
    }
}