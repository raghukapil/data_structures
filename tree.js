function Tree(root) {
    this.root = root || null;
}

function Node (value, children) {
    this.value = value;
    this.children = children;
}

Tree.prototype.traverse = function(callback) {
    const self = this;
    function goThrough(node) {
        callback(node);
        node.children.forEach(child => {
            goThrough(child);
        });
    }

    goThrough(this.root);
}

Tree.prototype.addNode = function (value, parentValue) {
    const newNode = new Node(value, []);

    if (this.root === null) {
        this.root = newNode;
        return;
    } else {
        this.traverse((node) => {
            if (node.value === parentValue) {
                node.children.push(newNode);
            }
        });
    }
}

Tree.prototype.removeNode = function (value) {
    this.traverse((node) => {
        node.children.forEach((childNode, index) => {
            if(childNode.value === value) {
                node.children.splice(index, 1);
            }
        });
    });
}

Tree.prototype.search = function(value) {
    let result = "Node not found!!";
    this.traverse((node) => {
        if(node.value === value) {
            result = node;
        }
    });
    return result;
}

Tree.prototype.displayLeaf = function(parentValue) {
    const node = this.search(parentValue);
    if(node.children && node.children.length !== -1) {
        let result = [];
        node.children.forEach((element) => {
            result.push(element.value);
        });
        return result;
    } else {
        return `No Parent found for ${parentValue}`;
    }
}

let tree = new Tree();

tree.addNode('Courses');
tree.addNode('Arts', 'Courses');
tree.addNode('Science', 'Courses');

tree.addNode('B.A', 'Arts');
tree.addNode('B.Com', 'Arts');

tree.addNode('Science', 'B.Sc');

tree.addNode('Computers', 'B.Com');
tree.addNode('Regulars', 'B.Com');

console.log(tree);

console.log(`Search result: ${JSON.stringify(tree.search("Arts"))}`);
console.log(tree.displayLeaf('B.Com'))
