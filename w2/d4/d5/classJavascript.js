//We can use any name for the class but a class name should always be a noun, 
//and the first letter should always be capitalized.
class Pizza {
  constructor(size, crust, price) {
    this.size = size;
    this.crust = crust;
    this.price = price;
    this.toppings = ["cheese"];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }
}
let pizza3 = new Pizza("large", "thin", 10);
let pizza1 = new Pizza();

pizza1.addTopping("mushrooms");
pizza1.addTopping("peppers");
console.log(pizza1.toppings);//false

let pizza2 = new Pizza();
// console.log(pizza2.toppings); // ["cheese"]
pizza2.addTopping("more cheese");
console.log(pizza2.toppings); // ["cheese", "more cheese"];
console.log(pizza3);

typeof(true); 
// "boolean" 
typeof(Boolean(true)); 
// => "boolean" 
typeof(new Boolean(true));
// => "object"

const greeting = "Hello, world!" 
const objGreeting = new String("Hello, world!");

greeting == objGreeting; 
// => true

greeting === objGreeting; 
// => false