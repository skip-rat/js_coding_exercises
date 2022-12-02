// Note: Be sure to check out all the exercises corresponding .md files (in docs)! 📘 👍

export function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  
  if(/[A-Z\W]/.test(word.charAt(0)))
  {
    return word;
  }
  else
  {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  

  //Frederic", "Bonneville")).toBe("F.B");
  return firstName.charAt(0) + "." +  lastName.charAt(0);

}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  

  const totalPrice = originalPrice * ((100 + vatRate) / 100);
  
  if(Number.isInteger(totalPrice))
  {
    return totalPrice;
  }
  else
  {
    return parseFloat(totalPrice.toFixed(2));
  }
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  
  const decreaseValue = (originalPrice * reduction) / 100;
  return originalPrice - decreaseValue.toFixed(2); // implicit cast to number
}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  
  let midPoint;
  let len;

  if(str.length % 2) // even string length
  {
    midPoint = str.length / 2;
    len = 1;
  }
  else // odd string length
  {
    midPoint = str.length / 2 - 1;
    len = 2;
  }
    return str.substring(midPoint, midPoint + len)
}

export function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");  

  return word.split('').reverse().join('');
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  
  const reversedWords = [];

  words.forEach(word => {
    reversedWords.push(reverseWord(word));    
  });

  return reversedWords;
}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");  

  let count = 0;

  users.forEach(user => {
    if(user.type === "Linux")
    {
      count++;
    }
  });

  return count;
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");

  let mean = 0;
  let total = 0;

  scores.forEach(num => total += num);

  mean = total / scores.length;

  if(Number.isInteger(mean))
  {
    return mean;
  }
  else
  {
    return parseFloat(mean.toFixed(2));
  }  
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");  

  if (n % 15 === 0)
  { 
    return "fizzbuzz";
  }
  else if (n % 3 === 0)
  { 
    return "fizz";
  }
  else if (n % 5 === 0)
  { 
    return "buzz";
  }
  else  
  {
    return n;
  }
}
