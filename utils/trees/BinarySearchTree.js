function BinaryTreeNode(data) {
  this.data = data;
  this.leftChild = null;
  this.rightChild = null;
}

const makeTree = ascendingSortedData => {
  if (ascendingSortedData.length === 0) {
    return null;
  }
  if (ascendingSortedData.length === 1) {
    return new BinaryTreeNode(ascendingSortedData[0]);
  }
  const halfway = Math.floor(ascendingSortedData.length / 2);
  const midValue = ascendingSortedData[halfway];
  // if values in this array are not unique, we need to find the earliest occurrence of the mid value.  This ensures
  // that everything before the found value is less than that value, which will lead us to a left sub tree that
  // contains only values less than the parent
  let indexOfRoot = halfway;
  for (let i = halfway - 1; i >= 0; i -= 1) {
    if (ascendingSortedData[i] === midValue) {
      indexOfRoot--;
    } else {
      break;
    }
  }
  const root = new BinaryTreeNode(ascendingSortedData[indexOfRoot]);
  root.leftChild = makeTree(ascendingSortedData.slice(0, indexOfRoot));
  root.rightChild = makeTree(ascendingSortedData.slice(indexOfRoot + 1));
  return root;
};

// comparer: (data1, data2) => neg number if data1 less than data2, 0 if equal, pos num if greater
function BinarySearchTree(datas, comparer) {
  const sorted = [...datas].sort(comparer);
  this.rootNode = makeTree(sorted);

  this.insert = function (newData) {
    const newNode = new BinaryTreeNode(newData);
    const recurse = node => {
      const comparison = comparer(newData, node.data);
      if (comparison === 0) {
        newNode.rightChild = node.rightChild;
        node.rightChild = newNode;
      } else if (comparison < 0) {
        if (node.leftChild === null) {
          node.leftChild = newNode;
        } else {
          return recurse(node.leftChild);
        }
      } else {
        if (node.rightChild === null) {
          node.rightChild = newNode;
        } else {
          return recurse(node.rightChild);
        }
      }
    };
    recurse(this.rootNode);
  };
}

module.exports = { BinarySearchTree };