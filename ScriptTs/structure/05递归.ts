namespace structure{
    function factorialIterative(n:number):number{
        if(n === 1 || n === 0){
            //出口
            return 1;
        }
        return n * factorialIterative(n -1);//入口
    }

    function getFibonaci(n:number):number{
        if(n < 1) return 0;
        if(n < 2) return 1;
        return getFibonaci(n - 1) + getFibonaci(n -2);
    }

    function fibonaciMeno(n:number){
        let mone = [1,1];
        const fibonaci:Function = (n:number)=>{
            if(mone[n]){
                return mone[n];
            }
            return (mone[n] = fibonaci(n - 1) + fibonaci(n - 2));
        }
        return fibonaci(n);
    }
}