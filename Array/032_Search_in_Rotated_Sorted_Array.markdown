<img src="../img/032.png" width="500"/>

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    debugger;
    var left = 0,
        right = nums.length-1,
        mid;
    while(left <= right) {
        mid = Math.floor(left + (right-left) / 2);
        if(nums[mid] === target) return mid;
        if(nums[mid] > nums[right]) {
            if(nums[left] <= target && nums[mid] >= target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if(nums[mid] <= target && nums[right] >= target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return  -1;
};
console.log(search([4,5,6,7,0,1,2],0));
```

继续用二分查找，目的是判断target在前半段还是后半段
<img src="../img/032_1.png" width="500"/>
观察规律，当中间的数大于最右边大的数，左边有序，否则右边有序，把target跟有序的数组的头尾比较，就能确认target是否在有序这边
