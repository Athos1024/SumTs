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
var strcuture;
(function (strcuture) {
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
})(strcuture || (strcuture = {}));
//# sourceMappingURL=Structure.js.map