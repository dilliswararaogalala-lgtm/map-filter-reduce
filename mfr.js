const flat = (data) => data.flatMap((x) => x);

const isItRepeat = (lists, element) => {
  if (!lists.includes(element)) {
    lists.push(element);
  }
  return lists;
};

const occurences = (records, target) => {
  const count = records.reduce((counter, element) => {
    return element === target ? counter + 1 : counter;
  }, 0);
  return count;
};

const uniqueness = (data) => {
  return flat(data).reduce(isItRepeat, []);
};

const add = (x, y) => x + y;

const sumOfList = (data) => {
  return flat(data).reduce(add, 0);
};

const isPresent = (data, target) => {
  return flat(data).some((element) => element === target);
};

const isEvery = (data, target) => {
  return flat(data).every((temp) => temp < target);
};

const dataForOccurences = [[
  "count of occurences: ",
  ["red", "blue", "red", "green", "red", "blue"],
  "blue",
], [
  "library book collection: ",
  ["Dune", "Dune", "Foundation", "Dune"],
  "Dune",
]];

const dataForUniqueness = [
  ["remove duplicate birds: ", ["sparrow", "crow", "sparrow", "eagle", "crow"]],
  ["attendance list: ", ["Asha", "Ravi", "Neel"], ["Ravi"], ["Asha", "Meera"]],
  ["art workshop color variety: ", [["blue", "yellow"], ["yellow", "green"], [
    "blue",
  ]]],
  ["lunchbox ingrident inventory: ", [["rice", "lentils"], ["rice"], [
    "curd",
    "lentils",
  ]]],
  ["Post Office Parcel Record: ", ["small", "large", "medium", "small"]],
];

const dataForFlat = [["starGalzingLog: ", [["Orion", "Leo"], ["Taurus"], [
  "Orion",
  "Gemini",
]]]];

const dataForTotalSum = [
  ["candies number list: ", [[5, 3], [2], [4, 1]]],
  ["Vegetable Crate Totals: ", [[4, 6], [2, 3, 1], [5]]],
  ['fitnessTracking: ', [[2, 3, 2], [4], [1, 1]]]
];

const dataForIsPresent = [
  ['is Do in music reharsal notes: ', [["mi", "fa", "so"], ["do", "mi"], ["fa"]], "do"],
  ['Choir harmony review: ', [["la", "la"], ["mi"], ["so", "la"]], 'so']
]

const dataForIsEvery = [
  ['is temperatures below 32: ', [[22, 23], [25, 33, 22], [25]], 32]
]

dataForOccurences.forEach((element) => {
  console.log(`${element[0]}: ${occurences(element[1], element[2])}\n`);
});

dataForUniqueness.forEach((element) => {
  console.log(`${element[0]}${uniqueness(element[1])}\n`);
});

dataForFlat.forEach((element) => {
  console.log(`${element[0]}${flat(element[1])}\n`);
});

dataForIsPresent.forEach((element) => {
  console.log(`${element[0]}${isPresent(element[1], element[2])}\n`)
})

dataForTotalSum.forEach((element) => {
  console.log(`${element[0]}${sumOfList(element[1])}\n`);
})

dataForIsEvery.forEach((element) => {
  console.log(`${element[0]}${isEvery(element[1], element[2])}\n`)
})