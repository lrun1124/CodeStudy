<img src="../img/018.png" width="500"/>

```js
/**
 * @param {number[]} nums
 * @return {number}
 */

//无序情况，需要改变nums的ref的情况
var removeDuplicates = function(nums) {
    var res = 0,
        hash = {};
    for(let i=0; i<nums.length; i++) {
        if(hash[nums[i]]) {
            //splice后需要指针后移，不然会跳过一个值
            nums.splice(i,1);
            i--;
        } else {
            hash[nums[i]] = true;
        }
    }
    return nums.length;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
```

```js
/**
 * @param {number[]} nums
 * @return {number}
 */

//有序情况，需要改变nums的ref的情况
var removeDuplicates = function(nums) {
    if(nums.length === 0) return 0;
    var current = nums[0];
    for(let i=1; i<nums.length; i++) {
        //splice后需要指针后移，不然会跳过一个值
        if(nums[i] === current) {
            nums.splice(i,1);
            i--;
        } else {
            current = nums[i];
        }
    }
    return nums.length;
}
```

一个current记录现在的值，指针滑动，遇到相同的splice，否则更新current

