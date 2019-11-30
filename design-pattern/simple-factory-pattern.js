/**
 * scene : company staff system
 */
function Staff(name, age, work) {
  this.name = name;
  this.age = age;
  this.work = work;
}
function arrange(name, age, work) {
  let job = "";
  switch (work) {
    case "programmer":
      job = "write code";
      break;
    case "product-manager":
      job = "design business";
      break;
  }
  return new Staff(name, age, work);
}
/**
 * new staff 
 */
arrange("Louis", 23, "programmer");//=> Staff { name: 'Louis', age: 23, work: 'programmer' }