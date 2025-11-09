const festivalRibbonCount = (count, ribbonColor) => ribbonColor === 'blue' ? count + 1 : count;

const countOfRibbons = ["red", "blue", "red", "green", "red", "blue"].reduce(festivalRibbonCount, 0);

const starGlazingLog = [["Orion", "Leo"],["Taurus"],["Orion", "Gemini"]].flat();

