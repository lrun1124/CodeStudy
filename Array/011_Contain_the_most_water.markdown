
<img src="../img/011_1.png" width="500"/>
<img src="../img/011_2.png" width="500"/>

```js
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var res = 0,
        i = 0,
        j = height.length - 1;
    while(i < j) {
        let water = (j-i) * Math.min(height[i], height[j]);
        res = Math.max(res, water);
        if(height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }
    return res;
};
//console.log(maxArea([1,8,6,2,5,4,8,3,7]));
//console.log(maxArea([1,2,4,3]));
```

两个指针数组开始和结尾，每次计算面积，记录最大的，哪边是短板就从哪边开始滑动