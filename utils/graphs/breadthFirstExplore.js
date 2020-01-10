/**
 * SEE EXAMPLE BELOW DEFINITION
 * @param root - must be of type GraphNode (./GraphNode.js)
 * @param callback - this will be passed nodes as they are explored. do whatever you want with this.  Return true
 * if you want exploration to stop at this node.
 */
const breadthFirstExplore = (root, { onExploreQueuedItem = () => undefined, queuedItemEnricher = () => undefined }) => {
  const enrichQueuedItem = (nodeToQueue, lastQueued) => {
    const enrichment = queuedItemEnricher(nodeToQueue, lastQueued) || {};
    return { node: nodeToQueue, ...enrichment };
  };
  const queue = [enrichQueuedItem(root, {})];
  const explored = { [root.id]: true };

  while (queue.length) {
    const current = queue.shift();
    const onExploreVal = onExploreQueuedItem(current);
    if (onExploreVal) {
      return onExploreVal;
    }

    const { connections } = current.node;

    for (let i = 0; i < Object.keys(connections).length; i += 1) {
      const nodeId = Object.keys(connections)[i];
      if (!explored[nodeId]) {
        const nodeToQueue = connections[nodeId];
        queue.push(enrichQueuedItem(nodeToQueue, current));
        explored[nodeId] = true;
      }
    }
  }
};

// const { getExampleGraphRoot } = require('./GraphNode');
// const root = getExampleGraphRoot();
// breadthFirstExplore(root, { onExploreNode: n => console.log(n.id) });

module.exports = { breadthFirstExplore };