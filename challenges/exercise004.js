export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here

  return nums.filter(num => num < 1);
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here

  return names.filter(name => name.charAt(0) === char);
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here

  return words.filter(word => word.substring(0, 3) === "to ");
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here

  return nums.filter(num => Number.isInteger(num));
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here

  const cities = [];

  users.forEach(user => cities.push(user.data.city.displayName));

  return cities;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  
  return nums.map(num => parseFloat(Math.sqrt(num).toFixed(2)));
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here

  // match(/str/i) regex case insensitive match

  str = str.toLowerCase();
  return sentences.filter(sentence => sentence.toLowerCase().includes(str));
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here

  const longestSides = [];
  
  triangles.forEach(triangle => longestSides.push(Math.max(...triangle)));

  return longestSides;
}
