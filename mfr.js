const festivalRibbonCount = (count, ribbonColor) => ribbonColor === 'blue' ? count + 1 : count;

const isItRepeat = (lists, element) => {
  if (!lists.includes(element)) {
    lists.push(element);
  }
  return lists;
}

const add = (x, y) => x + y;

const isDoInGroup = (musicNotes) => musicNotes === 'do';

const isItBelow32 = temperature => temperature < 32

const countOfRibbons = data => data.reduce(festivalRibbonCount, 0);

const starGlazingLog = data => data.flatMap(x => x);

const duplicateBirdRemoval = data => data.reduce(isItRepeat, []);
  
const isDoInGrp = data => {
  return data
  .flatMap(x => x)
  .some(isDoInGroup)
}

const isTempBelow32 = data => {
  return data
  .flatMap(x => x)
  .some(isItBelow32)
}

const addTheListElements = data => {
  return data
  .flatMap(x => x)
  .reduce(add, 0)
}

const uniqueness = data => {
  return data
  .flatMap(x => x)
  .reduce(isItRepeat, []);
}

function createMessage(descrip, symbol, expected, exactOutput) {
  let dataPoints = `\n=> expected:\n${expected}\n`;
  dataPoints += `=> exact output:\n${exactOutput} \n`;
  const withOutDataPoints = `${symbol}| ${descrip}`;
  const withDataPoints = `${symbol}| ${descrip}${dataPoints}`;
  const message = symbol === "✅" ? withOutDataPoints : withDataPoints;
  return message;
}

function isElementsEqual(array1, array2) {
  if (array1.length !== array2.length) return false;

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) return false;
  }
  return true;
}

function areEqual(expected, exactOutput) {
  if (Array.isArray(expected) && Array.isArray(exactOutput)) {
    return isElementsEqual(expected, exactOutput);
  }

  if (!Array.isArray(expected)) {
    return expected === exactOutput;
  }

  return false;
}

const getSymbol = (expected, exactOutput) => areEqual(expected, exactOutput) ? "✅" : "❌";

function getOutput(discrip, operation, data, expected) {
  const exactOutput = operation(data, operation);
  const symbol = getSymbol(expected, exactOutput);
  const message = createMessage(discrip, symbol, expected, exactOutput);
  console.log(message);
}

function repeatChar(char, noOfTimes) {
  return char.repeat(noOfTimes);
}

function underline(string) {
  return `\n${string}\n${repeatChar("-", string.length)}\n`
}

function testCountOfRibbons() {
  console.log(underline("RIBBONS COUNT"))
  getOutput('different colors of ribbons', countOfRibbons, ["red", "blue", "red", "green", "red", "blue"], 2);
}

function testStarGLazingLog() {
  console.log(underline('STAR GLAZING LOG'))
  getOutput('stars recorded', starGlazingLog, [["Orion", "Leo"], ["Taurus"], ["Orion", "Gemini"]], ["Orion", "Leo", "Taurus", "Orion", "Gemini"])
}

function testDuplicateBirdRemoval() {
  console.log(underline("REMOVAL OF DUPLICATE BIRDS"));
  getOutput('collective birds data', duplicateBirdRemoval, ["sparrow", "crow", "sparrow", "eagle", "crow"], ["sparrow", "crow", "eagle"])
}

function testAttendanceList() {
  console.log(underline('ATTENDANCE LIST'));
  getOutput('attendamce list', uniqueness, [["Asha", "Ravi", "Neel"], ["Ravi"], ["Asha", "Meera"]], ["Asha", "Ravi", "Neel", "Meera"])
}

function testNoOfCandies(){
  console.log(underline('COUNT OF CANDIES'));
  getOutput('candies number list', addTheListElements, [[5, 3], [2], [4, 1]], 15)
}

function testMusicalReharsalNotes() {
  console.log(underline('MUSICAL REHARSAL NOTES'));
  getOutput('reharsal notes', isDoInGrp, [["mi", "fa", "so"], ["do", "mi"], ["fa"]], true)
}

function testWeatherSesnorValidation() {
  console.log(underline("WEATHER SEnSOR VLIDATION"));
  getOutput('weather reports', isTempBelow32, [[22, 23], [25, 24, 22], [29]], true)
}

function testFitnessTracking(){
  console.log(underline('FITNESS TRACKING'));
  getOutput('miles runned', addTheListElements, [[2, 3, 2],[4],[1, 1]], 13)
}

function testWorkshopColorVariety(){
  console.log(underline('ART WORKSHOP COLOR VARIETY'));
  getOutput('different colurs', uniqueness, [["blue", "yellow"],["yellow", "green"],["blue"]],["blue", "yellow", "green"] )
}

testCountOfRibbons();
testStarGLazingLog();
testDuplicateBirdRemoval();
testAttendanceList();
testMusicalReharsalNotes();
testWeatherSesnorValidation();
testFitnessTracking();
testWorkshopColorVariety();