<img src="../img/032.png" width="500"/>

```JS
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    debugger;
    var left = 0,
        right = nums.length - 1,
        mid;
    while(left <= right) {
        mid = Math.floor(left + (right - left)/2);
        if(nums[mid] === target) return mid;
        if(nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return  right + 1;
};

console.log(searchInsert([1,3,5,6],2))
```

二分查找，最终right所在的位置一定是target前的位置，注意二分如果mid-1，那么left<=right, =不能丢