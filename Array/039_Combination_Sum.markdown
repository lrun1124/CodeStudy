<img src="../img/039.png" width="500"/>

```JS
var combinationSum = function(candidates, target) {
    var res = [];
    /**
     * @param candidates 候选数组
     * @param begin      搜索起点
     * @param target     每减去一个元素，目标值变小
     * @param path       从根结点到叶子结点的路径，是一个栈
     */
    const dfs = (candidates, begin, target, path) => {
        //终止条件
        if(target < 0) return;
        if(target === 0) {
            res.push(path.slice());
            return;
        }
        for(let i = begin; i < candidates.length; i++) {
            path.push(candidates[i]);
            //打印出所有路径序列
            console.log(path);
            dfs(candidates, i, target - candidates[i], path);
            path.pop();
        }
    }
    dfs(candidates, 0, target, [], res);
    return res;
}
console.log(combinationSum([2,3,6,7],7));
```

递归思想，先想好终止条件，往往来自题目，回溯
<img src="../img/039_1.png" width="500"/>

以上方法是列出所有的回溯结果，考虑到如果 target 减去一个数得到负数，那么减去一个更大的树依然是负数，同样搜索不到结果。基于这个想法，我们可以对输入数组进行排序，添加相关逻辑达到进一步剪枝的目的

```JS
var combinationSum = function(candidates, target) {
    var res = [];
    candidates.sort((a, b) => {return a - b});
    /**
     * @param candidates 候选数组
     * @param begin      搜索起点
     * @param target     每减去一个元素，目标值变小
     * @param path       从根结点到叶子结点的路径，是一个栈
     */
    const dfs = (candidates, begin, target, path) => {
        //终止条件
        if(target < 0) return;
        if(target === 0) {
            res.push(path.slice());
            return;
        }
        for(let i = begin; i < candidates.length; i++) {
            //剪枝
            if(target - candidates[i] < 0) break;
            path.push(candidates[i]);
            //打印出所有路径序列
            //console.log(path);
            dfs(candidates, i, target - candidates[i], path);
            path.pop();
        }
    }
    dfs(candidates, 0, target, [], res);
    return res;
}
console.log(combinationSum([10,1,2,7,6,1,5],8));
```