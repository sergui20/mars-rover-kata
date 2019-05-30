document.addEventListener('keyup', handleKeyup)

function handleKeyup(ev) {
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
}

function moveForward(robot){
    switch(robot.direction) {
      case 'N':
        if (robot.coords.x !== 0) {
          switch(matrix[robot.coords.x - 1][robot.coords.y]) { // To validate if the robot can do the next movement, because of the obstacles, or other robots
            case null:
              matrix[robot.coords.x - 1][robot.coords.y] = "robot";
              matrix[robot.coords.x][robot.coords.y] = null
    
              robot.coords.x = robot.coords.x - 1;
              renderRobot(robot);
            break;
            case 'robot':
              M.toast({html: `Robot ${robot._id} has a friend in front !`})
            break;
            case 'obstacle':
              M.toast({html: `Watch out Robot ${robot._id} ! There is an obstacle !`})
            break;  
          }
        }
      break;
      case 'E':
        if (robot.coords.y !== 9) {
          switch(matrix[robot.coords.x][robot.coords.y + 1]) {
            case null:
              matrix[robot.coords.x][robot.coords.y + 1] = "robot";
              matrix[robot.coords.x][robot.coords.y] = null
    
              robot.coords.y = robot.coords.y + 1;
              renderRobot(robot);
            break;
            case 'robot':
              M.toast({html: `Robot ${robot._id} has a friend in front !`})
            break;
            case 'obstacle':
              M.toast({html: `Watch out Robot ${robot._id} ! There is an obstacle !`})
            break;  
          }
        }
      break;
      case 'W':
        if (robot.coords.y !== 0) {
          switch(matrix[robot.coords.x][robot.coords.y - 1]) {
            case null:
              matrix[robot.coords.x][robot.coords.y - 1] = "robot";
              matrix[robot.coords.x][robot.coords.y] = null
    
              robot.coords.y = robot.coords.y - 1;
              renderRobot(robot)
            break;
            case 'robot':
              M.toast({html: `Robot ${robot._id} has a friend in front !`})
            break;
            case 'obstacle':
              M.toast({html: `Watch out Robot ${robot._id} ! There is an obstacle !`})
            break;  
          }
        }
      break;
      case 'S':
        if (robot.coords.x !== 9) {
          switch(matrix[robot.coords.x + 1][robot.coords.y]) {
            case null:
              matrix[robot.coords.x + 1][robot.coords.y] = "robot";
              matrix[robot.coords.x][robot.coords.y] = null
    
              robot.coords.x = robot.coords.x + 1;
              renderRobot(robot)
            break;
            case 'robot':
              M.toast({html: `Robot ${robot._id} has a friend in front !`})
            break;
            case 'obstacle':
              M.toast({html: `Watch out Robot ${robot._id} ! There is an obstacle !`})
            break;  
          }
        }
      break;  
    }
}
  
function moveBackward(robot) {
    switch(robot.direction) {
      case 'N':
        if (robot.coords.x !== 9) {
          switch(matrix[robot.coords.x + 1][robot.coords.y]) {
            case null:
              matrix[robot.coords.x + 1][robot.coords.y] = "robot";
              matrix[robot.coords.x][robot.coords.y] = null
    
              robot.coords.x = robot.coords.x + 1;
              renderRobot(robot);
            break;
            case 'robot':
              M.toast({html: `Robot ${robot._id} has a friend behind !`})
            break;
            case 'obstacle':
              M.toast({html: `Watch out Robot ${robot._id} ! There is an obstacle !`})
            break;  
          }
        }
    break;
    case 'E':
        if (robot.coords.y !== 0) {
          switch(matrix[robot.coords.x][robot.coords.y - 1]) {
            case null:
              matrix[robot.coords.x][robot.coords.y - 1] = "robot";
              matrix[robot.coords.x][robot.coords.y] = null
    
              robot.coords.y = robot.coords.y - 1;
              renderRobot(robot);
            break;
            case 'robot':
              M.toast({html: `Robot ${robot._id} has a friend behind !`})
            break;
            case 'obstacle':
              M.toast({html: `Watch out Robot ${robot._id} ! There is an obstacle !`})
            break;  
          }
        }
      break;
      case 'W':
        if (robot.coords.y !== 9) {
          switch(matrix[robot.coords.x][robot.coords.y + 1]) {
            case null:
              matrix[robot.coords.x][robot.coords.y + 1] = "robot";
              matrix[robot.coords.x][robot.coords.y] = null
    
              robot.coords.y = robot.coords.y + 1;
              renderRobot(robot);
            break;
            case 'robot':
              M.toast({html: `Robot ${robot._id} has a friend behind !`})
            break;
            case 'obstacle':
              M.toast({html: `Watch out Robot ${robot._id} ! There is an obstacle !`})
          }
        }
    break;
    case 'S':
        if (robot.coords.x !== 0) {
          switch(matrix[robot.coords.x - 1][robot.coords.y]) {
            case null:
              matrix[robot.coords.x - 1][robot.coords.y] = "robot";
              matrix[robot.coords.x][robot.coords.y] = null
    
              robot.coords.x = robot.coords.x - 1;
              renderRobot(robot);
            break;
            case 'robot':
              M.toast({html: `Robot ${robot._id} has a friend behind !`})
            break;
            case 'obstacle':
              M.toast({html: `Watch out Robot ${robot._id} ! There is an obstacle !`})
            break;  
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

function removeRobotClasses(robot) {
    robot.img.classList.remove("south-direction");
    robot.img.classList.remove("west-direction");
    robot.img.classList.remove("east-direction");
}

function renderRobot(robot) {
    const div = document.getElementById(`${robot.coords.x},${robot.coords.y}`)
    robot.img = document.getElementById(`robot${robot._id}`);
  
    div.appendChild(robot.img);
}