/**
 * name :abstract-factory-pattern
 * scene : mobile phone factory
 * ps: phone = os + hardware
 */
class MobilePhoneFactory {
  createOS() {
    throw ("You should overwrite the abstract function,instead of call directly");
  }
  createHardware() {
    throw ("You should overwrite the abstract function,instead of call directly");
  }
}

// System
class OS {
  hardwareControler() {
    throw ("You should overwrite the abstract function,instead of call directly");
  }
}

class Android extends OS {
  hardwareControler() {
    console.log("Android OS");
  }
}

class IOS extends OS {
  hardwareControler() {
    console.log("IOS");
  }
}

//Hardware
class Hardware {
  work() {
    throw ("You should overwrite the abstract function,instead of call directly");
  }
}

class Qualcomm extends Hardware {
  work() {
    console.log("Qualcomm CPU");
  }
}

class A extends Hardware {
  work() {
    console.log("A CPU");
  }
}

class AppleFactory extends MobilePhoneFactory{
  createOS(){
    return new IOS();
  }
  createHardware(){
    return new A();
  }
}

const iphoneFactory = new AppleFactory();
const iphone6 = {
  os:iphoneFactory.createOS,
  hardware:iphoneFactory.createHardware()
}//=> { os: IOS {}, hardware: A {} }