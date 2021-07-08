namespace sort{
    class bubbleSort{
        public sort(arr:number[]){
            for (let i = 0; i < arr.length-1; i++) {
                let complete = true;
                for (let j = 0; j < arr.length - i; j++) {
                    if(arr[j] > arr[j + 1]){
                        complete = false;
                        [arr[j],arr[i]] = [arr[i],arr[j]];
                    }
                }
                if(complete){
                    return ;
                }
            }
        }
    }
}