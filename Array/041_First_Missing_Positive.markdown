<img src="../img/041.png" width="500"/>

```js
/**
 * @param {number[]} nums
 * @return {number}
 */

var firstMissingPositive = function(nums) {
    debugger;
    for(let i=0; i<nums.length; i++) {
        //位置不对就交换，用while是因为交换后，i位置变成交换来的数，这个数也要找到自己的位置
        //所以while最多执行两次，复杂度不会是O(n)不会是O(n2)
        while(nums[i]>0 && nums[i]<=nums.length && nums[i] !== nums[nums[i]-1]) {
            let temp = nums[nums[i]-1];
            nums[nums[i]-1] = nums[i];
            nums[i] = temp;
        }
    }
    //第一个位置不对的数后面就是结果
    for(let i =0; i<nums.length; i++) {
        if(nums[i] !== i+1) return i+1;
    }
    return nums.length + 1;
};
console.log(firstMissingPositive([3,4,-1,1]))

执行顺序
[3,4,-1,1]
[-1,4,3,1]
[-1,1,3,4]
[1,-1,3,4]

```

原地hash，主要思想是让nums[i]都坐在i-1的位置上，第一个位置不对的数后面的位置，就是结果


