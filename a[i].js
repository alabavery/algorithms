// You are given a sorted (from smallest to largest) array A of n distinct integers which can be positive,
// negative, or zero. You want to decide whether or not there is an index i such that A[i] = i. Design the
// fastest algorithm that you can for solving this problem.

const binarySearch = require('./utils/binarySearch');

const getDirection = (arr, currentIndex) => {
    if (arr[currentIndex] === currentIndex) {
        return 0;
    }
    return arr[currentIndex] > currentIndex ? -1 : 1;
};

console.log(binarySearch([-2, 0, 1, 3], getDirection));