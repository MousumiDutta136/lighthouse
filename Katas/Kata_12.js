//Kata 12 - The Great Codeville Bake-off

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  // Code here!
  let lr = recipes.length;
  let lba = bakeryA.length;
  let lbb = bakeryB.length; 
   
   for (let i = 0; i < lr; i++){
    let li = recipes[i].ingredients.length;
    let A = 0;
    let B = 0;
    for (j = 0; j < li; j++){
      for (let k = 0; k < lba; k++){
        if (recipes[i].ingredients[j]===bakeryA[k]){             
          A += 1;        
        }
      }
        
      for (let l = 0; l < lbb; l++){
        if (recipes[i].ingredients[j]===bakeryB[l]){            
          B += 1;        
        }
      }    
    }

    if (A > 0 && B > 0){
      return recipes[i].name;
    }
  }  
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

