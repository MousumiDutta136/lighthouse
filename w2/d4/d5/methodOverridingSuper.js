// Superclass
class Person {
  constructor(name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
  }

  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }
}
class Student extends Person{
  // here is a method that is specific to students
  enroll(cohort) {
    this.cohort = cohort;
  }


  // identical! Smells of code duplication
  bio() {
    return `I'm a student at Lighthouse Labs (aka Labber). ${super.bio()}`;
  }
}

// Subclass
// class Mentor extends Person {
//   // Completely re-define the bio method since it has more to say
//   bio() {
//     return `I'm a mentor at Lighthouse Labs. My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
//   }
// }
class Mentor extends Person {
  // Mentor bios need to include a bit more info
  bio() {
    return `I'm a mentor at Lighthouse Labs. ${super.bio()}`;
  }
}

// The Student class doesn't need to define bio since it can just use the one from Person

// DRIVER CODE

const bob = new Mentor('Bob Ross', 'I like mountains way too much');
console.log(bob.bio());

const mousumi = new Student('Mousumi Dutta', 'I like to do swimming');
console.log(mousumi.bio());