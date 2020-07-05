const defaultSideEffecter =

const defaultMerger = (left, right, sideEffecter) => {
  let leftIndex = 0;
  let rightIndex = 0;
  const merged = [];
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
    }
  }
  return merged;
};

const mergeSort = (unsorted, merger) => {
  if (unsorted.length <= 1) {
    return unsorted;
  }
  const halfway = unsorted.length / 2;
  const left = mergeSort(unsorted.slice(0, halfway));
  const right = mergeSort(unsorted.slice(halfway));
  return merger(left, right);
};
