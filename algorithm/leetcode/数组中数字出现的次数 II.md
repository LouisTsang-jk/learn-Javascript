# 数组中数字出现的次数 II
# Code
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let result = 0
    for (let i = 0; i < 32; i++) {
        let counter = 0;
        for (let j = 0; j < nums.length; j++) {
            if ((1 << i) & (nums[j])) counter++
        }
        if (counter % 3 === 1) result |= (1 << i)
    }
    return result
};
```