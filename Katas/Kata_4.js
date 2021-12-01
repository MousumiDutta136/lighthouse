//a list of instructors names will be given
//and have to determine which instructor has the longest nameInstructors Names
//If there are two instructors with the longest name, return the first one.

const instructorWithLongestName = function(instructors) 
{
  // Put your solution here
  let maxInstructor =[];
  let n = instructors.length;

  for (let i = 0; i < n-1; i++)
  {
    if(instructors[i].name.length >= instructors[i+1].name.length)
    {
      maxInstructor[i] = instructors[i];
      instructors[i] = instructors[i + 1];
      instructors[i + 1] = maxInstructor[i];
    } 
  }
  return instructors[n-1];
};
 
console.log(instructorWithLongestName([
  {name: "Samuelia", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donaldia", course: "Web"},
  {name: "Ceremiah", course: "Web"},
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));