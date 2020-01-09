/**
 * SEE EXAMPLE BELOW DEFINITION
 * @param root - must be of type GraphNode (./GraphNode.js)
 * @param callback - this will be passed nodes as they are explored. do whatever you want with this.  Return true
 * if you want exploration to stop at this node.
 */
const breadthFirstExplore = (root, { onExploreNode = () => undefined, onQueueNode = () => undefined }) => {
  const queue = [root];
  const rootQueuedVal = onQueueNode(root);
  if (rootQueuedVal) {
    return rootQueuedVal;
  }

  const explored = { [root.id]: true };

  while (queue.length) {
    const current = queue.shift();
    const onExploreVal = onExploreNode(current);
    if (onExploreVal) {
      return onExploreVal;
    }

    for (let i = 0; i < Object.keys(current.connections).length; i += 1) {
      const nodeId = Object.keys(current.connections)[i];
      if (!explored[nodeId]) {
        const nodeToQueue = current.connections[nodeId];
        queue.push(nodeToQueue);
        explored[nodeId] = true;
        const onQueueVal = onQueueNode(nodeToQueue);
        if (onQueueVal) {
          return onQueueVal;
        }
      }
    }
  }
};

// const { getExampleGraphRoot } = require('./GraphNode');
// const root = getExampleGraphRoot();
// breadthFirstExplore(root, { onExploreNode: n => console.log(n.id) });

module.exports = { breadthFirstExplore };