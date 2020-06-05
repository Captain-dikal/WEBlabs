var soldier1, soldier2, interval, randomSpawnCoordinate, randIntException, maxValue = 100, intervalTimeout = 10;

randomSpawnCoordinate = function() {
  return Math.floor(Math.random() * maxValue);
};

randIntException = function(exp) {
  var n;
  while(true) {
  if((n = randomSpawnCoordinate()) != exp) {
    return n;
  }
  }
};

soldier1 = {
  name: 'Soldier1',
  health: 100,
  currentCoordinates: { x: 2, y: 2 },
  shot: function(x, y) {
  console.log(x, y);
  }
};

soldier2 = {
  name: 'Soldier2',
  health: 100,
  currentCoordinates: { x: 1, y: 1 },
  shot: function(x, y) {
  console.log(x, y);
  }
};

// random spawn soldier 1
soldier1.currentCoordinates.x = randomSpawnCoordinate();
soldier1.currentCoordinates.y = randomSpawnCoordinate();

// random spawn soldier 2
soldier2.currentCoordinates.x = randomSpawnCoordinate();
soldier2.currentCoordinates.y = (soldier1.currentCoordinates.x === soldier2.currentCoordinates.x) ? randIntException(soldier1.currentCoordinates.y) : randomSpawnCoordinate();

// start shooting
interval = setInterval(function() {
  var shotX, shotY;

  // Shot by soldier 1
  shotX = randIntException(soldier1.currentCoordinates.x);
  shotY = randIntException(soldier1.currentCoordinates.y);

  soldier1.shot(shotX, shotY);
  if(shotX === soldier2.currentCoordinates.x && shotY === soldier2.currentCoordinates.y) {
  soldier2.health = soldier2.health - 25;
  console.warn('soldier1 shot a soldier2');
  }

  // Shot by soldier 2
  shotX = randIntException(soldier2.currentCoordinates.x);
  shotY = randIntException(soldier2.currentCoordinates.y);
  soldier2.shot(shotX, shotY);

  if(shotX === soldier1.currentCoordinates.x && shotY === soldier1.currentCoordinates.y) {
  soldier1.health = soldier1.health - 25;
  console.warn('soldier2 shot a soldier1');
  }

  // If some soldier lost
  if (soldier1.health === 0) {
  clearInterval(interval);
  console.warn('Winner name = ' + soldier2.name + ' with health = ' + soldier2.health);
  console.warn('Loser name = ' + soldier1.name + ' with health = ' + soldier1.health);
  } else if(soldier2.health === 0) {
  clearInterval(interval);
  console.warn('Winner name = ' + soldier1.name + ' with health = ' + soldier1.health);
  console.warn('Loser name = ' + soldier2.name  + ' with health = ' + soldier2.health);
  }

}, intervalTimeout);


