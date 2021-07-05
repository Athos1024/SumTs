namespace structure{

    class Queue<T>{
        private count:number;
        private lastCount:number;
        private map:{[index:number]:T};

        constructor(){
            this.count = 0;
            this.lastCount = 0;
            this.map = {};
        }

        public enqueue(...element:Array<T>):void{
            if(element.length == 1){
                this.map[this.lastCount] = element[0];
                this.lastCount++;
            }else{
                element.forEach((e)=>this.enqueue(e));
            }
        }

        public dequeue(){
            if(this.isEmpty()) return undefined;
            let element = this.map[this.count];
            delete this.map[this.count]
            this.count++;
            return element;
        }

        public isEmpty():boolean{
            return !(this.lastCount - this.count);
        }

        public size():number{
            return this.lastCount - this.count;
        }

        public peek():T{
            return this.map[this.count];
        }

        public clear(){
            this.count = this.lastCount = 0;
            this.map = {};
        }

        public toString():string{
            if(this.isEmpty())return "";
            let str = ""
            for(let i in this.map){
                str += "-" + this.map[i];
            }
            return str;
        }



    }

    class Deque<T>{
        private count:number;
        private lastCount:number;
        private map:{[index:number]:T};
        constructor(){
            this.count = 0;
            this.lastCount = 0;
            this.map = {};
        }

        addFront(...element:Array<T>):void{
            if(!element.length) return;

            if(element.length > 1){
                for(let i = 0;i<element.length;i++){
                    this.addFront(element[i]);
                }
                return;
            }
            let item = element[0];

            if(this.count > 0){
                this.count--;
                this.map[this.count] = item;
            }else {
                for(let i = this.lastCount ;i> 0;i--){
                    this.map[i] = this.map[i -1];
                }
                this.lastCount++;
                this.map[this.count] = item;
            }
        }

        addBack(...element:Array<T>){
            if(element.length > 1){
                for(let i = 0;i<element.length;i++){
                    this.addBack(element[i]);
                }
            }else{
                this.map[this.lastCount++] = element[0];
            }
        }

        removeFront():T{
            let element = this.map[this.count];
            delete this.map[this.count];
            this.count++;
            return element;
        }

        removeBack():T{
            let element = this.map[this.lastCount - 1];
            delete this.map[this.lastCount - 1];
            this.lastCount--;
            return element;
        }

        peekFront():T{
            return this.map[this.count];
        }

        peekBack():T{
            return this.map[this.lastCount - 1];
        }

        isEmpty():boolean{
            return !(this.lastCount - this.count);
        }

        size():number{
            return this.lastCount - this.count;
        }

        claer(){
            this.lastCount = this.count = 0;
            this.map = {};
        }

        toString(){
            if(this.isEmpty()) return "";
            let str = ""
            for(let i  in this.map){
                str += "-" + this.map[i];
            }
            return str;
        }
    }
}