var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  // return [element, ...array];
  let preservedArr = [...array];
  return preservedArr.unshift(element);
}

function destructivelyAddElementToBeginningOfArray(arr, element) {
  return arr.unshift(element);
}

function addElementToEndOfArray(array, element) {
  let preservedArr = [...array]; 
  return preservedArr.push(element);
}

function destructivelyAddElementToEndOfArray(array, element) {
  return array.push(element);
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift();
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop();
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length-1);
}