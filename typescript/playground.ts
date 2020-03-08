function createArray(length: number, value: any): Array<any> {
  let result = [];
  for (let i: number = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}
const r1 = createArray(5, 0);
console.log(r1);