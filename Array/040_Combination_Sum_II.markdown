<img src="../img/040.png" width="500"/>

```JS
var combinationSum2 = function(candidates, target) {
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
            // 大剪枝：减去 candidates[i] 小于 0，减去后面的 candidates[i + 1]、candidates[i + 2] 肯定也小于 0，因此用 break
            if(target - candidates[i] < 0) break;
            // 小剪枝：同一层相同数值的结点，从第 2 个开始，候选数更少，结果一定发生重复，因此跳过，用 continue
            if(i > begin && candidates[i] === candidates[i-1]) continue;
            path.push(candidates[i]);
            //打印出所有路径序列
            //console.log(path);
            // 因为元素不可以重复使用，这里递归传递下去的是 i + 1 而不是 i
            dfs(candidates, i + 1, target - candidates[i], path);
            path.pop();
        }
    }
    dfs(candidates, 0, target, [], res);
    return res;
}
console.log(combinationSum([10,1,2,7,6,1,5],8));

```

