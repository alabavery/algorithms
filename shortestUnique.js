const updateUnique = (leftItem, rightItem) => {
    const newLeft = {word: leftItem.word, unique: leftItem.unique};
    const newRight = {word: rightItem.word, unique: rightItem.unique};

    let leftCharCt = leftItem.unique.length;
    let rightCharCt = rightItem.unique.length;

    while (leftItem.word.includes(newRight.unique) && rightCharCt <= rightItem.word.length) {
        newRight.unique = rightItem.word.slice(0, rightCharCt);
        rightCharCt += 1;
    }
    while (rightItem.word.includes(newLeft.unique) && leftCharCt <= leftItem.word.length) {
        newLeft.unique = leftItem.word.slice(0, leftCharCt);
        leftCharCt += 1;
    }
    return [newLeft, newRight];
};


const merge = (left, right) => {
    let leftCt = 0;
    let rightCt = 0;
    const merged = [];

    while (leftCt < left.length && rightCt < right.length) {
        const leftItem = left[leftCt];
        const rightItem = right[rightCt];
        const [newLeft, newRight] = updateUnique(leftItem, rightItem);

        if (leftItem.word < rightItem.word) {
            right[rightCt] = newRight;
            merged.push(newLeft);
            leftCt += 1;
        } else {
            left[leftCt] = newLeft;
            merged.push(newRight);
            rightCt += 1;
        }
    }
    if (leftCt < left.length) {
        return merged.concat(left.slice(leftCt));
    }
    if (rightCt < right.length) {
        return merged.concat(right.slice(rightCt));
    }

    return merged;
};

const uniqueStrings = arr => {
    if (arr.length <= 1) {
        return arr.map(word => ({ word, unique: '' }));
    }
    const halfway = Math.floor(arr.length / 2);
    const left = uniqueStrings(arr.slice(0, halfway));
    const right = uniqueStrings(arr.slice(halfway));
    return merge(left, right);
};
