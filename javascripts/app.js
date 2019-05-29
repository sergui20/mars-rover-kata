// Rover Object Goes Here
// ======================
// let keys = {'N': 70, 'E': 82, 'W': 76, 'S': 66};
const grid = document.getElementById('grid');

let rover = {
  direction: 'N'
}

let robot1, robot2, robot3;

let robot1X = randomMatrixElement();
let robot1Y = randomMatrixElement();

let robot2X = randomMatrixElement();
let robot2Y = randomMatrixElement();

let robot3X = randomMatrixElement();
let robot3Y = randomMatrixElement();

document.addEventListener('keydown', (ev) => {
  switch(ev.keyCode) {
    case 70:
      moveForward('N');
    break;
    case 66:
      moveBackward('S');
    break;
    case 82:
      turnRight('E');
    break;
    case 76:
      turnLeft('W');
    break;
    default:
      console.log('Invalid key pressed')
    break;
  }
})

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

function initializeGame() {
  for (let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      const div = document.createElement('div');
      renderMatrix(div, i, j)
    }
  }

  createRobot(robot1, robot1X, robot1Y, 1);
  createRobot(robot2, robot2X, robot2Y, 2);
  createRobot(robot3, robot3X, robot3Y, 3);
}

function moveForward(){
  switch(rover.direction) {
    case 'N':
      if (robot1X !== 0) {
        robot1X = robot1X - 1;
        renderRobot(robot1X, robot1Y);
      }
    break;
    case 'E':
      if (robot1Y !== 9) {
        robot1Y = robot1Y + 1;
        renderRobot(robot1X, robot1Y)
      }
    break;
    case 'W':
      if (robot1Y !== 0) {
        robot1Y = robot1Y - 1;
        renderRobot(robot1X, robot1Y)
      }
    break;
    case 'S':
      if (robot1X !== 9) {
        robot1X = robot1X + 1;
        renderRobot(robot1X, robot1Y);
      }
    break;  
  }
}

function moveBackward() {
  switch(rover.direction) {
    case 'N':
      if (robot1X !== 9) {
        robot1X = robot1X + 1;
        renderRobot(robot1X, robot1Y)
      }
    break;
    case 'E':
      if (robot1Y !== 0) {
        robot1Y = robot1Y - 1;
        renderRobot(robot1X, robot1Y)
      }
    break;
    case 'W':
      if (robot1Y !== 9) {
        robot1Y = robot1Y + 1;
        renderRobot(robot1X, robot1Y)
      }
    break;
    case 'S':
      if (robot1X !== 0) {
        robot1X = robot1X - 1;
        renderRobot(robot1X, robot1Y);
      }
    break;  
  }
}

function turnRight() {
  switch(rover.direction) {
    case 'N':
      rover.direction = 'E';
      removeRobotClasses();
      robot1.classList.add("east-direction");
    break;
    case 'E':
      rover.direction = 'S';
      removeRobotClasses();
      robot1.classList.add("south-direction");
    break;
    case 'S':
      rover.direction = 'W';
      removeRobotClasses();
      robot1.classList.add("west-direction");
      break;  
    case 'W':
      rover.direction = 'N';
      removeRobotClasses();
    break;
  }
}

function turnLeft() {
  switch(rover.direction) {
    case 'N':
      rover.direction = 'W';
      removeRobotClasses();
      robot1.classList.add("west-direction");
    break;
    case 'S':
      rover.direction = 'E';
      removeRobotClasses();
      robot1.classList.add("east-direction");
    break;  
    case 'W':
      rover.direction = 'S';
      removeRobotClasses();
      robot1.classList.add("south-direction");
      break;
    case 'E':
      rover.direction = 'N';
      removeRobotClasses();
    break;
  }  
}

function renderMatrix (div, i, j) {
  div.classList.add("matrix-elements");
  div.classList.add("center-elements");
  div.id = `${i},${j}`;

  grid.appendChild(div)
}

function renderRobot(x, y) {
  const div = document.getElementById(`${x},${y}`)
  robot1 = document.getElementById("robot1");

  div.appendChild(robot1)
}

function randomMatrixElement() {
  return Math.floor(Math.random() * 10)
}

function removeRobotClasses() {
  robot1.classList.remove("south-direction");
  robot1.classList.remove("west-direction");
  robot1.classList.remove("east-direction");
}

function createRobot(robot, x, y, num) {
  const div = document.getElementById(`${x},${y}`);
    
  robot = document.createElement("i");
  robot.classList.add("fas");
  robot.classList.add("fa-chevron-circle-up");
  robot.classList.add(`robot${num}`);
  robot.id = `robot${num}`;

  div.appendChild(robot);
}

initializeGame();