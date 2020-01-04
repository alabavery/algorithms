const swapArrVals = (arr, idx1, idx2) => {
    const temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
};

// note that I skipped the chapter where you learn how to choose a pivot and
// am just selecting the first item as the pivot
const partition = (arr, firstIdx, lastIdx) => {
    const pivotIdx = firstIdx;
    swapArrVals(arr, firstIdx, pivotIdx);
    const pivotVal = arr[firstIdx];
    let lastIdxLessThanPivot = firstIdx;

    for (let i = firstIdx + 1; i <= lastIdx; i += 1) {
        if (arr[i] < pivotVal) {
            lastIdxLessThanPivot += 1;
            swapArrVals(arr, i, lastIdxLessThanPivot);
        }
    }
    swapArrVals(arr, firstIdx, lastIdxLessThanPivot);
    // this is where the pivot ended up and where recursive calls will divide
    return lastIdxLessThanPivot;
};

module.exports = partition;