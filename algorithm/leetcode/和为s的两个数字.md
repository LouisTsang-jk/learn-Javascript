# 和为s的两个数字
```
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let pre_point = 0,
        next_point = nums.length - 1;
    while (pre_point !== next_point) {
        let result = nums[pre_point] + nums[next_point];
        if (result === target) {
            return [nums[pre_point], nums[next_point]];
        } else if (result < target) {
            pre_point++;
        } else if (result > target) {
            next_point--;
        }
    }
    return null;
};
```
这里用到双指针法