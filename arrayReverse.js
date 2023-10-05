function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

function reverseArrayInPlace(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    const temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);
console.log(reversedArray); // [5, 4, 3, 2, 1]
console.log(originalArray); // [1, 2, 3, 4, 5] (original array is not modified)

// Example usage:
const arrayToReverse = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayToReverse);
console.log(arrayToReverse); // [5, 4, 3, 2, 1] (original array is reversed)
