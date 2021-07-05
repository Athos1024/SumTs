namespace structure{

    class mySet<T>{
        private items:{[key:string]:T};
        constructor(){
            this.items = {};
        }

        public add(element:T){
            if(this.has(element)) return false;
            this.items[element + ""] = element;
            return true;
        }

        public delete(element:T){
            if(!this.has(element))return false;
            delete this.items[element + ""];
            return true;
        }

        public clear(){
            this.items = {};
        }

        public size():number{
            return Object.keys(this.items).length
        }

        public value(){
            let arr = [];
            for(let key in this.items){
                arr.push(this.items[key]);
            }
            return arr;
        }

        public getUniot(otherSet:mySet<T>){
            const union = new mySet<T>();
            this.value().forEach(el => union.add(el));
            otherSet.value().forEach(el=>union.add(el));
            return union;
        }

        public getIntersection(otherSet:mySet<T>){
            const intersection = new mySet();
            let smallerSet = this.value();
            let biggerSet = this.value();
            if(smallerSet.length > biggerSet.length){
                [smallerSet,biggerSet] = [biggerSet,smallerSet];
            }

            smallerSet.forEach(el=>{
                for(let i = 0;i<biggerSet.length;i++){
                    let element = biggerSet[i];
                    if(el == element){
                        intersection.add(el);
                        break;
                    }
                }
            })
            return intersection;
        }

        public getDifference(otherSet:mySet<T>){
            const difference = new mySet<T>();
            this.value().forEach(el =>{
                if(!otherSet.has(el)){
                    difference.add(el);
                }
            })
            return difference;
        }
        
        public has(element:T):boolean{
            return Object.prototype.hasOwnProperty.call(this.items,element +"");
        }
    }
}