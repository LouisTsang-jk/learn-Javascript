# 动态规划

「Dynamic Programming」,一般形式就是求最值，动态规划其实是运筹学的一种最优化方法。（最长递增子序列、最小编辑距离）。

解决该类问题的核心就是**`穷举`**，但是有些问题存在重叠子问题，暴力穷举效率低，所以需要`备忘录`或者`DP table`来优化穷举过程。

动态规划问题一定会具备**`「最优子结构」`**，才能通过子问题得到原问题的最值。

只有列出正确的**`状态转移方程`**，才能正确穷举。

#### 运算过程

1. 暴力递归
2. 带备忘录的递归解法
3. 迭代的动态规划

#### 思路流程

1. 找到状态和选择
2. 明确dp数组/函数定义
3. 寻找状态之间的关系

### 例子

##### 斐波那契数列

斐波那契数列有自己的数学公式：

`f(n) = f(n - 1) + f(n - 2)`

1. 递归解法

```javascript
function fib (n) {
  if (n === 1 || n === 2) return 1;
	return fib(n - 1) + fib(n - 2);
}
console.time()
console.log('ans:', fib(10)) // ans: 46368
console.timeEnd() // 3.173095703125 ms
```

2. 动态规划「DP table」

```javascript
function fib (n) {
  if (n < 1) return 0
  if (n === 1 || n === 2) return 1;
  const dp = {};
  dp[1] = dp[2] = 1;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
console.time()
console.log('ans:', fib(10)) // ans: 46368
console.timeEnd() // 0.157958984375 ms
```

##### 零钱问题

给你 `k` 种面值的硬币，面值分别为 `c1, c2 ... ck`，每种硬币的数量无限，再给一个总金额 `amount`，问你**最少**需要几枚硬币凑出这个金额，如果不可能凑出，算法返回 -1 。

###### 解题思路：

首先这题符合「最优子结构」，子问题之间相互独立。

1. 确定「Base case」，目标金额`amount`为0的时候返回0

2. 确定「状态」，原问题和子问题中会变化的变量

3. 确定「选择」，导致「状态」产生变化的行为，在零钱问题里面就是选择了一枚硬币，选择了硬币就相当于减少了目标金额，所以所有硬币的面值，就是「选择」

4. 明确`dp`函数/数组的定义。

   ```javascript
   function coinChange (coins, amount) {
     const memo = {}
     const dp = function (n) {
       if (memo[n]) return memo[n]
       if (n === 0) return 0
    if (n < 0) return -1
       let result = Infinity
       for(const coin of coins) {
         const subproblem = dp(n - coin)
         if (subproblem === -1) continue
         result = Math.min(result, 1 + subproblem)
       }
       memo[n] = result !== Infinity ? result : -1
       return memo[n]
     }
     return dp(amount)
   }
   
   ```
   
   