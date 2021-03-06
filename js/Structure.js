var structure;
(function (structure) {
    class Stack00 {
        constructor() {
            this.list = [];
        }
        push(element) {
            return this.list.push(element);
        }
        pop() {
            return this.list.pop();
        }
        isEmpty() {
            return !!this.list.length;
        }
        size() {
            return this.list.length;
        }
        peek() {
            return this.list[this.list.length - 1];
        }
        clear() {
            this.list = [];
        }
        toString() {
            return this.list.toString();
        }
    }
    class Stack01 {
        constructor() {
            this.map = {};
            this.count = 0;
        }
        push(element) {
            this.map[this.count] = element;
            this.count++;
            return this.count;
        }
        pop() {
            let element = this.map[this.count - 1];
            this.map[this.count - 1] = null;
            this.count--;
            return element;
        }
        peek() {
            return this.map[this.count - 1];
        }
        size() {
            return this.count;
        }
        isEmpty() {
            return !this.count;
        }
        clear() {
            this.count = 0;
            this.map = {};
        }
        toString() {
            if (this.isEmpty())
                return "";
            let str = "";
            for (let i in this.map) {
                str += this.map[i];
            }
        }
    }
    let stack = new Stack00();
    // stack.push(1);
    // stack.push(5);
    // stack.push(3);
    // console.log(stack.pop());
    // console.log(stack.toString());
})(structure || (structure = {}));
var structure;
(function (structure) {
    class Queue {
        constructor() {
            this.count = 0;
            this.lastCount = 0;
            this.map = {};
        }
        enqueue(...element) {
            if (element.length == 1) {
                this.map[this.lastCount] = element[0];
                this.lastCount++;
            }
            else {
                element.forEach((e) => this.enqueue(e));
            }
        }
        dequeue() {
            if (this.isEmpty())
                return undefined;
            let element = this.map[this.count];
            delete this.map[this.count];
            this.count++;
            return element;
        }
        isEmpty() {
            return !(this.lastCount - this.count);
        }
        size() {
            return this.lastCount - this.count;
        }
        peek() {
            return this.map[this.count];
        }
        clear() {
            this.count = this.lastCount = 0;
            this.map = {};
        }
        toString() {
            if (this.isEmpty())
                return "";
            let str = "";
            for (let i in this.map) {
                str += "-" + this.map[i];
            }
            return str;
        }
    }
    class Deque {
        constructor() {
            this.count = 0;
            this.lastCount = 0;
            this.map = {};
        }
        addFront(...element) {
            if (!element.length)
                return;
            if (element.length > 1) {
                for (let i = 0; i < element.length; i++) {
                    this.addFront(element[i]);
                }
                return;
            }
            let item = element[0];
            if (this.count > 0) {
                this.count--;
                this.map[this.count] = item;
            }
            else {
                for (let i = this.lastCount; i > 0; i--) {
                    this.map[i] = this.map[i - 1];
                }
                this.lastCount++;
                this.map[this.count] = item;
            }
        }
        addBack(...element) {
            if (element.length > 1) {
                for (let i = 0; i < element.length; i++) {
                    this.addBack(element[i]);
                }
            }
            else {
                this.map[this.lastCount++] = element[0];
            }
        }
        removeFront() {
            let element = this.map[this.count];
            delete this.map[this.count];
            this.count++;
            return element;
        }
        removeBack() {
            let element = this.map[this.lastCount - 1];
            delete this.map[this.lastCount - 1];
            this.lastCount--;
            return element;
        }
        peekFront() {
            return this.map[this.count];
        }
        peekBack() {
            return this.map[this.lastCount - 1];
        }
        isEmpty() {
            return !(this.lastCount - this.count);
        }
        size() {
            return this.lastCount - this.count;
        }
        claer() {
            this.lastCount = this.count = 0;
            this.map = {};
        }
        toString() {
            if (this.isEmpty())
                return "";
            let str = "";
            for (let i in this.map) {
                str += "-" + this.map[i];
            }
            return str;
        }
    }
})(structure || (structure = {}));
var structure;
(function (structure) {
    class Node {
        constructor(element) {
            this.element = element;
            this.next = null;
        }
    }
    structure.Node = Node;
    class DoublyNode {
        constructor(element) {
            this.element = element;
            this.prev = null;
            this.next = null;
        }
    }
    structure.DoublyNode = DoublyNode;
    function defaultEquals(a, b) {
        return a === b;
    }
    structure.defaultEquals = defaultEquals;
    class TreeNode {
        constructor(element) {
            this.key = element;
            this.right = null;
            this.left = null;
        }
    }
    structure.TreeNode = TreeNode;
    class RBNode extends TreeNode {
        constructor(element) {
            super(element);
            this.parent = null;
            this.color = 0 /* Red */;
        }
        isRed() {
            return this.color == 0 /* Red */;
        }
    }
    structure.RBNode = RBNode;
})(structure || (structure = {}));
/// <reference path="./utility/Node.ts" />
var structure;
(function (structure) {
    class LinkedList {
        constructor() {
            this.count = 0;
            this.head = null;
            this.equalsFn = structure.defaultEquals;
        }
        push(element) {
            const node = new structure.Node(element);
            if (this.head == null) {
                this.head = node;
            }
            else {
                let current = this.head;
                while (current.next) {
                    current = current.next;
                }
                current.next = node;
            }
            this.count++;
        }
        insert(element, index) {
            if (index < 0 || index > this.count)
                return false;
            let node = new structure.Node(element);
            let head = this.head;
            if (index == 0) {
                this.head = node;
                node.next = head;
            }
            else {
                let previous = this.getElementAt(index - 1);
                let nextNode = previous.next;
                previous.next = node;
                node.next = nextNode;
            }
            this.count++;
            return true;
        }
        getElementAt(index) {
            if (index < 0 || index >= this.count)
                return undefined;
            let current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
            return current;
        }
        indexof(element) {
            let node = this.head;
            let exist = false;
            let index = 0;
            while (node) {
                if (this.equalsFn(node.element, element)) {
                    exist = true;
                    break;
                }
                node = node.next;
                index++;
            }
            return exist ? index : -1;
        }
        removeAt(index) {
            if (index < 0 || index > this.count)
                return false;
            let node = this.head;
            if (index == 0) {
                this.head = node.next;
            }
            else {
                let previous = this.getElementAt(index - 1);
                node = previous.next;
                previous.next = node.next;
            }
            this.count--;
            return node.element;
        }
        remove(element) {
            let index = this.indexof(element);
            return index === -1 ? null : this.removeAt(index);
        }
        isEmpty() {
            return this.count === 0;
        }
        size() {
            return this.count;
        }
        getHead() {
            return this.head;
        }
        clear() {
            this.head = null;
            this.count = 0;
        }
        toString() {
            let res = '';
            let current = this.head;
            while (current) {
                res += "-" + current.element;
                current = current.next;
            }
            return res;
        }
    }
    class DoublyLikedList {
        constructor() {
            this.count = 0;
            this.head = null;
            this.tail = null;
        }
        push(element) {
            const node = new structure.DoublyNode(element);
            if (this.isEmpty()) {
                this.head = this.tail = node;
            }
            else {
                let cur = this.tail;
                cur.next = node;
                node.prev = cur;
                this.tail = node;
            }
            this.count++;
        }
        install(element, index) {
            if (index < 0 || index > this.count)
                return false;
            const node = new structure.DoublyNode(element);
            let current = this.head;
            if (index == 0) {
                if (this.isEmpty()) {
                    this.head = this.tail = node;
                }
                else {
                    node.next = current;
                    current.prev = node;
                    this.head = node;
                }
            }
            else if (index == this.count) {
                let cur = this.tail;
                cur.next = node;
                node.prev = cur;
                this.tail = node;
            }
            else {
                let prev = this.getElement(index - 1);
                node.next = prev.next;
                node.next.prev = node;
                node.prev = prev;
                prev.next = node;
            }
            this.count++;
            return true;
        }
        removeAt(index) {
            if (index < 0 || index > this.count)
                return null;
            let current = this.head;
            if (index == 0) {
                if (this.size() === 1) {
                    this.head = this.tail = null;
                }
                else {
                    let next = current.next;
                    next.prev = null;
                    this.head = next;
                }
            }
            else if (index === this.count) {
                let cur = this.tail;
                let prev = cur.prev;
                prev.next = null;
                this.tail = prev;
            }
            else {
                let prev = this.getElement(index - 1);
                let next = prev.next;
                prev.next = next.next;
                next.prev.next = prev;
            }
            this.count--;
        }
        getElement(index) {
            if (index < 0 || index > this.count)
                return null;
            let node = this.head;
            for (let i = 0; i < index; i++) {
                node = node.next;
            }
            return node;
        }
        clear() {
            this.count = 0;
            this.head = null;
            this.tail = null;
        }
        isEmpty() {
            return this.count == 0;
        }
        size() {
            return this.count;
        }
        getHead() {
            return this.head;
        }
        getTail() {
            return this.tail;
        }
        toString() {
            if (this.isEmpty())
                return "";
            let str = "";
            let cur = this.head;
            for (let i = 0; i < this.count; i++) {
                str += "-" + cur.element;
                cur = cur.next;
            }
            return str;
        }
    }
})(structure || (structure = {}));
var structure;
(function (structure) {
    class mySet {
        constructor() {
            this.items = {};
        }
        add(element) {
            if (this.has(element))
                return false;
            this.items[element + ""] = element;
            return true;
        }
        delete(element) {
            if (!this.has(element))
                return false;
            delete this.items[element + ""];
            return true;
        }
        clear() {
            this.items = {};
        }
        size() {
            return Object.keys(this.items).length;
        }
        value() {
            let arr = [];
            for (let key in this.items) {
                arr.push(this.items[key]);
            }
            return arr;
        }
        getUniot(otherSet) {
            const union = new mySet();
            this.value().forEach(el => union.add(el));
            otherSet.value().forEach(el => union.add(el));
            return union;
        }
        getIntersection(otherSet) {
            const intersection = new mySet();
            let smallerSet = this.value();
            let biggerSet = this.value();
            if (smallerSet.length > biggerSet.length) {
                [smallerSet, biggerSet] = [biggerSet, smallerSet];
            }
            smallerSet.forEach(el => {
                for (let i = 0; i < biggerSet.length; i++) {
                    let element = biggerSet[i];
                    if (el == element) {
                        intersection.add(el);
                        break;
                    }
                }
            });
            return intersection;
        }
        getDifference(otherSet) {
            const difference = new mySet();
            this.value().forEach(el => {
                if (!otherSet.has(el)) {
                    difference.add(el);
                }
            });
            return difference;
        }
        has(element) {
            return Object.prototype.hasOwnProperty.call(this.items, element + "");
        }
    }
})(structure || (structure = {}));
var structure;
(function (structure) {
    function factorialIterative(n) {
        if (n === 1 || n === 0) {
            //??????
            return 1;
        }
        return n * factorialIterative(n - 1); //??????
    }
    function getFibonaci(n) {
        if (n < 1)
            return 0;
        if (n < 2)
            return 1;
        return getFibonaci(n - 1) + getFibonaci(n - 2);
    }
    function fibonaciMeno(n) {
        let mone = [1, 1];
        const fibonaci = (n) => {
            if (mone[n]) {
                return mone[n];
            }
            return (mone[n] = fibonaci(n - 1) + fibonaci(n - 2));
        };
        return fibonaci(n);
    }
})(structure || (structure = {}));
var structure;
(function (structure) {
    let arr = [2, 3, 1, 3, 1];
    function horner(arr, x) {
        let res = 0;
        for (let i = 0; i < arr.length; i++) {
            res += x * res + res[i];
        }
        return res;
    }
    function hashFunc(str, size) {
        let hashCode = 0;
        for (let i = 0; i < str.length; i++) {
            hashCode = 37 * hashCode + str.charCodeAt(i);
        }
        let res = hashCode % 37;
        return res;
    }
    class HashTable {
        constructor(limit) {
            this.limit = limit;
            this.count = 0;
            this.storage = [];
        }
        hashFunction(str, size) {
            let hashCode = 0;
            for (let i = 0; i < str.length; i++) {
                hashCode += 37 * hashCode + str.charCodeAt(i);
            }
            let res = hashCode % size;
            return res;
        }
        put(key, value) {
            let index = this.hashFunction(key, this.limit);
            let bucket = this.storage[index];
            if (!bucket) {
                this.storage[index] = [];
                bucket = this.storage[index];
            }
            for (let i = 0; i < bucket.length; i++) {
                let tuple = bucket[i];
                if (tuple[0] === key) {
                    return tuple[1] = value;
                }
            }
            bucket.push([key, value]);
            this.count += 1;
            if (this.count > this.limit * 0.75) {
                this.resize(this.getPrime(this.limit * 2));
            }
        }
        get(key = "") {
            let index = this.hashFunction(key, this.limit);
            let bucket = this.storage[index];
            if (!bucket)
                return null;
            for (let i = 0; i < bucket.length; i++) {
                let tuple = bucket[i];
                if (tuple[0] === key) {
                    return tuple[1];
                }
            }
            return null;
        }
        remove(key) {
            let index = this.hashFunction(key, this.limit);
            let bucket = this.storage[index];
            if (!bucket)
                return false;
            for (let i = 0; i < bucket.length; i++) {
                let tuple = bucket[i];
                if (tuple[0] == key) {
                    this.count--;
                    delete bucket[i];
                }
                if (!bucket.entries().next().value[1])
                    delete this.storage[index];
                if (this.limit > 7 && this.count < this.limit * 0.25) {
                    this.resize(this.isPrime(Math.floor(this.limit / 2)));
                }
                return true;
            }
            return false;
        }
        size() {
            return this.count;
        }
        isEmpty() {
            return !(this.count > 0);
        }
        resize(size) {
            let oldStorage = this.storage;
            this.storage = [];
            this.count = 0;
            this.limit = size;
            for (let i = 0; i < oldStorage.length; i++) {
                let bucket = oldStorage[i];
                if (!bucket)
                    continue;
                for (let j = 0; j < bucket.length; j++) {
                    let tuple = bucket[j];
                    this.put(tuple[0], tuple[1]);
                }
            }
        }
        getPrime(num) {
            while (!this.isPrime(num)) {
                num++;
            }
            return num;
        }
        isPrime(num) {
            if (num <= 0)
                return false;
            let newNum = ~~Math.sqrt(num);
            for (let i = 2; i < newNum; i++) {
                if (num % i == 0)
                    return false;
            }
            return true;
        }
    }
    function isPrimeNum01(num) {
        if (num <= 0)
            return false;
        for (let i = 2; i < num; i++) {
            if (num % i == 0)
                return false;
        }
        return true;
    }
    function isPrimeNum02(num) {
        if (num <= 0)
            return false;
        let numNum = ~~Math.sqrt(num);
        for (let i = 0; i < numNum; i++) {
            if (num % i == 0)
                return false;
        }
        return true;
    }
})(structure || (structure = {}));
/// <reference path="./utility/Node.ts" />
var structure;
(function (structure) {
    class BinarySearchTree {
        constructor() {
            this.root = null;
        }
        /* ???????????? */
        insertNode(node, key) {
            //????????????????????????
            if (key > node.key) {
                //???????????????
                if (node.right === null) {
                    //????????????????????? ?????? --??????
                    node.right = new structure.TreeNode(key);
                }
                else {
                    //??????????????????  --??????
                    this.insertNode(node.right, key);
                }
            }
            else {
                //?????????????????????
                if (node.left === null) {
                    node.left = new structure.TreeNode(key);
                }
                else {
                    this.insertNode(node.left, key);
                }
            }
        }
        preOrderTraverseNode(node, callback) {
            //????????????????????????
            if (node != null) {
                callback(node.key);
                this.preOrderTraverseNode(node.left, callback);
                this.preOrderTraverseNode(node.right, callback);
            }
        }
        inOrderTraverseNode(node, callback) {
            //????????????????????????
            if (node != null) {
                this.inOrderTraverseNode(node.left, callback);
                callback(node.key);
                this.inOrderTraverseNode(node.right, callback);
            }
        }
        postOrderTraverseNode(node, callback) {
            //????????????????????????
            if (node !== null) {
                this.postOrderTraverseNode(node.left, callback);
                this.postOrderTraverseNode(node.right, callback);
                callback(node.key);
            }
        }
        getMinNode(node) {
            //?????????????????????
            while (node !== null && node.left !== null) {
                node = node.left;
            }
            return node;
        }
        getMaxNode(node) {
            //?????????????????????
            while (node !== null && node.right !== null) {
                node = node.right;
            }
            return node;
        }
        searchNode(node, key) {
            //???????????????????????? ?????????
            if (node === null)
                return false;
            if (key > node.key)
                return this.searchNode(node.right, key);
            if (key < node.key)
                return this.searchNode(node.left, key);
            return true;
        }
        removeNode(node, key) {
            if (node === null)
                return null;
            if (key === node.key) {
                //????????????
                if (node.left === null || node.right === null) {
                    //???????????????,???????????????????????????
                    node = node.right || node.left;
                    return node;
                }
                else {
                    //??????????????? ,????????????????????????
                    const aux = this.getMinNode(node.right);
                    node.key = aux.key;
                    node.right = this.removeNode(node.right, aux.key);
                    return node;
                }
            }
            else if (key > node.key) {
                //?????????key?????? ?????????????????????
                node.right = this.removeNode(node.right, key);
                return node;
            }
            else if (key < node.key) {
                //?????????key?????? ?????????????????????
                node.left = this.removeNode(node.left, key);
                return node;
            }
        }
        /* ????????????  */
        insert(key) {
            //??????????????????????????????
            if (this.root === null) {
                //??????????????? ????????????
                this.root = new structure.TreeNode(key);
            }
            else {
                //???????????? ?????????????????????
                this.insertNode(this.root, key);
            }
        }
        search(key) {
            //????????????????????????????????????????????????????????? true??????????????????????????????false
            // ----????????????
            return this.searchNode(this.root, key);
            // ----while???????????? ????????????
            // let node = this.root
            // while (node !== null) {
            //   if (key > node.key) {
            //     node = node.right
            //   } else if (key < node.key) {
            //     node = node.left
            //   } else {
            //     return true
            //   }
            // }
            // return false
        }
        preOrderTraverse(callback) {
            //????????????
            this.preOrderTraverseNode(this.root, callback);
        }
        inOrderTraverse(callback) {
            //????????????
            this.inOrderTraverseNode(this.root, callback);
        }
        postOrderTraverse(callback) {
            //????????????
            this.postOrderTraverseNode(this.root, callback);
        }
        min() {
            //????????????????????????
            if (this.root === null)
                return null;
            return this.getMinNode(this.root).key;
        }
        max() {
            //????????????????????????
            if (this.root === null)
                return null;
            return this.getMaxNode(this.root).key;
        }
        remove(key) {
            //????????????????????????
            this.root = this.removeNode(this.root, key);
        }
    }
    class RedBlackTree extends BinarySearchTree {
        constructor() {
            super();
        }
        insert(key) {
            if (this.root == null) {
                this.root = new structure.RBNode(key);
                this.root.color = 1 /* Black */;
            }
            else {
                const newNode = this.insertNode(this.root, key);
                this.fixTreeProperties(newNode);
            }
        }
        insertNode(node, key) {
            if (key > node.key) {
                if (node.right === null) {
                    node.right = new structure.RBNode(key);
                    node.right.parent = node;
                }
                else {
                    return this.insertNode(node.right, key);
                }
            }
            else {
                if (node.left === null) {
                    node.left = new structure.RBNode(key);
                    node.left.parent = node;
                }
                else {
                    return this.insertNode(node.left, key);
                }
            }
        }
        fixTreeProperties(node) {
            while (node && node.parent && node.parent.isRed() && node.isRed()) {
                let parnet = node.parent;
                const grandParent = parnet.parent;
                if (grandParent && grandParent.left == parnet) {
                    //p =G.L
                    const uncle = grandParent.right;
                    if (uncle && uncle.isRed()) {
                        grandParent.color = 0 /* Red */;
                        parnet.color = 1 /* Black */;
                        uncle.color = 1 /* Black */;
                        node = grandParent;
                    }
                    else {
                        if (node === parnet.right) {
                            this.rotaionRR(parnet);
                            node = parnet;
                            parnet = node.parent;
                        }
                        this.rotaionLL(grandParent);
                        parnet.color = 1 /* Black */;
                        grandParent.color = 0 /* Red */;
                        node.parent;
                    }
                }
                else {
                    const uncle = grandParent.left;
                    if (uncle && uncle.isRed()) {
                        grandParent.color = 0 /* Red */;
                        uncle.color = 1 /* Black */;
                        parnet.color = 1 /* Black */;
                        node = grandParent;
                    }
                    else {
                        if (node == parnet.left) {
                            this.rotaionLL(parnet);
                            node = parnet;
                            parnet = grandParent;
                        }
                    }
                    this.rotaionRR(grandParent);
                    parnet.color = 1 /* Black */;
                    grandParent.color = 0 /* Red */;
                    node = parnet;
                }
            }
        }
        rotaionRR(node) {
            const tmp = node.right;
            node.right = tmp.left;
            if (tmp.left && tmp.left.key) {
                tmp.left.parent = node.right;
            }
            tmp.parent = node.parent;
            if (!tmp.parent) {
                this.root = tmp.parent;
            }
            else {
                if (tmp.parent.left == node) {
                    tmp.parent.left = tmp;
                }
                else {
                    tmp.parent.right = tmp;
                }
            }
            tmp.left = node;
            node.parent = tmp;
        }
        rotaionLL(node) {
            const tmp = node.left;
            node.left = tmp.right;
            if (tmp.right && tmp.right.key) {
                tmp.right.parent = node;
            }
            tmp.parent = node.parent;
            if (!tmp.parent) {
                this.root = tmp.parent;
            }
            else {
                if (tmp.parent.left == node) {
                    tmp.parent.left = tmp;
                }
                else {
                    tmp.parent.right = tmp;
                }
            }
            tmp.left = node;
            node.parent = tmp;
        }
    }
})(structure || (structure = {}));
var structure;
(function (structure) {
    class MinHeap {
        constructor() {
            this.heap = [];
        }
        getLeftIndex(index) {
            return index * 2 + 1;
        }
        getRightIndex(index) {
            return index * 2 + 2;
        }
        getParentIndex(index) {
            return Math.floor((index - 1) / 2);
        }
        swap(arr, a, b) {
            [arr[a], arr[b]] = [arr[b], arr[a]];
        }
        preTraverseNode(index, cb) {
            if (this.heap[index] !== undefined) {
                cb(this.heap[index]);
                this.preTraverseNode(this.getLeftIndex(index), cb);
                this.preTraverseNode(this.getRightIndex(index), cb);
            }
        }
        compare(a, b) {
            return a >= b;
        }
        siftUp(index) {
            let parent = this.getParentIndex(index);
            while (index > 0 && this.compare(this.heap[parent], this.heap[index])) {
                this.swap(this.heap, index, parent);
                index = parent;
                parent = this.getParentIndex(index);
            }
        }
        shifDown(index) {
            let left = this.getLeftIndex(index);
            let right = this.getRightIndex(index);
            if (this.compare(this.heap[index], this.heap[left]) && this.compare(this.heap[index], this.heap[right])) {
                if (!this.compare(this.heap[right], this.heap[left])) {
                    this.swap(this.heap, right, index);
                    this.shifDown(right);
                }
                else {
                    this.swap(this.heap, left, index);
                    this.shifDown(left);
                }
            }
            else if (this.compare(this.heap[index], this.heap[left])) {
                this.swap(this.heap, left, index);
                this.shifDown(left);
            }
            else if (this.compare(this.heap[index], this.heap[right])) {
                this.swap(this.heap, right, index);
                this.shifDown(right);
            }
        }
        inster(value) {
            this.heap.push(value);
            this.siftUp(this.heap.length - 1);
            return true;
        }
        extract() {
            if (this.isEmpty()) {
                return undefined;
            }
            if (this.size() == 1) {
                return this.heap.unshift();
            }
            const removeValue = this.heap[0];
            this.heap[0] = this.heap.pop();
            this.shifDown(0);
            return removeValue;
        }
        isEmpty() {
            return this.size() == 0;
        }
        size() {
            return this.heap.length;
        }
        preTraverse(cb) {
            this.preTraverseNode(0, cb);
        }
    }
})(structure || (structure = {}));
var structure;
(function (structure) {
    function quickSort(arr) {
        quick(arr, 0, arr.length - 1);
        return arr;
    }
    structure.quickSort = quickSort;
    function quick(arr, left, right) {
        if (arr.length > 1) {
            let index = partition(arr, left, right);
            console.log('index', index);
            //????????????????????????  ???????????? ????????????
            if (left < index - 1) {
                quick(arr, left, index - 1);
            }
            if (index < right) {
                quick(arr, index, right);
            }
        }
    }
    function partition(arr, left, right) {
        //????????? ???pivot ????????? ????????? ?????? ???????????????
        let pivot = arr[Math.floor((left + right) / 2)];
        let i = left;
        let j = right;
        while (i <= j) {
            while (arr[i] < pivot) {
                i++;
            }
            while (arr[j] > pivot) {
                j--;
            }
            if (i <= j) {
                swap(arr, i, j);
                i++;
                j--;
            }
        }
        return i;
    }
    function swap(arr, i, j) {
        ;
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    let arr = [15, 4, 53, 1, 3, 3, 5, 45, 45];
    quickSort(arr);
    console.log(arr);
})(structure || (structure = {}));
var sort;
(function (sort) {
    class bubbleSort {
        sort(arr) {
            for (let i = 0; i < arr.length - 1; i++) {
                let complete = true;
                for (let j = 0; j < arr.length - i; j++) {
                    if (arr[j] > arr[j + 1]) {
                        complete = false;
                        [arr[j], arr[i]] = [arr[i], arr[j]];
                    }
                }
                if (complete) {
                    return;
                }
            }
        }
    }
})(sort || (sort = {}));
var sort;
(function (sort) {
    class SelectionSort {
        sort(arr) {
            for (let i = 0; i < arr.length - 1; i++) {
                let cur = i;
                for (let j = i + 1; j < arr.length; j++) {
                    if (arr[cur] > arr[j]) {
                        cur = i;
                    }
                }
                if (cur != i) {
                    [arr[cur], arr[i]] = [arr[i], arr[cur]];
                }
            }
        }
    }
})(sort || (sort = {}));
var sort;
(function (sort) {
    class insertionSort {
        sort(arr) {
            for (let i = 1; i < arr.length; i++) {
                let j = i;
                let tmp = arr[i];
                while (j > 0 && arr[j - 1] > tmp) {
                    arr[j] = arr[j - 1];
                    j--;
                }
                arr[j] = tmp;
            }
        }
    }
})(sort || (sort = {}));
var sort;
(function (sort) {
    class shellSort {
        sort(arr) {
            let gap = Math.floor(arr.length / 2);
            while (gap >= 1) {
                for (let i = gap; i < arr.length; i++) {
                    let j = i;
                    let tmp = arr[i];
                    while (j > gap - 1 && arr[j - gap] > tmp) {
                        arr[j] = arr[j - gap];
                        j -= gap;
                    }
                    arr[j] = tmp;
                }
            }
            gap = Math.floor(gap / 2);
        }
    }
})(sort || (sort = {}));
var sort;
(function (sort) {
    class quickSort {
        sort(arr) {
            this.quick(arr, 0, arr.length - 1);
        }
        quick(arr, left, right) {
            if (arr.length < 0)
                return;
            let index = this.partition(arr, left, right);
            if (index - 1 > left) {
                this.partition(arr, left, index - 1);
            }
            else if (index < right) {
                this.partition(arr, index, right);
            }
        }
        partition(arr, left, right) {
            let mid = arr[Math.floor((left + right) / 2)];
            let i = left;
            let j = right;
            while (i < j) {
                while (arr[i] < mid) {
                    i++;
                }
                while (arr[j] > mid) {
                    j--;
                }
                if (i < j) {
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                    i++;
                    j--;
                }
            }
            return i;
        }
    }
})(sort || (sort = {}));
var sort;
(function (sort) {
    class mergeSort {
        sort(arr) {
            let mid = Math.floor(arr.length / 2);
            let left = this.sort(arr.slice(0, mid));
            let right = this.sort(arr.slice(mid, arr.length));
            arr = this.merge(left, right);
            return arr;
        }
        merge(letf, right) {
            let i = 0;
            let j = 0;
            let result = [];
            while (i < letf.length && j < right.length) {
                result.push(letf[i] < right[j] ? letf[i++] : right[j++]);
            }
            return result.concat(i < letf.length ? letf.slice(i) : right.slice(j));
        }
    }
})(sort || (sort = {}));
//# sourceMappingURL=Structure.js.map