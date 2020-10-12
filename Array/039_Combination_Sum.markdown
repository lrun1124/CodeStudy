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