namespace structure{
    let arr = [2,3,1,3,1];
    function horner(arr:number[],x) {
        let res = 0;
        for(let i = 0;i<arr.length;i++){
            res += x * res + res[i];
        }
        return res;
    }

    function hashFunc(str:string,size) {
        let hashCode = 0;
        for(let i = 0;i<str.length;i++){
            hashCode = 37 * hashCode + str.charCodeAt(i);
        }
        let res = hashCode % 37;
        return res;
    }
    
    class HashTable{
        private count:number;
        private storage:Array<any>;
        private limit:number;

        constructor(limit){
            this.limit = limit;
            this.count = 0;
            this.storage = [];
        }

        public hashFunction(str:string,size:number){
            let hashCode = 0;
            for(let i = 0;i<str.length;i++){
                hashCode += 37 * hashCode + str.charCodeAt(i);
            }

            let res = hashCode % size;
            return res;
        }
        
        put(key:string,value:any){
            let index = this.hashFunction(key,this.limit);

            let bucket:Array<any> = this.storage[index];
            if(!bucket){
                this.storage[index] = [];
                bucket = this.storage[index];
            }

            for(let i = 0;i<bucket.length;i++){
                let tuple = bucket[i];
                if(tuple[0] === key){
                    return tuple[1] = value;
                }
            }

            bucket.push([key,value]);
            this.count+=1;
            if(this.count > this.limit * 0.75){
                this.resize(this.getPrime(this.limit * 2))
            }
        }

        get(key = ""){
            let index  = this.hashFunction(key,this.limit);
            let bucket:Array<any> = this.storage[index];
            if(!bucket) return null;
            for(let i = 0;i<bucket.length;i++){
                let tuple = bucket[i];
                if(tuple[0] === key){
                    return tuple[1];
                }
            }
            return null;
        }

        remove(key){
            let index = this.hashFunction(key,this.limit);
            let bucket:Array<any> = this.storage[index];
            if(!bucket) return false;
            for(let i = 0;i<bucket.length;i++){
                let tuple = bucket[i];
                if(tuple[0] == key){
                    this.count--;
                    delete bucket[i];
                }
                if(!bucket.entries().next().value[1]) delete this.storage[index];
                if(this.limit > 7 && this.count < this.limit * 0.25){
                    this.resize(this.isPrime(Math.floor(this.limit / 2)));
                }
                return true;
            }
            return false;
        }

        public size(){
            return this.count;
        }

        public isEmpty(){
            return !(this.count > 0);
        }

        public resize(size){
            let oldStorage =this.storage;
            this.storage = [];
            this.count = 0;
            this.limit = size;
            for(let i = 0;i<oldStorage.length;i++){
                let bucket = oldStorage[i];
                if(!bucket) continue;
                for(let j = 0;j<bucket.length;j++){
                    let tuple = bucket[j];
                    this.put(tuple[0],tuple[1]);
                }
            }
        }

        public getPrime(num){
            while(!this.isPrime(num)){
                num++;
            }
            return num;
        }

        public isPrime(num){
            if(num <= 0) return false;
            let newNum = ~~Math.sqrt(num);
            for(let i = 2;i<newNum;i++){
                if(num% i == 0)  return false;
            }
            return true;
        }
    }

    function isPrimeNum01(num){
        if(num <= 0)return false;
        for(let i = 2;i<num;i++){
            if(num % i == 0)return false;
        }
        return true;
    }

    function isPrimeNum02(num){
        if(num <= 0) return false;
        let numNum = ~~Math.sqrt(num);
        for(let i = 0;i< numNum;i++){
            if(num % i == 0) return false;
        }
        return true;
    }
}