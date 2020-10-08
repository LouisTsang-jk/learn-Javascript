let num = 11;
String.prototype.reverse = function () {
  return this.split('').reverse().join('');
}
while (true) {
    const palindromic2 = num.toString(2).reverse();
    const palindromic8 = num.toString(8).reverse();
    const palindromic10 = num.toString(10).reverse();
    if ((palindromic2 === num.toString(2)) && (palindromic8 === num.toString(8)) && (palindromic10 === num.toString(10))) {
        console.log("result:", num);
        break;
    } else {
        console.log("num:", num);
        num += 2;
    }
}