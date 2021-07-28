var Leetcode;
(function (Leetcode) {
    //在有序数组中找出两个数，使它们的和为 target。
    class TwoSum {
        run() {
            let input = [2, 7, 11, 15];
            let target = 13;
            let i = 0, j = input.length - 1;
            while (i < j) {
                let sum = input[i] + input[j];
                if (target == sum) {
                    return [i, j];
                }
                else if (target > sum) {
                    i++;
                }
                else {
                    j--;
                }
            }
        }
    }
    // let t = new TwoSum();
    // console.log(t.run());
    //两数平方和
    class SumOfSquare {
        run() {
            let input = 5;
            let i = 0, j = Math.floor(Math.sqrt(input));
            while (i <= j) {
                let target = i * i + j * j;
                if (target == input) {
                    return true;
                }
                else if (target > input) {
                    j--;
                }
                else {
                    i++;
                }
            }
            return false;
        }
    }
    // let s = new SumOfSquare();
    // console.log(s.run());
    //回文字符串
    class validPalindrome {
        run() {
            let str = "abcba";
            for (let i = 0, j = str.length - 1; i < j; i++, j--) {
                if (str[i] != str[j]) {
                    return this.isPalindrome(str, i, j - 1) || this.isPalindrome(str, i + 1, j);
                }
            }
            return true;
        }
        isPalindrome(s, i, j) {
            while (i < j) {
                if (s[i++] != s[j--]) {
                    return false;
                }
            }
            return true;
        }
    }
    // let v = new validPalindrome();
    // console.log('run',v.run());
    //归并两个有序数组
    class merge {
        run() {
            let num1 = [1, 2, 3, 0, 0, 0], m = 3, num2 = [2, 5, 6], n = 3;
            let index1 = m - 1, index2 = n - 1;
            let indexMerge = m + n - 1;
            while (index2 >= 0) {
                if (index1 < 0) {
                    num1[indexMerge--] = num2[index2--];
                }
                else if (index2 < 0) {
                    num1[indexMerge--] = num1[index1--];
                }
                else if (num1[index1] > num2[index2]) {
                    num1[indexMerge--] = num1[index1--];
                }
                else {
                    num1[indexMerge--] = num2[index2--];
                }
            }
        }
    }
    class ListNode {
        constructor(val, next) {
            this.val = (val === undefined ? 0 : val);
            this.next = (next === undefined ? null : next);
        }
    }
    // 判断链表是否存在环 
    class linked {
        run(head) {
            if (head == null) {
                return false;
            }
            let l1 = head, l2 = head.next;
            while (l1 != null && l2 != null && l2.next != null) {
                if (l1 == l2) {
                    return true;
                }
                l1 = l1.next;
                l2 = l2.next.next;
            }
            return true;
        }
    }
    class logestWord {
        run() {
            let s = 'abpcplea', d = ['ale', 'apple', 'monkey', 'plea'];
            let word = "";
            for (let i of d) {
                let l1 = word.length, l2 = i.length;
                if (l1 > l2 || (l1 == l2 && word.localeCompare(i) < 0)) {
                    continue;
                }
                if (this.isSubstr(s, i)) {
                    word = i;
                }
            }
            return word;
        }
        isSubstr(s, target) {
            let i = 0, j = 0;
            while (i < s.length && j < target.length) {
                if (s.charAt(i) == target.charAt(j)) {
                    j++;
                }
                i++;
            }
            return j == target.length;
        }
    }
})(Leetcode || (Leetcode = {}));
var Leetcode;
(function (Leetcode) {
    // 分配饼干
    class AssignCookies {
        run() {
            let grid = [1, 3];
            let size = [1, 2, 3];
            if (grid == null || size == null)
                return 0;
            grid.sort((a, b) => { return a - b; });
            size.sort((a, b) => { return a - b; });
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
            let points = [[10, 16], [2, 8], [1, 6], [7, 12]];
            if (!points.length)
                return 0;
            points.sort((a, b) => a[1] - b[1]);
            let count = 1;
            let right = points[0][1];
            for (let i = 1; i < points.length; i++) {
                if (right < points[i][0]) {
                    count++;
                    right = points[i][1];
                }
            }
            return count;
        }
    }
    class reconstruct {
        run() {
            let people = [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]];
            const len = people.length;
            people.sort((a, b) => {
                if (a[0] === b[0]) {
                    return a[1] - b[1];
                }
                else {
                    return b[0] - b[0];
                }
            });
            let res = [];
        }
    }
    function reconstructQueue(people) {
        const len = people.length;
        // 按照身高降序
        // 升高一样，按位置升序
        people.sort((a, b) => {
            if (a[0] === b[0]) {
                return a[1] - b[1];
            }
            else {
                return b[0] - a[0];
            }
        });
        let res = [];
        for (const item of people) {
            // 对于item[1]与length的比较
            // 1. item[1] > length，说明排在这之后，直接添加末尾
            // 2. item[1] = length，如上，说明刚好在这个位置
            // item[1] 的排序是升序排序，能保证其相同 itme[0] 的顺序
            if (res.length <= item[1]) {
                res.push(item);
            }
            else {
                // 3. item[1] < length，比如 res=[[7,0]], item=[5,0],此时插入到 item[1] 的位置
                // 即使后面存在 item[1] 与前面相等，直接插入其前面就行了，
                // 因为整个序列是从大到小排序，此时的 item[0] 是小于 res 中所有所有的值的，插入后符合结果
                // 所以整个序列要从大到小排序。
                res.splice(item[1], 0, item);
            }
        }
        return res;
    }
    ;
    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    //买卖股票的最大收益
    class best {
        run() {
            let prices = [7, 1, 5, 3, 6, 4];
            let n = prices.length;
            if (n == 0)
                return 0;
            let soFarmin = prices[0];
            let max = 0;
            for (let i = 0; i < prices.length; i++) {
                if (soFarmin > prices[i]) {
                    soFarmin = prices[i];
                }
                else {
                    max = Math.max(max, prices[i] - soFarmin);
                }
            }
            return max;
        }
        run2() {
            let prices = [7, 1, 5, 3, 6, 4];
            let profit = 0;
            for (let i = 1; i < prices.length; i++) {
                if (prices[i] > prices[i - 1]) {
                    profit += prices[i] - prices[i - 1];
                }
            }
            return profit;
        }
    }
    //判断是否为子序列
    class Subsequence {
        run() {
            let s = "abc";
            let t = "ahbgdc";
            let index = -1;
            for (let i = 0; i < s.length; i++) {
                const element = s[i];
                index = t.indexOf(element, i + 1);
                if (index == -1) {
                    return false;
                }
            }
            return true;
        }
    }
    //修改一个数成为非递减数组
    class decreasing {
        run() {
            let nums = [5, 5, 6, 6];
            let cnt = 0;
            for (let i = 1; i < nums.length && cnt < 2; i++) {
                if (nums[i] >= nums[i - 1]) {
                    continue;
                }
                cnt++;
                if (i - 2 >= 0 && nums[i - 2] > nums[i]) {
                    nums[i] = nums[i - 1];
                }
                else {
                    nums[i - 1] = nums[i];
                }
            }
            return cnt <= 1;
        }
    }
    class Maximum {
        run() {
            let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
            let prevMaxSum = 0;
            let [maxSum] = nums;
            nums.forEach(num => {
                prevMaxSum = Math.max(prevMaxSum + num, num);
                maxSum = Math.max(prevMaxSum, maxSum);
            });
            return maxSum;
        }
    }
    let m = new Maximum();
    console.log('m.run', m.run());
})(Leetcode || (Leetcode = {}));
var Leetcode;
(function (Leetcode) {
    class tow {
        run() {
            let nums = [1, 2, 3, 4, 5, 6];
            let key = 3;
            let l = 0;
            let h = nums.length - 1;
            while (l <= h) {
                let m = l + (h - l) / 2;
                if (nums[m] == key) {
                    return m;
                }
                else if (nums[m] > key) {
                    h = m - 1;
                }
                else {
                    l = m + 1;
                }
            }
        }
        run2() {
            let nums = [1, 2, 3, 4, 5, 6];
            let key = 3;
            let l = 0, h = nums.length;
            while (l < h) {
                let m = Math.floor(l + (h - l) / 2);
                if (nums[m] >= key) {
                    h = m;
                }
                else {
                    l = m + 1;
                }
            }
        }
    }
    class sqrt {
        run() {
            let x = 10;
            if (x <= 1) {
                return x;
            }
            let l = 1, h = x;
            while (l <= h) {
                let mid = Math.floor(l + (h - l) / 2);
                let sqrt = x / mid;
                if (sqrt == mid) {
                    return mid;
                }
                else if (mid > sqrt) {
                    h = mid - 1;
                }
                else {
                    l = mid + 1;
                }
            }
            return h;
        }
    }
    class Find {
        run() {
            let nums = [];
            // 思路：二分, 
            // 1.保证这个数的+1/-1都不相同
            // 2.两次的话，当前的 [i]%2 === 0 && [i+1]%2 == 1 且 [i] === [i+1]
            let left = 0;
            let right = nums.length;
            let L;
            let R;
            while (left <= right) {
                let mid = left + right >> 1;
                if (nums[mid] === nums[mid + 1]) {
                    L = mid;
                    R = mid + 1;
                }
                else if (nums[mid] === nums[mid - 1]) {
                    L = mid - 1;
                    R = mid;
                }
                else {
                    return nums[mid];
                }
                if (L % 2 === 0 && R % 2 == 1) {
                    // 正常 向right
                    left = mid + 1;
                }
                else {
                    right = mid - 1;
                }
            }
            let f = new Find();
            console.log('f.run();', f.run());
        }
    }
})(Leetcode || (Leetcode = {}));

//# sourceMappingURL=Leetcode.js.map
