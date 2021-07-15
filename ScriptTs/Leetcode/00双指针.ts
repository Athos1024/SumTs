namespace Leetcode {
    //在有序数组中找出两个数，使它们的和为 target。
    class TwoSum {
        public run() {
            let input: number[] = [2, 7, 11, 15];
            let target = 13;

            let i = 0, j = input.length - 1;
            while (i < j) {
                let sum = input[i] + input[j]
                if (target == sum) {
                    return [i, j];
                } else if (target > sum) {
                    i++;
                } else {
                    j--
                }
            }
        }
    }

    // let t = new TwoSum();
    // console.log(t.run());


    //两数平方和
    class SumOfSquare {
        public run() {
            let input = 5;
            let i = 0, j = Math.floor(Math.sqrt(input));
            while (i <= j) {
                let target = i * i + j * j;
                if (target == input) {
                    return true;
                } else if (target > input) {
                    j--;
                } else {
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

        run(): boolean {
            let str = "abcba";
            for (let i = 0, j = str.length - 1; i < j; i++, j--) {
                if(str[i] != str[j]){
                    return this.isPalindrome(str,i,j - 1) || this.isPalindrome(str,i + 1,j);
                }
            }
            return true;
        }

        private isPalindrome(s:string,i:number,j:number){
            while(i < j){
                if(s[i++] != s[j--]){
                    return false;
                }
            }
            return true;
        }
    }

    // let v = new validPalindrome();
    // console.log('run',v.run());
     

    //归并两个有序数组
    class merge{
        run(){
            let num1 = [1,2,3,0,0,0],   m = 3,
                num2 = [2,5,6],         n =3;
            let index1 = m - 1,index2 = n -1;
            let indexMerge = m + n - 1;
            while(index2 >= 0){
                if(index1 < 0){
                    num1[indexMerge--] = num2[index2--];
                }else if(index2 < 0){
                    num1[indexMerge--] = num1[index1--];
                }else if(num1[index1] > num2[index2]){
                    num1[indexMerge--] = num1[index1--];
                }else{
                    num1[indexMerge--] = num2[index2--];
                }
            }
        }
    }

    class ListNode {
        val: number
        next: ListNode | null
        constructor(val?: number, next?: ListNode | null) {
            this.val = (val===undefined ? 0 : val)
            this.next = (next===undefined ? null : next)
        }
    }


    // 判断链表是否存在环 
    class linked{
        run(head:ListNode){
            if(head == null){
                return false;
            }
            
            let l1:ListNode = head,l2 = head.next;
            while(l1 != null && l2 != null && l2.next != null){
                if(l1 == l2){
                    return true;
                }

                l1 = l1.next;
                l2 = l2.next.next;
            }
            return true;
        }
    }

    class logestWord{
        run(){
            let s = 'abpcplea',d=['ale','apple','monkey','plea'];
            let word = "";
            for(let i of d){
                let l1 = word.length,l2 = i.length;
                if(l1 > l2 || (l1 == l2 && word.localeCompare(i) < 0)){
                    continue;
                }

                if(this.isSubstr(s,i)){
                    word = i;
                }
            }
            return word;
        }

        private isSubstr(s:string,target:string){
            let i =0,j =0;
            while(i < s.length && j < target.length){
                if(s.charAt(i) == target.charAt(j)){
                    j++
                }
                i++;
            }
            return j == target.length;
        }
    }
 
}