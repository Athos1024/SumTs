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

    export class TreeNode<T>{
        public left:TreeNode<T>;
        public right:TreeNode<T>;
        public key:T;
        constructor(element:T){
            this.key = element;
            this.right = null;
            this.left = null;
        }
    }

    export class RBNode<T> extends TreeNode<T>{
        public parent:RBNode<T>;
        public left:RBNode<T>;
        public right:RBNode<T>;
        public color:number;
        constructor(element:T){
            super(element);
            this.parent = null;
            this.color = ColorType.Red;
        }

        public isRed():boolean{
            return this.color == ColorType.Red;
        }
    }

    export const enum  ColorType{
         Red = 0,
         Black = 1,
    }

}