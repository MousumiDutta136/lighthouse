//We can use any name for the class but a class name should always be a noun, 
//and the first letter should always be capitalized.
class Pizza {
  constructor(size, crust, price) {
    this.size = size;
    this.crust = crust;
    this.price = price;
    this.toppings = ["cheese"];
  }

  // setSize(size) {
  //   this.size = size;
  // }
  // setSize(size) {
  //   if (size === 's' || size === 'm' || size === 'l') {
  //     this.size = size;
  //   }
  set size(size) {
    if (size === 's' || size === 'm' || size === 'l') {
      this._size = size;
    }
  }
    // else we could throw an error, return false, etc.
    // We choose here to ignore all other values!
  
  get size() {
    return this._size;
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  getPrice() {
    const basePrice = 10;
    const toppingPrice = 2;
    return basePrice + (this.toppings.length * toppingPrice);
  }
}
let pizza3 = new Pizza("large", "thin", 10);
let pizza1 = new Pizza();

pizza1.addTopping("mushrooms");
pizza1.addTopping("peppers");
// console.log(pizza1.toppings);//false

let pizza2 = new Pizza();
// console.log(pizza2.toppings); // ["cheese"]
// pizza2.addTopping("more cheese");
// console.log(pizza2.toppings); // ["cheese", "more cheese"];
pizza2.size = "m";
console.log(pizza2.size);
// console.log(pizza2.getSize());
console.log(pizza2.getPrice());


// => false