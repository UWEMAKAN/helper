const _ = require('underscore');

const numberOfSprite = (width, height) => {
  return width === height ? width : Math.floor((height + width)/2);
};

const testNumberOfSprite = () => {
  console.log("output: ", numberOfSprite(3, 4), ", expect: 3");
  console.log("output: ", numberOfSprite(5, 6), ", expect: 5");
  console.log("output: ", numberOfSprite(5, 5), ", expect: 5");
  console.log("output: ", numberOfSprite(12, 4), ", expect: 8");
};

const initOrigin = (width, height) => {
  return { x: Math.floor(width / 2), y: Math.floor(height / 2) };
};

const createCoordinate = (width, height) => {
  const coordinate = {};
  coordinate.x = Math.floor(Math.random() * width);
  coordinate.y = Math.floor(Math.random() * height);
  return coordinate;
};

const generateCoordinates = (width, height) => {
  const num = numberOfSprite(width, height);
  const origin = initOrigin(width, height);
  let coordinates = [];
  coordinates.push(origin);
  while (true) {
    const coordinate = createCoordinate(width, height);
    coordinates.push(coordinate);
    coordinates = _.uniq(coordinates);
    if (coordinates.length === num + 1) break;
  }
  return coordinates;
};

const testGenerateCoordinates = () => {
  console.log(generateCoordinates(4, 4));
};

const factorial = (n) => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};

const getIndexesAfterIndexZero = (arr) => {
  const indices = [];
  if (arr.length === 0) return indices;
  for (let i = 1; i < arr.length; i++) {
    indices.push(arr[i]);
  }
  return indices;
};

const testGetIndexesAfterIndexZero = () => {
  console.log(getIndexesAfterIndexZero([]));
  console.log(getIndexesAfterIndexZero([1,2,3]))
};

const permutation = (arr) => {
  let ret = [];
  if (arr.length === 0) return ret;
  for (let i = 0; i < arr.length; i++) {
    let rest = permutation(arr.slice(0, i).concat(arr.slice(i + 1)));

    if(!rest.length) {
      ret.push([arr[i]])
    } else {
      for(let j = 0; j < rest.length; j = j + 1) {
        ret.push([arr[i]].concat(rest[j]))
      }
    }
  }
  return ret;
};

const testPermutation = () => {
  console.log(permutation([1,2,3]));
};

const createIndexesOfPaths = (arr) => {
  const indexes = [];
  arr.forEach((element) => {
    const a = [0];
    indexes.push(a.concat(element));
  });
  return indexes;
};

const testCreateIndexesOfPaths = () => {
  console.log(createIndexesOfPaths(permutation([1,2,3])));
};

const distanceBetweenTwoCells = (cell1, cell2) => {
  return Math.abs(cell1.x - cell2.x) + Math.abs(cell1.y - cell2.y);
};

const testDistanceBetweenTwoCells = () => {
  const cell1 = { x: 2, y: 3 };
  const cell2 = { x: 3, y: 6 };
  console.log("output: ", distanceBetweenTwoCells(cell1, cell2), ", expected: 4");
}

const lengthOfPath = (pathIndexes, coordinates) => {
  let pathLength = 0;
  for (let i = 0, j = 1; i < pathIndexes.length - 1; i++, j++) {
    const cell1 = coordinates[pathIndexes[i]];
    const cell2 = coordinates[pathIndexes[j]];
    pathLength += distanceBetweenTwoCells(cell1, cell2);
  }
  return pathLength;
}

const testLengthOfPath = () => {
  const pathIndexes = [0, 2, 3, 4, 1];
  const coordinates = [
    { x: 2, y: 2 },
    { x: 2, y: 3 },
    { x: 0, y: 4 },
    { x: 4, y: 3 },
    { x: 2, y: 0 }
  ];
  console.log("output: ", lengthOfPath(pathIndexes, coordinates), ", expected: 17");
};

const computeShortestPath = (allPathIndexes, coordinates) => {
  let minLength = Number.MAX_SAFE_INTEGER;
  let paths = [];
  allPathIndexes.forEach((pathIndexes) => {
    const l = lengthOfPath(pathIndexes, coordinates);
    if (l <= minLength) {
      paths.push(pathIndexes);
      if (l < minLength) {
        minLength = l;
        paths.splice(0, paths.length);
        paths.push(pathIndexes);
      }
    }
  });
  return { minLength, paths };
};

const testComputeShortestPath = () => {
  const coordinates = [
    { x: 2, y: 2 },
    { x: 2, y: 3 },
    { x: 0, y: 4 },
    { x: 4, y: 3 },
    { x: 2, y: 0 }
  ];
  const allPathIndexes = [
    [ 0, 1, 2, 3, 4 ], [ 0, 1, 2, 4, 3 ], [ 0, 1, 3, 2, 4 ], [ 0, 1, 3, 4, 2 ],
    [ 0, 1, 4, 2, 3 ], [ 0, 1, 4, 3, 2 ], [ 0, 2, 1, 3, 4 ], [ 0, 2, 1, 4, 3 ],
    [ 0, 2, 3, 1, 4 ], [ 0, 2, 3, 4, 1 ], [ 0, 2, 4, 1, 3 ], [ 0, 2, 4, 3, 1 ],
    [ 0, 3, 1, 2, 4 ], [ 0, 3, 1, 4, 2 ], [ 0, 3, 2, 1, 4 ], [ 0, 3, 2, 4, 1 ],
    [ 0, 3, 4, 1, 2 ], [ 0, 3, 4, 2, 1 ], [ 0, 4, 1, 2, 3 ], [ 0, 4, 1, 3, 2 ],
    [ 0, 4, 2, 1, 3 ], [ 0, 4, 2, 3, 1 ], [ 0, 4, 3, 1, 2 ], [ 0, 4, 3, 2, 1 ]
  ];
  console.log(computeShortestPath(allPathIndexes, coordinates));
};

const testFactorial = () => {
  console.log("output: ", factorial(2), ", expected: 2");
  console.log("output: ", factorial(3), ", expected: 6");
  console.log("output: ", factorial(4), ", expected: 24");
  console.log("output: ", factorial(5), ", expected: 120");
  console.log("output: ", factorial(6), ", expected: 720");
};


const func = (width, height) => {
  
}


testNumberOfSprite();