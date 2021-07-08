namespace sort{
    class insertionSort{
        public sort(arr:number[]){
            for (let i = 1; i < arr.length; i++) {
                let j = i;
                let tmp = arr[i];
                while(j > 0 && arr[j - 1] > tmp){
                    arr[j] = arr[j -1]
                    j--;
                }       

                arr[j] = tmp;
            }
        }
    }
}