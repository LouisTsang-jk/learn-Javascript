# 枚举(Enum)
枚举用于取值被限定在一定范围内的场景，如一周只能有七天。
```
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
console.log(Days['Sun'] === 0); // true
console.log(Days[0] === 'Sun'); // true
```
实际编译为：
```
var Days;

(function (Days) {
  Days[Days['Sun'] = 0] = 'Sun';
  Days[Days['Mon'] = 0] = 'Mon';
  Days[Days['Tue'] = 0] = 'Tue';
  Days[Days['Wed'] = 0] = 'Wed';
  Days[Days['Thu'] = 0] = 'Thu';
  Days[Days['Fri'] = 0] = 'Fri';
  Days[Days['Sat'] = 0] = 'Sat';
})(Days || (Days = {}));
```

## 枚举项
### 常数项(constant member)
### 计算所得项(computed member)
```
enum Color {Red, Green, Blue = 'blue'.length}; // Right
enum Color {Red = 'red'.length, Green, Blue}; // Error
```
如果紧接在计算所得项后面的是未手动赋值的项，那么它就会因为无法获得初始值而报错

## 常数枚举
```
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
```
## 外部枚举
