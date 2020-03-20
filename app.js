const _ = require('underscore');

const numberOfCandies = (width, height) => {
  return width === height ? width : width < height ? width : height;
}

const testNumberOfCandies = () => {
  console.log("output: ", numberOfCandies(3, 4), ", expect: 3");
  console.log("output: ", numberOfCandies(5, 6), ", expect: 5");
  console.log("output: ", numberOfCandies(5, 5), ", expect: 5");
  console.log("output: ", numberOfCandies(12, 4), ", expect: 4");
}

const initOrigin = (width, height) => {
  return { x: Math.floor(width / 2), y: Math.floor(height / 2) };
}

const createCoordinate = (width, height) => {
  const coordinate = {};
  coordinate.x = Math.floor(Math.random() * width);
  coordinate.y = Math.floor(Math.random() * height);
  return coordinate;
}

const generateCoordinates = (width, height) => {
  const num = numberOfCandies(width, height);
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
}

const testGenerateCoordinates = () => {
  console.log(generateCoordinates(4, 4));
}

const factorial = (n) => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

const testFactorial = () => {
  console.log("output: ", factorial(2), ", expected: 2");
  console.log("output: ", factorial(3), ", expected: 6");
  console.log("output: ", factorial(4), ", expected: 24");
  console.log("output: ", factorial(5), ", expected: 120");
  console.log("output: ", factorial(6), ", expected: 720");
}


const func = (width, height) => {

}

testGenerateCoordinates()
