function range(start, end, step = 1) {
    let result = [];
    if (step > 0) {
      for (let i = start; i <= end; i += step) {
        result.push(i);
      }
    } else if (step < 0) {
      for (let i = start; i >= end; i += step) {
        result.push(i);
      }
    }
    return result;
  }
  
  function sum(numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  // Example usage:
  console.log(range(1, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(sum(range(1, 10))); // 55
  console.log(range(1, 10, 2)); // [1, 3, 5, 7, 9]
  console.log(range(5, 2, -1)); // [5, 4, 3, 2]
  