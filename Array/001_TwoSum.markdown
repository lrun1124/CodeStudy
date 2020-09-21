
<img src="../img/001.png" width="500"/>

```JS
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var m = new Map();
    for(let i = 0; i < nums.length; i++){
    	if(m.has(target - nums[i])){
    		return [m.get(target - nums[i]), i];
    	}
    	else{
    		m.set(nums[i], i);
    	}
    }
};
//test
console.log(twoSum([2,7,11,15],9));
```

用map记录