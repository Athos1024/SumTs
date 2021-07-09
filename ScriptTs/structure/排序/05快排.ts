namespace sort{
    class quickSort{

        public sort(arr:number[]){
            this.quick(arr,0,arr.length - 1);
        }

        private quick(arr:number[],left:number,right:number){
            if(arr.length < 0)return;

            let index = this.partition(arr,left,right);
            if(index - 1 >left){
                this.partition(arr,left,index -1);
            }else if(index < right){
                this.partition(arr,index ,right);
            }
        }
     
        private partition(arr:number[],left:number,right:number):number{
            let mid =arr[Math.floor((left+right)/2)];
            let i = left;
            let j = right;
            while(i < j){
                while(arr[i] < mid){
                    i++;
                }
                while(arr[j] > mid){
                    j--;
                }

                if(i < j){
                    [arr[i],arr[j]] =[arr[j],arr[i]];
                    i++;
                    j--;
                }
            }
            return i;
        }

    }
}