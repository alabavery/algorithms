const partition = require('./utils/partition');

const quickSort = (arr, firstIdx, lastIdx) => {
    if (firstIdx >= lastIdx) {
        return;
    }
    const pivotEndIdx = partition(arr, firstIdx, lastIdx);
    quickSort(arr, pivotEndIdx + 1, lastIdx);
    quickSort(arr, firstIdx, pivotEndIdx - 1);
};


const a = [10, 0, 2, 11, 12, 9, 8];
quickSort(a, 0, a.length - 1);
console.log(a);