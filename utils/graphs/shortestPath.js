const { breadthFirstExplore } = require('./breadthFirstExplore');

const getShortestPath = (rootNode, targetNodeId) => {
  const enrichedQueue = [];
  let lastValFromQueue = [];

  const onExploreNode = () => {
    lastValFromQueue = enrichedQueue.shift();
  };
  const onQueueNode = queuedNode => {
    const pathToThisNode = lastValFromQueue.concat(queuedNode.id);
    if (queuedNode.id === targetNodeId) {
      return pathToThisNode;
    }
    enrichedQueue.push(pathToThisNode);
  };
  return breadthFirstExplore(rootNode, { onExploreNode, onQueueNode });
};

module.exports = { getShortestPath };