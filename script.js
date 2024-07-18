function divide(array, n) {
    let result = [];
    let currentSubarray = [];
    let currentSum = 0;

    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        if (currentSum + num <= n) {
            currentSubarray.push(num);
            currentSum += num;
        } else {
            result.push(currentSubarray);
            currentSubarray = [num];
            currentSum = num;
        }
    }

    // Push the last subarray
    if (currentSubarray.length > 0) {
        result.push(currentSubarray);
    }

    return result;
}

// Example usage:
console.log(divide([1, 2, 3, 4, 1, 0, 2, 2], 5)); // Output: [[1, 2], [3], [4, 1, 0], [2, 2]]
console.log(divide([4, 3, 2, 1], 4));           // Output: [[4], [3], [2], [1]]
