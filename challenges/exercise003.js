import { capitalize } from "./exercise001.js";

export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  
  return nums.map(num => num * num);
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  
  /*let ccWord = ""; 
  let idx = 0;

  words.forEach(word => {
    idx++ === 0 
    ? ccWord = word 
    : ccWord += word.charAt(0).toUpperCase() + word.slice(1);    
  });

  return ccWord;*/

  return words.map((word, i) => i > 0 ? capitalize(word) : word).join('');
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  
  /*let total = 0;
  people.forEach(person => total += person.subjects.length);

  return total;*/

  return people.reduce((total, person) => { return total += person.subjects.length; }, 0);
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  
/*  let found = false;
  let idx = 0;

  while(idx < menu.length && !found)
  {
    menu[idx].ingredients.forEach( item => {
      if (item === ingredient)
        found = true; 
        return;     
    });

    idx++;

  }

  return found;*/

  return menu.map(dish => { 
    return dish.ingredients; }).flat().some(item => item === ingredient);
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  
 /* const result =[];

  arr1.forEach(num1 => {
    if(arr2.find(num2 => num1 === num2))
    { 
      if(!result.includes(num1))
        result.push(num1);      
    }
  });

  return result.sort();*/

  // using a Set to store one instance of each number found in both arrays
  const set = new Set();

  arr1.forEach(num1 => {
    arr2.forEach(num2 => {
      if (num1 === num2) 
      {
        set.add(num1);
      }
    })
  });

  return Array.from(set).sort();
}
