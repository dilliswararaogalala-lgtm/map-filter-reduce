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

const countOfRibbons = ["red", "blue", "red", "green", "red", "blue"].reduce(festivalRibbonCount, 0);

const starGlazingLog = [["Orion", "Leo"], ["Taurus"], ["Orion", "Gemini"]].flat();

const birdWatching = ["sparrow", "crow", "sparrow", "eagle", "crow"].reduce(isItRepeat, []);

const AttendanceList = [["Asha", "Ravi", "Neel"], ["Ravi"], ["Asha", "Meera"]]
  .flat()
  .reduce(isItRepeat, []);

const noOfCandies = [[5, 3], [2], [4, 1]]
  .flat()
  .reduce(add, 0);

const isDoInGrp = [["mi", "fa", "so"], ["do", "mi"], ["fa"]]
  .flat()
  .some(isDoInGroup)

const isTempBelow32 = [[22, 23],[25, 24, 22],[29]]
  .flat()
  .some(isItBelow32)