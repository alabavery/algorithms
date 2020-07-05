const { getNanoSecondsElapsedDuringFunction } = require('./benchmarking/timeit');
const { BinarySearchTree } = require('./utils/trees/BinarySearchTree');

// what if you had to do the shortest unique problem, but had to keep it maintained over time?
// would want to use a tree of some kind (trees are like maintainable sorted lists)
const tree = new BinarySearchTree([1, 4, 5, 0, 10, 1, 2], (val1, val2) => val1 - val2);
tree.insert(3);
console.log(JSON.stringify(tree));
