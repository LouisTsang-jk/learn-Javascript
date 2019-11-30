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

/**
 * scene: Storage
 */
class Storage {
  static getInstance() {
    if (!Storage.instance) {
      Storage.instance = new Storage();
    }
    return Storage.instance;
  }
  setItem(key, value) {
    localStorage.setItem(key, value);
  }
  getItem(key) {
    localStorage.getItem(key);
  }
}

/**
 * scene: Modal (global)
 */