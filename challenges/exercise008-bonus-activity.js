// Spread Syntax Bonus activity

export function printColours(colours) {
  if (!colours) throw new Error("colour is required");
  // Your solution using the spread operator here!

  return [...colours];
}

export function shoppingList(list, newItem) {
  if (!list) throw new Error("list is required");
  if (!newItem) throw new Error("newItem is required");
  // Your solution using the spread operator here!

  return [...list, ...newItem];

  //return list.concat(newItem);
}

export function highestNumber(numbers) {
  if (!numbers) throw new Error("numbers are required");
  // Your solution using the spread operator here!

  return Math.max(...numbers);

  //return numbers.reduce((a, b) => Math.max(a, b));
}

export function splitThatString(string) {
  if (!string) throw new Error("string is required");
  // Your solution using the spread operator here!
  return [...string];
}

// Optional Chaining Bonus activity!

export function addressLookUp(user) {
  if (!user) throw new Error("user is required");
  // Your solution using optional chaining here!

  return user.address?.postcode;
}
