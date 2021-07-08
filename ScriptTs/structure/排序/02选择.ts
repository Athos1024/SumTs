namespace sort{
    class SelectionSort{
        sort(arr:number[]){
            for (let i = 0; i < arr.length - 1; i++) {
                let cur = i;
                for (let j = i + 1; j < arr.length; j++) {
                    if(arr[cur] > arr[j]){
                        cur = i;
                    }
                }
                if(cur != i){
                    [arr[cur],arr[i]] = [arr[i],arr[cur]]
                }
            }
        }
    }
}