namespace structure{

    class Stack00<T>{
        private list:Array<T>;

        constructor(){
            this.list = [];
        }

        public push(element:T):number{
            return this.list.push(element);
        }

        public pop():T{
            return this.list.pop();
        }

        public isEmpty():boolean{
            return !!this.list.length;
        }

        public size():number{
            return this.list.length;
        }

        public peek():T{
            return this.list[this.list.length -1];
        }

        public clear(){
            this.list = [];
        }

        public toString(){
            return this.list.toString();
        }


    }
   
    class Stack01<T>{
        private map:{[index:number]:T};
        private count:number;

        constructor(){
            this.map = {};
            this.count = 0;
        }

        public push(element:T):number{
            this.map[this.count] = element;
            this.count++;
            return this.count;
        }

        public pop():T{
            let element = this.map[this.count - 1];
            this.map[this.count - 1] = null;
            this.count--;
            return element;
        }

        public peek():T{
            return this.map[this.count - 1];
        }

        public size(){
            return this.count;
        }

        public isEmpty(){
            return !this.count;
        }

        public clear(){
            this.count = 0;
            this.map = {};
        }

        public toString(){
            if(this.isEmpty()) return "";
            let str = "";
            for(let i in this.map){
                str += this.map[i];
            }
        }


    }
    let stack = new Stack00<number>();
    // stack.push(1);
    // stack.push(5);
    // stack.push(3);
    
    // console.log(stack.pop());
    // console.log(stack.toString());
}