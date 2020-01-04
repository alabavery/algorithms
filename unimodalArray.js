// You are a given a unimodal array of n distinct elements, meaning that its entries are in increasing
// order up until its maximum element, after which its elements are in decreasing order. Give an algorithm
// to compute the maximum element that runs in O(log n) time.

const getDirection = (arr, currentIndex) => {
    const [left, middle, right] = [arr[currentIndex - 1], arr[currentIndex], arr[currentIndex + 1]];
    if (middle > left && middle > right) {
        return 0;
    }
    return middle > left ? 1 : -1;
};

const binarySearch = require("./utils/binarySearch");

console.log(binarySearch([-10, 0, 1, 2, 3, 4, 5], getDirection));