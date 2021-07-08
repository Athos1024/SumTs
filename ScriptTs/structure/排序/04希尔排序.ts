namespace sort{
    class shellSort{
        public sort(arr:number[]){
            let gap = Math.floor(arr.length / 2);
            while(gap >= 1){
                for (let i = gap; i < arr.length; i++) {
                    let j = i;
                    let tmp = arr[i];
                    while(j > gap - 1 && arr[j - gap] > tmp){
                        arr[j] = arr[j - gap];
                        j -= gap;
                    }
                    arr[j] = tmp;
                }
                
            }
            gap = Math.floor(gap / 2);
        }
    }

    

}
