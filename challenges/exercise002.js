export function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!

  return sandwich.fillings;
}

export function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!

  return person.city === "Manchester";
}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  let busess = 0;

  busess = Math.ceil(people / 40);
  
  return busess;
}

export function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!

  const sheep = arr.filter(animal => animal === "sheep");

  return sheep.length;

}

export function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!

  return (person.address.city === "Manchester" && 
          person.address.postCode.charAt(0) === 'M');
}
