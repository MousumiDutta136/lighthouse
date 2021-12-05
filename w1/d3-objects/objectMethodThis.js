//Functions As Object Properties (AKA Methods!)
const person = {
  firstName : 'Bob', // propery contans data
  lastName : 'Smith',
  fullName : function() {
    return this.firstName + ' ' + this.lastName;
  }
}
// console.log(person.firstName);
// console.log('Hello, ' + person.firstName + ' ' + person.lastName);
console.log('Hello, ' + person.fullName());