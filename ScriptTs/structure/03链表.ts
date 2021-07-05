/// <reference path="./utility/Node.ts" />

namespace structure{
    class LinkedList<T>{
        protected count:number;
        protected head:Node<T>;
        protected equalsFn:typeof defaultEquals;
        constructor(){
            this.count = 0;
            this.head = null;
            this.equalsFn = defaultEquals;
        }

        public push(element:T){
            const node = new Node(element);
            if(this.head == null){
                this.head = node;
            }else{
                let current = this.head;
                while(current.next){
                    current = current.next;
                }
                current.next = node;
            }
            this.count++;
        }
        
        insert(element:T,index:number){
           if(index < 0 || index > this.count) return false;
           let node = new Node(element);
           let head = this.head;
           if(index == 0){
               this.head = node;
               node.next = head;
           }else{
                let previous = this.getElementAt(index - 1);
                let nextNode = previous.next;
                previous.next = node;
                node.next = nextNode;
           }
           this.count++;
           return true;
        }
        
        public getElementAt(index:number){
            if(index < 0 || index >= this.count) return undefined;
            let current = this.head;
            for(let i = 0;i<index;i++){
                current = current.next;
            }
            return current;
        }

        public indexof(element:T){
            let node = this.head;
            let exist = false;
            let index = 0;
            while(node){
                if(this.equalsFn(node.element,element)){
                    exist = true;
                    break;
                }

                node = node.next;
                index++;
            }
            return exist ? index : -1;
        }

        public removeAt(index:number){
            if(index < 0 || index > this.count) return false;
            let node = this.head;
            if(index == 0){
                this.head = node.next;
            }else{
                let previous = this.getElementAt(index - 1);
                node = previous.next;
                previous.next = node.next;
            }
            this.count--;
            return node.element;
        }

        public remove(element:T){
            let index = this.indexof(element);
            return index === -1 ? null : this.removeAt(index);
        }

        isEmpty(){
            return this.count === 0;
        }

        size(){
            return this.count;
        }

        getHead(){
            return this.head;
        }

        clear(){
            this.head = null;
            this.count = 0;
        }

        toString(){
            let res = '';
            let current = this.head;
            while(current){
                res += "-" + current.element;
                current = current.next;
            }
            return res;
        }
    }

    class DoublyLikedList<T>{
        private count:number;
        private head:DoublyNode<T>;
        private tail:DoublyNode<T>;
        constructor(){
            this.count = 0;
            this.head = null;
            this.tail = null;
        }

        public push(element:T){
            const node = new DoublyNode(element);
            if(this.isEmpty()){
                this.head = this.tail = node;
            }else{
                let cur = this.tail;
                cur.next = node;
                node.prev = cur;
                this.tail = node;
            }
            this.count++;
        }

        public install(element:T,index:number){
            if(index < 0 || index > this.count) return false;
            const node = new DoublyNode(element);
            let current = this.head;
            if(index == 0){
                if(this.isEmpty()){
                    this.head = this.tail = node;
                }else{
                    node.next = current;
                    current.prev = node;
                    this.head = node;
                }
            }else if(index == this.count){
                let cur = this.tail;
                cur.next = node;
                node.prev = cur;
                this.tail = node;
            }else{
                let prev = this.getElement(index - 1) as DoublyNode<T>;
                node.next = prev.next;
                node.next.prev = node;
                
                node.prev = prev;
                prev.next = node;
            }
            this.count++;
            return true;
        }

        public removeAt(index:number):any{
            if(index < 0 || index > this.count)return null;
            let current = this.head;
            if(index == 0){
                if(this.size() === 1){
                    this.head = this.tail = null;
                }else{
                    let next = current.next;
                    next.prev = null;
                    this.head=  next;
                }
            }else if(index === this.count){
                let cur = this.tail;
                let prev = cur.prev;
                prev.next = null;
                this.tail = prev;
            }else{
                let prev = this.getElement(index - 1) as DoublyNode<T>;
                let next = prev.next;
                prev.next = next.next;
                next.prev.next = prev;
            }
            this.count--;
        }

        public getElement(index:number):DoublyNode<T>{
            if(index < 0 || index > this.count) return null;
            let node = this.head;
            for(let i = 0;i<index;i++){
                node = node.next;
            }
            return node;
        }

        public clear(){
            this.count = 0;
            this.head = null;
            this.tail = null;
        }


        public isEmpty():boolean{
            return this.count == 0;
        }

        public size():number{
            return this.count;
        }
        
        public getHead():DoublyNode<T>{
            return this.head;
        }

        public getTail():DoublyNode<T>{
            return this.tail;
        }
    
        public toString():string{
            if(this.isEmpty()) return "";
            let str = ""
            let cur = this.head;
            for(let i = 0;i<this.count;i++){
                str += "-" + cur.element; 
                cur = cur.next;
            }
            return str;
        }
    }
}
