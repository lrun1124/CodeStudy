<img src="../img/031.png" width="500"/>

```JS
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    debugger;
    if(nums.length === 1) return nums;
    for(let i=nums.length-1; i>0; i--) {
        if(nums[i]>nums[i-1]) {
            for(let j=nums.length-1; j>i-1; j--) {
                if(nums[j]>nums[i-1]){
                    swap(nums, i-1, j);
                    var tempArr = nums.slice(i);
                    tempArr.sort(function(a,b){return a-b;})
                    nums.splice(i, tempArr.length, ...tempArr);
                    return nums;
                }
            }
        }
    }
    return nums.reverse();
};
var swap = function(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}
console.log(nextPermutation([1,2,3]))
```

Permutation是字典字，next Permutation就是按字典序排列的下一个排列

思路：

主要思想是找到两个值，一个是从后第一个比前一个大的值，第二个第一个是比这个值大的，后面升序排列即可

1. 先从后往前，找后一个比前一个大的nums[i-1]
1. 再从后往前，找第一个比nums[i-1]大的nums[j]
1. 交换nums[i-1] 和 nums[j]
1. 将nums[i-1]之后的数组排列
1. 如没有进入前四步，说明输入已经是最大的字典序，直接输出倒序