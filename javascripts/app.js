// Rover Object Goes Here
// ======================

// let keys = {'N': 70, 'E': 82, 'W': 76, 'S': 66};
const grid = document.getElementById('grid');

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

document.addEventListener('keyup', (ev) => {
  if (!ev.ctrlKey) { // When refreshing the browser with ctrl + r the robot directions won't be affected
    switch(ev.keyCode) {
      case 70:
        if (robot1.active) {
          moveForward(robot1);
          robot1.active = false;
          robot2.active = true;
          return
  
        } else if (robot2.active) {
          moveForward(robot2);
          robot2.active = false;
          robot3.active = true;
          return
  
        } else if (robot3.active) {
          moveForward(robot3)
          robot3.active = false;
          robot1.active = true;
          return
        }
      break;
      case 66:
        if (robot1.active) {
          moveBackward(robot1);
          robot1.active = false;
          robot2.active = true;
          return
  
        } else if (robot2.active) {
          moveBackward(robot2);
          robot2.active = false;
          robot3.active = true;
          return
  
        } else if (robot3.active) {
          moveBackward(robot3)
          robot3.active = false;
          robot1.active = true;
          return
        }
      break;
      case 82:
        if (robot1.active) {
          turnRight(robot1);
          return
  
        } else if (robot2.active) {
          turnRight(robot2);
          return
  
        } else if (robot3.active) {
          turnRight(robot3)
          return
        }
      break;
      case 76:
        if (robot1.active) {
          turnLeft(robot1);
          return
  
        } else if (robot2.active) {
          turnLeft(robot2);
          return
  
        } else if (robot3.active) {
          turnLeft(robot3)
          return
        }
      break;
      default:
        console.log('Invalid key pressed')
      break;
    }
  }
})

function initializeGame() {
  for (let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      renderMatrix(i, j)
    }
  }

  createObstacles(obstacle1);
  createObstacles(obstacle2);
  createObstacles(obstacle3);
  createObstacles(obstacle4);

  createRobot(robot1);
  createRobot(robot2);
  createRobot(robot3);
}

function moveForward(robot){
  switch(robot.direction) {
    case 'N':
      if (robot.coords.x !== 0) {
        if (matrix[robot.coords.x - 1][robot.coords.y] === null) {
          matrix[robot.coords.x - 1][robot.coords.y] = "robot";
          matrix[robot.coords.x][robot.coords.y] = null

          robot.coords.x = robot.coords.x - 1;
          renderRobot(robot);
        } else if(matrix[robot.coords.x - 1][robot.coords.y] === 'robot') {
          M.toast({html: `Robot ${robot._id} has a friend in front !`})
        } else if (matrix[robot.coords.x - 1][robot.coords.y] === 'obstacle') {
          M.toast({html: `Watch out Robot ${robot._id} ! There is an obstacle !`})
        }
      }
    break;
    case 'E':
      if (robot.coords.y !== 9) {
        if (matrix[robot.coords.x][robot.coords.y + 1] === null) {
          matrix[robot.coords.x][robot.coords.y + 1] = "robot";
          matrix[robot.coords.x][robot.coords.y] = null

          robot.coords.y = robot.coords.y + 1;
          renderRobot(robot)
        } else if(matrix[robot.coords.x][robot.coords.y + 1] === 'robot') {
          M.toast({html: `Robot ${robot._id} has a friend in front !`})
        } else if (matrix[robot.coords.x][robot.coords.y + 1] === 'obstacle') {
          M.toast({html: `Watch out Robot ${robot._id} ! There is an obstacle !`})
        }
      }
    break;
    case 'W':
      if (robot.coords.y !== 0) {
        if (matrix[robot.coords.x][robot.coords.y - 1] === null) {
          matrix[robot.coords.x][robot.coords.y - 1] = "robot";
          matrix[robot.coords.x][robot.coords.y] = null

          robot.coords.y = robot.coords.y - 1;
          renderRobot(robot)
        } else if(matrix[robot.coords.x][robot.coords.y - 1] === 'robot') {
          M.toast({html: `Robot ${robot._id} has a friend in front !`})
        } else if (matrix[robot.coords.x][robot.coords.y - 1] === 'obstacle') {
          M.toast({html: `Watch out Robot ${robot._id} ! There is an obstacle !`})
        }
      }
    break;
    case 'S':
      if (robot.coords.x !== 9) {
        if (matrix[robot.coords.x + 1][robot.coords.y] === null) {
          matrix[robot.coords.x + 1][robot.coords.y] = "robot";
          matrix[robot.coords.x][robot.coords.y] = null

          robot.coords.x = robot.coords.x + 1;
          renderRobot(robot)
        } else if(matrix[robot.coords.x + 1][robot.coords.y] === 'robot') {
          M.toast({html: `Robot ${robot._id} has a friend in front !`})
        } else if (matrix[robot.coords.x + 1][robot.coords.y] === 'obstacle') {
          M.toast({html: `Watch out Robot ${robot._id} ! There is an obstacle !`})
        }
      }
    break;  
  }
}

function moveBackward(robot) {
  switch(robot.direction) {
    case 'N':
      if (robot.coords.x !== 9) {
        if (matrix[robot.coords.x + 1][robot.coords.y] === null) {
          matrix[robot.coords.x + 1][robot.coords.y] = "robot";
          matrix[robot.coords.x][robot.coords.y] = null

          robot.coords.x = robot.coords.x + 1;
          renderRobot(robot);
        } else if(matrix[robot.coords.x + 1][robot.coords.y] === 'robot') {
          M.toast({html: `Robot ${robot._id} has a friend in front !`})
        } else if (matrix[robot.coords.x + 1][robot.coords.y] === 'obstacle') {
          M.toast({html: `Watch out Robot ${robot._id} ! There is an obstacle !`})
        }
      }
    break;
    case 'E':
      if (robot.coords.y !== 0) {
        if (matrix[robot.coords.x][robot.coords.y - 1] === null) {
          matrix[robot.coords.x][robot.coords.y - 1] = "robot";
          matrix[robot.coords.x][robot.coords.y] = null

          robot.coords.y = robot.coords.y - 1;
          renderRobot(robot);
        } else if(matrix[robot.coords.x][robot.coords.y - 1] === 'robot') {
          M.toast({html: `Robot ${robot._id} has a friend in front !`})
        } else if (matrix[robot.coords.x][robot.coords.y - 1] === 'obstacle') {
          M.toast({html: `Watch out Robot ${robot._id} ! There is an obstacle !`})
        }
      }
    break;
    case 'W':
      if (robot.coords.y !== 9) {
        if (matrix[robot.coords.x][robot.coords.y + 1] === null) {
          matrix[robot.coords.x][robot.coords.y + 1] = "robot";
          matrix[robot.coords.x][robot.coords.y] = null

          robot.coords.y = robot.coords.y + 1;
          renderRobot(robot);
        } else if(matrix[robot.coords.x][robot.coords.y + 1] === 'robot') {
          M.toast({html: `Robot ${robot._id} has a friend in front !`})
        } else if (matrix[robot.coords.x][robot.coords.y + 1] === 'obstacle') {
          M.toast({html: `Watch out Robot ${robot._id} ! There is an obstacle !`})
        }
      }
    break;
    case 'S':
      if (robot.coords.x !== 0) {
        if (matrix[robot.coords.x - 1][robot.coords.y] === null) {
          matrix[robot.coords.x - 1][robot.coords.y] = "robot";
          matrix[robot.coords.x][robot.coords.y] = null

          robot.coords.x = robot.coords.x - 1;
          renderRobot(robot);
        } else if(matrix[robot.coords.x - 1][robot.coords.y] === 'robot') {
          M.toast({html: `Robot ${robot._id} has a friend in front !`})
        } else if (matrix[robot.coords.x - 1][robot.coords.y] === 'obstacle') {
          M.toast({html: `Watch out Robot ${robot._id} ! There is an obstacle !`})
        }
      }
    break;  
  }
}

function turnRight(robot) {
  switch(robot.direction) {
    case 'N':
      robot.direction = 'E';
      removeRobotClasses(robot);
      robot.img.classList.add("east-direction");
    break;
    case 'E':
      robot.direction = 'S';
      removeRobotClasses(robot);
      robot.img.classList.add("south-direction");
    break;
    case 'S':
      robot.direction = 'W';
      removeRobotClasses(robot);
      robot.img.classList.add("west-direction");
      break;  
    case 'W':
      robot.direction = 'N';
      removeRobotClasses(robot);
    break;
  }
}

function turnLeft(robot) {
  switch(robot.direction) {
    case 'N':
      robot.direction = 'W';
      removeRobotClasses(robot);
      robot.img.classList.add("west-direction");
    break;
    case 'S':
      robot.direction = 'E';
      removeRobotClasses(robot);
      robot.img.classList.add("east-direction");
    break;  
    case 'W':
      robot.direction = 'S';
      removeRobotClasses(robot);
      robot.img.classList.add("south-direction");
      break;
    case 'E':
      robot.direction = 'N';
      removeRobotClasses(robot);
    break;
  }  
}

function renderMatrix (i, j) {
  const div = document.createElement('div');

  div.classList.add("matrix-elements");
  div.classList.add("center-elements");
  div.id = `${i},${j}`;

  grid.appendChild(div)
}

function renderRobot(robot) {
  const div = document.getElementById(`${robot.coords.x},${robot.coords.y}`)
  robot.img = document.getElementById(`robot${robot._id}`);

  div.appendChild(robot.img);
}

function randomCoords(el) {
  let x = Math.floor(Math.random() * 10);
  let y = Math.floor(Math.random() * 10);

  while(matrix[x][y] !== null) { // so that the elements have different coordinates always
    console.log("Aja")
    x = Math.floor(Math.random() * 10);
    y = Math.floor(Math.random() * 10);
  }

  matrix[x][y] = el
  return {
    x,
    y
  }
}

function removeRobotClasses(robot) {
  robot.img.classList.remove("south-direction");
  robot.img.classList.remove("west-direction");
  robot.img.classList.remove("east-direction");
}

function createRobot(robot) {
  const div = document.getElementById(`${robot.coords.x},${robot.coords.y}`);
    
  robot.img = document.createElement("i");
  robot.img.classList.add("fas");
  robot.img.classList.add("fa-chevron-circle-up");
  robot.img.classList.add(`robot${robot._id}`);
  robot.img.id = `robot${robot._id}`;

  div.appendChild(robot.img);
}

function createObstacles(obstacle) {
  const {x, y} = obstacle.coords

  const div = document.getElementById(`${x},${y}`);
  div.classList.add("obstacle");

  // matrix[x][y] = `obstacle${obstacle._id}`
}

console.log(matrix);

initializeGame();