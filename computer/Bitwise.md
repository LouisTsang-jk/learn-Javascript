# 位运算(Bitwise)
*位运算是32位的*
- 「与」 &
比特位均为`1`，结果才为`1`
- 「或」 |
比特位均为`0`，结果才为`0`
- 「异或」 ^
比特位相同为`0`，不同则为`1`
- 「取反」 ~
反转操作数比特位
- 「左移」 <<
左移，高位丢弃，低位补`0`
- 「右移」 >> (有符号)
右移，丢弃被移出的位
- 「右移」 >>> (无符号)
右移，丢弃被移出的位，并使用`0`在左侧填充