namespace Leetcode {
    // 分配饼干
    class AssignCookies {
        run() {
            let grid = [1, 3];
            let size = [1, 2, 3];
            if (grid == null || size == null) return 0;
            grid.sort((a, b) => { return a - b });
            size.sort((a, b) => { return a - b });
            let gi = 0, si = 0;
            while (gi < grid.length && si < size.length) {
                if (grid[gi] <= size[si]) {
                    gi++;
                }
                si++;
            }
            return gi;
        }
    }

    //不重叠的区间个数
    class NonOverlapping {
        run() {
            let intervals = [[1, 2], [1, 2], [1, 2]];
            if (intervals.length == 0) {
                return 0;
            }
            intervals.sort((a, b) => a[1] - b[1]);
            let count = 0;
            for (let i = 0; i < intervals.length - 1; i++) {
                const [a, b] = intervals[i];
                const [c, d] = intervals[i + 1];
                if (b > c) {
                    count++;
                    intervals.splice(i + 1, 1);
                    i--;
                }
            }
            return count;
        }
    }

    //投飞镖刺破气球
    class Mininum {
        run() {
            let points: number[][] = [[10, 16], [2, 8], [1, 6], [7, 12]];
            if (!points.length) return 0;
            points.sort((a, b) => a[1] - b[1]);
            let count = 1;
            let right = points[0][1];
            for (let i = 1; i < points.length; i++) {
                if (right < points[i][0]) {
                    count++;
                    right = points[i][1]
                }
            }
            return count;
        }
    }

    class reconstruct {
        run() {
            let people: number[][] = [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]];
            const len = people.length;
            people.sort((a, b) => {
                if (a[0] === b[0]) {
                    return a[1] - b[1];
                } else {
                    return b[0] - b[0];
                }
            })

            let res: typeof people = [];


        }
    }

    function reconstructQueue(people: number[][]): number[][] {
        const len = people.length;

        // 按照身高降序
        // 升高一样，按位置升序
        people.sort((a, b) => {
            if (a[0] === b[0]) {
                return a[1] - b[1];
            } else {
                return b[0] - a[0];
            }
        });

        let res: typeof people = [];
        for (const item of people) {
            // 对于item[1]与length的比较
            // 1. item[1] > length，说明排在这之后，直接添加末尾
            // 2. item[1] = length，如上，说明刚好在这个位置
            // item[1] 的排序是升序排序，能保证其相同 itme[0] 的顺序
            if (res.length <= item[1]) {
                res.push(item)
            } else {

                // 3. item[1] < length，比如 res=[[7,0]], item=[5,0],此时插入到 item[1] 的位置
                // 即使后面存在 item[1] 与前面相等，直接插入其前面就行了，
                // 因为整个序列是从大到小排序，此时的 item[0] 是小于 res 中所有所有的值的，插入后符合结果
                // 所以整个序列要从大到小排序。
                res.splice(item[1], 0, item);
            }
        }

        return res;
    };

    function swap(arr: any[], i: number, j: number) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    //买卖股票的最大收益
    class best {
        run() {
            let prices = [7, 1, 5, 3, 6, 4];
            let n = prices.length;
            if(n == 0) return 0;
            let soFarmin = prices[0];
            let max = 0;
            for (let i = 0; i < prices.length; i++) {
                if(soFarmin > prices[i]){
                    soFarmin = prices[i]
                }else{
                    max = Math.max(max,prices[i] - soFarmin);
                }                
            }
            return max;
        }

        run2(){
            let prices = [7, 1, 5, 3, 6, 4];
            let profit = 0;
            for(let i = 1;i<prices.length;i++){
                if(prices[i] > prices[i -1]){
                    profit += prices[i] - prices[i - 1];
                }
            }
            return profit;
        }
    }

    //判断是否为子序列
    class Subsequence{
        run(){
            let s = "abc";
            let t = "ahbgdc";
            let index = -1;
            for (let i = 0; i < s.length; i++) {
                const element = s[i];
                index = t.indexOf(element,i + 1);
                if(index == -1){
                    return false;
                }
            }
            return true;
        }
    }

    //修改一个数成为非递减数组
    class decreasing{
        run(){
            let nums = [5,5,6,6];
            let cnt = 0;
            for (let i = 1; i < nums.length && cnt < 2; i++) {
                if(nums[i] >= nums[i - 1]){
                    continue;
                }
                cnt++;
                if(i - 2 >= 0 && nums[i - 2]>nums[i]){
                    nums[i] = nums[i -1];
                }else{
                    nums[i - 1] = nums[i];
                }
            }
            return cnt <= 1;
        }
    }

     class Maximum{
        run(){
            let nums =  [-2,1,-3,4,-1,2,1,-5,4];
            let prevMaxSum = 0
            let [maxSum] = nums
          
            nums.forEach(num => {
              prevMaxSum = Math.max(prevMaxSum + num, num)
              maxSum = Math.max(prevMaxSum, maxSum)
            })
          
            return maxSum
        }
    }

    let m = new Maximum();
    // console.log('m.run',m.run());
}
