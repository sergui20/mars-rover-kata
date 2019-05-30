const grid = document.getElementById('grid');

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

function renderMatrix (i, j) {
  const div = document.createElement('div');

  div.classList.add("matrix-elements");
  div.classList.add("center-elements");
  div.id = `${i},${j}`;

  grid.appendChild(div)
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
}

initializeGame();