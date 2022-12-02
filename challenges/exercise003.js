export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!

  return nums.map(num => num * num);
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!

  let ccWord = ""; 
  let idx = 0;

  words.forEach(word => {
    idx++ === 0 
    ? ccWord = word 
    : ccWord += word.charAt(0).toUpperCase() + word.slice(1);    
  });
  return ccWord;
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!

  let totalSubjects = 0;

  people.forEach(person => {
    totalSubjects += person.subjects.length;
  });

  return totalSubjects;
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!

  let found = false;
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

  return found;
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!

  const result =[];

  arr1.forEach(num1 => {
    if(arr2.find(num2 => num1 === num2))
    { 
      if(!result.includes(num1))
        result.push(num1);      
    }
  });

  return result.sort();
}
