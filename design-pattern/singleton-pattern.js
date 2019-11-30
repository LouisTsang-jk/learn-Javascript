/**
 * name : singleton-pattern
 * scene: VueX
 */

class Unique {
  static getTheO() {
    if (!Unique.theO) {
      Unique.theO = new Unique();
    }
    return Unique.theO;
  }
}
const v1 = Unique.getTheO();
v1.test = "test";
const v2 = Unique.getTheO();
v2.test === v1.test;
// => true