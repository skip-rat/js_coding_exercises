import { capitalize } from "./exercise001.js";

export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  
  return nums.map(num => num * num);
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  
  return words.map((word, i) => i > 0 ? capitalize(word) : word).join('');
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  
  return people.reduce((total, person) => { return total += person.subjects.length; }, 0);
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  
  return menu.map(dish => { 
    return dish.ingredients; }).flat().some(item => item === ingredient);
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  
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
