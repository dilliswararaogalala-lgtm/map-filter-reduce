const flat = (data) => data.flatMap((x) => x);

const isItRepeat = (lists, element) => {
  if (!lists.includes(element)) {
    lists.push(element);
  }
  return lists;
};

const occurences = (data, target) => {
  return data.reduce((counter, element) => {
    return element === target ? ++counter : counter;
  }, 0);
};

const uniqueness = (data) => {
  return flat(data).reduce(isItRepeat, []);
};

const add = (x, y) => x + y;

const addTheList = (data) => {
  return flat(data).reduce(add, 0);
};

const isPresent = (data, target) => {
  return flat(data).some((element) => element === target);
};

const isEvery = (data, target) => {
  return flat(data).every((temp) => temp < target);
};

console.log(
  `1 => count of occurences: ${
    occurences(["red", "blue", "red", "green", "red", "blue"], "blue")
  }`,
);
console.log(
  `2 => starGalzingLog: ${
    flat([["Orion", "Leo"], ["Taurus"], ["Orion", "Gemini"]])
  }`,
);
console.log(
  `3 => remove duplicate birds: ${
    uniqueness(["sparrow", "crow", "sparrow", "eagle", "crow"])
  }`,
);
console.log(
  `4 =>  attendance list: ${
    uniqueness([["Asha", "Ravi", "Neel"], ["Ravi"], ["Asha", "Meera"]])
  }`,
);
console.log(`5 => candies number list: ${addTheList([[5, 3], [2], [4, 1]])}`);
console.log(
  `6 => is Do in music reharsal notes: ${
    isPresent([["mi", "fa", "so"], ["do", "mi"], ["fa"]], "do")
  }`,
);
console.log(
  `7 => is temperatures below 32: ${
    isEvery([[22, 23], [25, 33, 22], [25]], 32)
  }`,
);
console.log(`8 => fitnessTracking: ${addTheList([[2, 3, 2], [4], [1, 1]])}`);
console.log(
  `9 => art workshop color variety: ${
    uniqueness([["blue", "yellow"], ["yellow", "green"], ["blue"]])
  }`,
);
console.log(
  `10 => library book collection: ${
    occurences(["Dune", "Dune", "Foundation", "Dune"], "Dune")
  }`,
);
console.log(
  `11 => lunchbox ingrident inventory: ${
    uniqueness([["rice", "lentils"], ["rice"], ["curd", "lentils"]])
  }`,
);
