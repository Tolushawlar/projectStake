// Define a function to create a list structure from an array
function arrayToList(arr) {
    let list = null;
    for (let i = arr.length - 1; i >= 0; i--) {
      list = { value: arr[i], rest: list };
    }
    return list;
  }
  
  // Define a function to convert a list to an array
  function listToArray(list) {
    let arr = [];
    let currentNode = list;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.rest;
    }
    return arr;
  } 
  
  // Define a function to prepend an element to a list
  function prepend(element, list) {
    return { value: element, rest: list };
  }
  
  // Define a function to retrieve the element at a given position in a list
  function nth(list, position) {
    if (!list) return undefined; // Return undefined for an empty list
    if (position === 0) return list.value; // Return the first element
    return nth(list.rest, position - 1); // Recursively move to the next element
  }
  
  // Example usage:
  const array = [1, 2, 3];
  const list = arrayToList(array);
  console.log(list); // { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }
  
  const newArray = listToArray(list);
  console.log(newArray); // [1, 2, 3]
  
  const newList = prepend(0, list);
  console.log(newList); // { value: 0, rest: { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } } }
  
  console.log(nth(list, 1)); // 2 (element at position 1, zero-based index)
  console.log(nth(list, 5)); // undefined (position out of range)
  