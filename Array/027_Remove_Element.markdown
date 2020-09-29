<img src="../img/027.png" width="500"/>

```js
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for(let i = 0; i<nums.length; i++) {
        if(nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};
```

```js
var removeElement = function(nums, val) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != val) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
}
```

1. 用splice
2. 两个指针i和j, j一直+1，i遇到非target+1并赋值