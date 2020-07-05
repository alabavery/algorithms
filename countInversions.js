// [1, 3, 5, 2, 4, 6]
const countInversions = unsortedArray => {
  const merge = (left, right) => {
    let leftIndex = 0;
    let rightIndex = 0;
    let inversions = 0;
    const merged = [];
    const calculateInversions = () => left.length - leftIndex;
    const pushToMerged = (side, index) => {
      merged.push(side[index]);
      return index + 1;
    };

    while (leftIndex < left.length || rightIndex < right.length) {
      if (typeof right[rightIndex] !== 'number') {
        leftIndex = pushToMerged(left, leftIndex);
        continue;
      }
      if (typeof left[leftIndex] !== 'number') {
        rightIndex = pushToMerged(right, rightIndex);
        continue;
      }
      if (left[leftIndex] <= right[rightIndex]) {
        merged.push(left[leftIndex]);
        leftIndex += 1;
      } else {
        merged.push(right[rightIndex]);
        rightIndex += 1;
        inversions += calculateInversions();
      }
    }
    return [merged, inversions];
  };

  let inversions = 0;
  const mergeSort = unsorted => {
    if (unsorted.length <= 1) {
      return unsorted;
    }
    const halfway = unsorted.length / 2;
    const left = mergeSort(unsorted.slice(0, halfway));
    const right = mergeSort(unsorted.slice(halfway));
    const [merged, inversionsFromThisMerge] = merge(left, right);
    inversions += inversionsFromThisMerge;
    return merged;
  };
  mergeSort(unsortedArray);
  // console.log(merge([1, 3, 5], [2, 4, 6]));
  return inversions;
};

console.log(countInversions([1, 3, 5, 2, 4, 6, 1]));