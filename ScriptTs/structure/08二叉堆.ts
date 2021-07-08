namespace structure{
    class MinHeap{
        protected heap:number[];
        constructor(){
            this.heap = [];
        }

        protected getLeftIndex(index:number){
            return index * 2 + 1;
        }

        protected getRightIndex(index:number){
            return index * 2 + 2;
        }

        protected getParentIndex(index:number){
            return Math.floor((index - 1) / 2);
        }

        protected swap(arr:number[],a:number,b:number){
            [arr[a],arr[b]] = [arr[b],arr[a]];
        }

        protected preTraverseNode(index:number,cb:(value:number) => void){
            if(this.heap[index] !== undefined){
                cb(this.heap[index]);
                this.preTraverseNode(this.getLeftIndex(index),cb);
                this.preTraverseNode(this.getRightIndex(index),cb);
            }
        }

        protected compare(a:number,b:number){
            return a >= b;
        }

        protected siftUp(index:number){
            let parent = this.getParentIndex(index);
            while(index > 0 && this.compare(this.heap[parent],this.heap[index])){
                this.swap(this.heap,index,parent);
                index = parent;
                parent = this.getParentIndex(index);
            }
        }

        protected shifDown(index:number){
            let left = this.getLeftIndex(index);
            let right = this.getRightIndex(index);

            if(this.compare(this.heap[index],this.heap[left]) && this.compare(this.heap[index],this.heap[right])){
                if(!this.compare(this.heap[right],this.heap[left])){
                    this.swap(this.heap,right,index);
                    this.shifDown(right);
                }else{
                    this.swap(this.heap,left,index);
                    this.shifDown(left)
                }
            }else if(this.compare(this.heap[index],this.heap[left])){
                this.swap(this.heap,left,index);
                this.shifDown(left)
            }else if(this.compare(this.heap[index],this.heap[right])){
                this.swap(this.heap,right,index);
                this.shifDown(right)
            }
        }

        public inster(value:number){
            this.heap.push(value);
            this.siftUp(this.heap.length - 1);
            return true;
        }

        public extract(){
            if(this.isEmpty()){
                return undefined
            }
            if(this.size() == 1){
                return this.heap.unshift();
            }

            const removeValue = this.heap[0];
            this.heap[0] = this.heap.pop();
            this.shifDown(0);
            return removeValue;
        }

        public isEmpty(){
            return this.size() == 0;
        }

        public size(){
            return this.heap.length;
        }
        
        preTraverse(cb:(value:number)=>void){
            this.preTraverseNode(0,cb);
        }
    }
}