const festivalRibbonCount = (count, ribbonColor) => ribbonColor === 'blue' ? count + 1 : count;

function createMessage(descrip, symbol, expected, exactOutput) {
  let dataPoints = `\n=> expected:\n${expected}\n`;
  dataPoints += `=> exact output:\n${exactOutput} \n`;
  const withOutDataPoints = `${symbol}| ${descrip}`;
  const withDataPoints = `${symbol}| ${descrip}${dataPoints}`;
  const message = symbol === "✅" ? withOutDataPoints : withDataPoints;
  return message;
}

const getSymbol = (expected, exactOutput) => expected === exactOutput ? "✅" : "❌";

function testTyering(discrip, operation, data, expected) {
  const exactOutput = data.reduce(festivalRibbonCount, 0)
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

console.log(underline("FESTIVAL RIBBON COUNT"));
testTyering('ribbons have cut', festivalRibbonCount, ["red", "blue", "red", "green", "red", "blue"], 2);
testTyering('ribbons have cut', festivalRibbonCount, ["red", "red", "green", "red"], 0);