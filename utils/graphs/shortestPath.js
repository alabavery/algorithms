const { breadthFirstExplore } = require('./breadthFirstExplore');

// get the number of nodes in the shortest path from the root to the target
const calculateShortestPath = (rootNode, targetNodeId) => {
  const onExploreQueuedItem = item => {
    if (item.node.id === targetNodeId) {
      return item.pathSize;
    }
  };
  const queuedItemEnricher = (queuedNode, lastQueuedValue) => {
    const pathLengthSoFar = lastQueuedValue.pathSize || 0;
    return { pathSize: pathLengthSoFar + 1 };
  };
  return breadthFirstExplore(rootNode, { onExploreQueuedItem, queuedItemEnricher });
};

// in contrast to calculateShortestPath, which just returns the length of the shortest path, getShortestPath returns
// an array that is the actual shortest path
const getShortestPath = (rootNode, targetNodeId) => {
  const onExploreQueuedItem = item => {
    if (item.node.id === targetNodeId) {
      return item.path;
    }
  };
  const queuedItemEnricher = (queuedNode, lastQueuedValue) => {
    const pathSoFar = lastQueuedValue.path || [];
    return { path: pathSoFar.concat(queuedNode.id) };
  };
  return breadthFirstExplore(rootNode, { onExploreQueuedItem, queuedItemEnricher });
};

module.exports = { getShortestPath, calculateShortestPath };