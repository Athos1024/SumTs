var Test;
(function (Test) {
    function minCoinChange(coins, amount) {
        let f = [];
        let temp = [];
        f[0] = 0;
        for (let i = 1; i <= amount; i++) {
            coins.forEach((coin) => {
                if (i - coin < 0) {
                    temp.push(Number.MAX_SAFE_INTEGER);
                }
                else {
                    temp.push(f[i - coin] + 1);
                }
            });
            let min = Math.min(...temp);
            f[i] = min;
            temp = [];
        }
        return f[amount] == Number.MAX_SAFE_INTEGER ? -1 : f[amount];
    }
    // console.log(minCoinChange([3, 8, 10, 25], 6));
    // 用字符串返回一个键盘图形
    // // 最少硬币找零 - 贪心算法
    // function MinCoinChange1(coins) {
    //   return function (amount) {
    //     let total = 0, change = []
    //     for (let i = coins.length; i >= 0; i--) {
    //       let coin = coins[i]
    //       while (total + coin <= amount) {
    //         change.push(coin)
    //         total += coin
    //       }
    //     }
    //     return change
    //   }
    // }
    // let f = MinCoinChange1([2,3,7,10]);
    // console.log(f(8));
    let arr = [3, 5, 7, 10];
    let num = 7;
    function min(coins, money) {
        for (let i = arr.length - 1; i >= 0; i--) {
            const element = arr[i];
            if (element > money) {
                //面值比需要找的零钱多
                continue;
            }
            let j = i;
            let tmp = money;
            let result = [];
            while (j >= 0) {
                if (tmp - arr[j] >= 0) {
                    tmp -= arr[j];
                    result.push(arr[j]);
                    if (tmp == 0) {
                        //满足条件
                        return result;
                    }
                }
                else {
                    j--;
                }
            }
        }
        return -1;
    }
    console.log(min(arr, num));
})(Test || (Test = {}));
//# sourceMappingURL=sort.js.map