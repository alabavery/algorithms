/**
 * @param arr - The entire subject array.
 * @param getDirection - a method that should return -1 if we must go further left, 1 if we must go further right,
 * and 0 if we have found our target.  The method should take two parameters -- the array and the current index in it.
 * @returns {null|*}
 */
const search = (arr, getDirection) => {
    let lowerBoundIndex = 0;
    let upperBoundIndex = arr.length - 1;

    while (lowerBoundIndex <= upperBoundIndex) {
        const halfway = Math.ceil((lowerBoundIndex + upperBoundIndex) / 2);
        const direction = getDirection(arr, halfway);

        switch (direction) {
            case 0:
                return arr[halfway];
            case 1:
                lowerBoundIndex = halfway + 1;
                break;
            case -1:
                upperBoundIndex = halfway - 1;
                break;
            default:
                return null;
        }
    }
};

module.exports = search;