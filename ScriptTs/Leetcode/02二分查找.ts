namespace Leetcode {
    class tow {
        run() {
            let nums = [1, 2, 3, 4, 5, 6];
            let key = 3;
            let l = 0;
            let h = nums.length - 1;
            while (l <= h) {
                let m: number = l + (h - l) / 2;
                if (nums[m] == key) {
                    return m;
                } else if (nums[m] > key) {
                    h = m - 1;
                } else {
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
                } else {
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
                } else if (mid > sqrt) {
                    h = mid - 1;
                } else {
                    l = mid + 1;
                }

            }
            return h;
        }
    }

    class Find {
        run() {
            let nums:number[] =[];

            // 思路：二分, 
            // 1.保证这个数的+1/-1都不相同
            // 2.两次的话，当前的 [i]%2 === 0 && [i+1]%2 == 1 且 [i] === [i+1]
            let left = 0
            let right = nums.length
            let L
            let R
            while (left <= right) {
                let mid = left + right >> 1
                if (nums[mid] === nums[mid + 1]) {
                    L = mid
                    R = mid + 1
                } else if (nums[mid] === nums[mid - 1]) {
                    L = mid - 1
                    R = mid
                } else {
                    return nums[mid]
                }
                if (L % 2 === 0 && R % 2 == 1) {
                    // 正常 向right
                    left = mid + 1
                } else {
                    right = mid - 1
                }
            }

            let f = new Find();
            // console.log('f.run();', f.run());
        }
    }
}