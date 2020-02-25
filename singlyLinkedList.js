let Node = function (data, next) {
    this.data = data;
    this.next = next;
}

let LinkedList = function () {
    this.head = null;
    this.size = 0;
}

LinkedList.prototype.add = function (element) {
    let node = new Node(element, null);
    let current;

    if (this.head === null) {
        this.head = node;
    } else {
        current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }

    this.size++;
}

LinkedList.prototype.addAt = function (element, index) {
    let node = new Node(element, null);
    let prev, current;
    let count = 1;

    if (this.head === null) {
        this.head = node;
    } else {
        prev = this.head;
        while (prev.next) {
            count++;
            if (count === index) {
                current = prev.next;
                prev.next = node;
            } else {
                prev = prev.next;
            }
        }
        prev.next = current;
    }

    this.size++;
}

LinkedList.prototype.removeAt = function (index) {
    let prev, current;
    let count = 1;
    if (this.size <= index) {
        if (this.head === null) {
            this.head = node;
        } else {
            prev = this.head;
            while (prev.next) {
                count++;
                if (count === index) {
                    current = prev.next;
                    prev.next = current.next;
                } else {
                    prev = prev.next;
                }
            }
        }
    }

    this.size++;
}

LinkedList.prototype.removeFirst = function () {
    let current = this.head;

    this.head = current.next;
    this.size--;
}

LinkedList.prototype.removeLast = function () {
    let current = this.head;
    let count = 1;

    while (current.next) {
        if ((this.size - 1) === count) {
            current.next = null;
        } else {
            current = current.next;
        }
        count++;
    }
    this.size--;
}

LinkedList.prototype.isEmpty = function () {
    return this.size === 0;
}

LinkedList.prototype.printList = function () {
    let current = this.head;
    let output = "";

    while (current) {
        output = output + current.data + " ";
        current = current.next;
    }

    return output;
}

LinkedList.prototype.length = function () {
    return this.size;
}

let list = new LinkedList();

list.add("a");
list.add("b");
// list.add("c");
list.add("d");
list.add("e");

list.addAt("c", 3);
console.log(list.printList());
console.log(list);

list.removeAt(5);

console.log(list.printList());
// console.log(list);
