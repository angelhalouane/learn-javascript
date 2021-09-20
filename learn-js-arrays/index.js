const ppl = [
  {
    name: 'dani',
    age: 26,
    height: 178,
  }, {
    name: 'sisco',
    age: 23,
    height: 183,
  }, {
    name: 'jose maria',
    age: 57,
    height: 162,
  }, {
    name: 'enana',
    age: 4,
    height: 23,
  },
];

function pplLessThan25(array) {
  const filterPpl = array.filter((value) => value.age > 25 ? true : false);
  return filterPpl
}

//console.log(pplLessThan25(ppl));

function findDani(array) {
  const theyHaveA = array.findIndex((value) => value.name === "dani");
  return theyHaveA
}

//console.log(findDani(ppl));

function sumThem(array) {
  let sum = 0
  array.forEach((value) => sum += value.age);
  return sum
}

//console.log(sumThem(ppl))

function removeIndex(array, index) {
  array.splice(index, 1)
  //console.log(array)
}

//1. people less than 25
//2. find dani's index
//3. sum the age of all these ppl
//4. remove given index from the array
//5. add last index victor's name