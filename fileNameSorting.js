const aNumIsLessThanBNum = (a, b, aNumStart, aNumEnd, bNumStart, bNumEnd) => {
    const aNum = parseFloat(a.slice(aNumStart, aNumEnd));
    const bNum = parseFloat(b.slice(bNumStart, bNumEnd));
    if (aNum < bNum) {
        return 1;
    }
    if (aNum > bNum) {
        return -1;
    }
    return 0;
};

const characterIsNumeric = c => !isNaN(parseFloat(c));

const getNumberEnd = (s, sNumberStart) => {
    let end = sNumberStart;
    while (characterIsNumeric(s.charAt(end))) {
        end += 1;
    }
    return end;
};

/**
 * abc comes before bac
 * 1abc comes before abc
 * abc2a comes before abc11
 * 2abc comes before 11abc
 * 0011abc comes before 12abc
 * @param a
 * @param b
 */
const aComesBeforeB = (a, b) => {
    // for given i1 and i2 of a and b, do following wrt character at i
    let i1 = 0;
    let i2 = 0;
    while (i1 < a.length && i2 < b.length) {
        const aChar = a.charAt(i1);
        const bChar = b.charAt(i2);
        const aIsNumeric = characterIsNumeric(aChar);
        const bIsNumeric = characterIsNumeric(bChar);
        // if both are alpha and not the same, return comparison of these two characters
        if (!aIsNumeric && !bIsNumeric && aChar !== bChar) {
            return aChar < bChar;
        }
        // if both are alpha and the same, continue
        if (!aIsNumeric && !bIsNumeric && aChar === bChar) {
            i1++;
            i2++;
            continue;
        }
        // if both are numeric, look ahead to ends of numbers to get their lengths
        // compare the numbers at those lengths and reset indices to those lengths
        const aNumberEnd = getNumberEnd(a, i1);
        const bNumberEnd = getNumberEnd(b, i2);
        const comparison = aNumIsLessThanBNum(a, b, i1, aNumberEnd, i2, bNumberEnd);
        if (comparison > 0) {
            return true;
        }
        if (comparison < 0) {
            return false;
        }
        // if comparison is 0, continue
        i1 = aNumberEnd + 1;
        i2 = bNumberEnd + 1;
    }
    // if you reached the end, one or both i's are at end of strings
    // if both are at ends of strings, strings are equal
    // if only one is at end of its string, this one comes before the other
    return i1 === a.length;
};

const fileNameSort = arr => arr.sort((a, b) => aComesBeforeB(a, b) ? 1 : -1);

console.log(aComesBeforeB('021aa1', '021aa'));