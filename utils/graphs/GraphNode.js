// SEE EXAMPLE USE BELOW THIS FUNCTION
function GraphNode (id, connectedNodes) {
  this.id = id;
  this.connections = {};

  this.addConnections = function (toAdd) {
    toAdd.forEach(node => this.connections[node.id] = node);
  };
  this.addConnections(connectedNodes || []);
};

const getExampleGraphRoot = () => {
  const s = new GraphNode('s');
  const a = new GraphNode('a');
  const b = new GraphNode('b');
  s.addConnections([a, b]);
  const c = new GraphNode('c');
  a.addConnections([s, b, c]);
  const d = new GraphNode('d');
  b.addConnections([s, a, c, d]);
  const e = new GraphNode('e');
  c.addConnections([a, b, d, e]);
  d.addConnections([b, c, e]);
  e.addConnections([c, d]);
  return s;
};

const printGraphFromRoot = root => {
  let cache = [];
  console.log(JSON.stringify(root, function (key, val) {
      if (typeof val === 'object' && val !== null) {
        if (cache.indexOf(val) !== -1) {
          return `<NODE '${key}'>`;
        }
      }
      cache.push(val);
      return val;
    },
  ));
  cache = null;
};

module.exports = {
  GraphNode,
  getExampleGraphRoot,
  printGraphFromRoot,
};
