"use strict";
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
            //出口
            return 1;
        }
        return n * factorialIterative(n - 1); //入口
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
    console.log(fibonaciMeno(4));
})(structure || (structure = {}));
//# sourceMappingURL=Structure.js.map