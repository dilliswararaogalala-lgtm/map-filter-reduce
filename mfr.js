const favouriteRibbonCount = (count, ribbonColor) => ribbonColor === 'blue' ? count + 1 : count;

console.log(["red", "blue", "red", "green", "red", "blue"].reduce(favouriteRibbonCount, 0));