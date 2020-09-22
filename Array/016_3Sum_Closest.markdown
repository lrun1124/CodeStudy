<img src="../img/016.png" width="500"/>

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort(function(a,b){return a - b;});
    var gap = Number.MAX_VALUE,
        res;

    for(let i=0; i<nums.length; i++) {
        if(i!=0 && nums[i] === nums[i-1]) continue;
        let mid = i+1,
            end = nums.length - 1,
            sum;
        while(mid < end) {
            sum = nums[i] + nums[mid] + nums[end];
            if(Math.abs(sum - target) < gap){
                gap = Math.abs(sum - target);
                res = sum;
            }
            if(sum > target) {
                do {end--} while(mid<end && nums[end] === nums[end+1]);
            } else if (sum < target) {
                do {mid++} while(mid<end && nums[mid] === nums[mid-1]);
            } else {
                return sum;
            }
        }
    }
    return res;
};

console.log(threeSumClosest([1,2,5,10,11],12))
```

思路和sum3类似，先排序，外层遍历数组，内层开头结尾两个指针，去除前后相同值

