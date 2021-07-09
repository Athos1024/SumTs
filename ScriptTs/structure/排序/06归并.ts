namespace sort{
    class mergeSort{
        public sort(arr:number[]){
            let mid = Math.floor(arr.length / 2);
            let left = this.sort(arr.slice(0,mid));
            let right = this.sort(arr.slice(mid,arr.length));

            arr = this.merge(left,right);
            return arr;
        }

        private merge(letf:number[],right:number[]):number[]{
            let i = 0;
            let j = 0;
            let result = [];
            while(i < letf.length && j < right.length){
                result.push(letf[i] < right[j] ? letf[i++]: right[j++]);
            }
            return result.concat(i <letf.length ? letf.slice(i) : right.slice(j));
        }
    }
}