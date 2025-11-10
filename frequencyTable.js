const occurences = (frequencies, currentNumber) => {
  const occured = frequencies.find(x => x[0] === currentNumber);
  if(occured){
    occured[1] += 1;
  } else {
    frequencies.push([currentNumber, 1]);
  }
  return frequencies;
}

console.log([23, 22, 23].reduce(occurences, []));
