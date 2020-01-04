// for each of [-1, -1], [-1, 0], [0, -1], ... [1, 1]
// get a key that will hold it in the map
const diffsToKey = diff => {

};

// for any given coordinates get its slope against the queen
const slopeFromQueensCoordinates = (coordinates, queenCoordinates) => {

};

const obstacleAIsCloserToQueenThanObstacleB = (obstacleACoordinates, obstacleBCoordinates, queenCoordinates) => {

};

const queenAttack = (boardSize, queenCoordinates, obstaclesCoordinates) => {
    const closestObstacles = {};

    for (let i = 0; i < obstaclesCoordinates.length; i += 1) {
        const slopeAgainstQueen = slopeFromQueensCoordinates(obstaclesCoordinates[i], queenCoordinates);
        const key = diffsToKey(slopeAgainstQueen);
        // key will be null if square is unreachable to queen
        if (key) {
            if (
                !closestObstacles[key] ||
                obstacleAIsCloserToQueenThanObstacleB(obstaclesCoordinates[i], closestObstacles[key], queenCoordinates)
            ) {
                closestObstacles[key] = obstaclesCoordinates[i];
            }
        }
    }


};

