# 数组拆分 I
给定长度为 2n 的整数数组 nums ，你的任务是将这些数分成 n 对, 例如 (a1, b1), (a2, b2), ..., (an, bn) ，使得从 1 到 n 的 min(ai, bi) 总和最大。

返回该 最大总和 。

# 解答
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    const n = nums.length / 2;
    const arr = nums.sort((a,b) => a - b);
    let result = 0;
    for (let i = 0; i < n; i++) {
        result += arr[2 * i];
    }
    return result;
};
```

# 参考
(数组拆分 I)[https://leetcode-cn.com/problems/array-partition-i]
