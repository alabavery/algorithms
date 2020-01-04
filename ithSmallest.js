const partition = require('./utils/partition');

const ithSmallest = (arr, i, firstIdx, lastIdx) => {
    firstIdx = firstIdx === undefined ? 0 : firstIdx;
    lastIdx = lastIdx === undefined ? arr.length - 1 : lastIdx;
    const pivotAbsoluteEndIdx = partition(arr, firstIdx, lastIdx);
    const pivotRelativeEndIdx = pivotAbsoluteEndIdx - firstIdx;

    if (pivotRelativeEndIdx === i) {
        return arr[pivotAbsoluteEndIdx];
    }
    const newFirst = pivotRelativeEndIdx > i ? firstIdx : pivotAbsoluteEndIdx + 1;
    const newLast = pivotRelativeEndIdx > i ? pivotAbsoluteEndIdx - 1 : lastIdx;
    const newI = pivotRelativeEndIdx > i ? i : i - newFirst;
    return ithSmallest(arr, newI, newFirst, newLast);
};


console.log(ithSmallest([3, 1, 2, 10, 12], 3));