/**
 * SEE EXAMPLE BELOW DEFINITION
 * @param root - must be of type GraphNode (./GraphNode.js)
 * @param callback - this will be passed nodes as they are explored. do whatever you want with this.  Return true
 * if you want exploration to stop at this node.
 */
const breadthFirstExplore = (root, callback) => {
  const queue = [root];
  const explored = { [root.id]: true };

  while (queue.length) {
    const current = queue.shift();
    if (callback(current) === true) {
      return;
    }

    Object.keys(current.connections).forEach(nodeId => {
      if (!explored[nodeId]) {
        queue.push(current.connections[nodeId]);
        explored[nodeId] = true;
      }
    });
  }
};

// const { getExampleGraphRoot } = require('./GraphNode');
// const root = getExampleGraphRoot();
// breadthFirstExplore(root, n => console.log(n.id));

module.exports = { breadthFirstExplore };