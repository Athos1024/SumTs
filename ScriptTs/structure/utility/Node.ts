namespace structure{
    export class Node<T>{
        public element:T;
        public next:Node<T> | null;
        constructor(element:T){
            this.element = element;
            this.next = null;
        }
    }

    export class DoublyNode<T>{
        public prev:DoublyNode<T>;
        public next:DoublyNode<T> 
        public element:T
        constructor(element:T){
            this.element = element;
            this.prev = null;
            this.next = null;
        }
    }

    export function defaultEquals(a:any,b:any){
        return a === b;
    }
}