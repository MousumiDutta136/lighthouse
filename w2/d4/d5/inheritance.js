
//// This class represents all that is common between Student and Mentor
class Person {
  // moved here b/c it was identical
  constructor(name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
  }
  // moved here b/c it was identical
  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }
}

class Student extends Person{
  // this constructor is identical to that of a mentor!
  // This class represents all that is common between Student and Mentor

  
  // constructor(name, quirkyFact) {
  //   this.name = name;
  //   this.quirkyFact = quirkyFact;
  // }

  // here is a method that is specific to students
  enroll(cohort) {
    this.cohort = cohort;
  }


  // identical! Smells of code duplication
  // bio() {
  //   return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  // }
}

class Mentor extends Person{
  // this constructor is identical to that of a student!
  // constructor(name, quirkyFact) {
  //   this.name = name;
  //   this.quirkyFact = quirkyFact;
 // specific to mentors
   goOnShift() {
     this.onShift = true;
   }  

  // specific to mentors
  goOffShift() {
    this.onShift = false;
  }

  // identical! Smells of code duplication
  // bio() {
  //   return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  // }
}
let student = new Student("Mainak", "love to watch rain drops");
console.log(student.bio());
student.enroll("East A");
console.log(student);