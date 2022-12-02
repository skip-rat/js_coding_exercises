export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  
  const idx = nums.findIndex(num => num === n);

  if (idx === -1 || idx === nums.length-1)
  {
    return null
  }
  else
  {
    return nums[idx+1];
  }
}

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  
  const counts = { 0 : 0, 1 : 0 };

  for (const c of str) 
  {
    if (c === '0') 
    {
      counts["0"]++;
    } 
    else if (c === '1') 
    {
      counts["1"]++;
    }
  }

  return counts;  
}

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  
  return (
    parseFloat(
      n.toString()
      .split('')
      .reverse()
      .join('')
    ));
}

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");

  let total = 0;
  
  arrs.forEach(arr => total += arr.reduce((a, b) => a + b));  

  return total;
}

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");

  // PLEASE NOTE: All 3 solutions work - uncomment to test
  
  //return Array(arr[arr.length - 1], ...arr.slice(1, arr.length - 1), arr[0]);

  //[arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];

  if(arr.length > 1)
  {
    const first = arr.shift();
    const last = arr.pop();

    arr.unshift(last);
    arr.push(first);
  }

  return arr;

};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  
  searchTerm = searchTerm.toLowerCase();
  const keys = Object.keys(haystack);

  for (let i = 0; i < keys.length; i++) 
  {
    if (typeof haystack[keys[i]] === "string" && 
        haystack[keys[i]].toLowerCase().includes(searchTerm)) 
    {
      return true;
    }
  }

  return false;
}

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  
  // remove punctuation and make case insenstive
  str = str.replace(/[^a-zA-Z ]/g, "").toLowerCase();

  const words = str.split(" ");    
  const freqObj = {};

  words.forEach(word => {
    !freqObj[word] ? freqObj[word] = 1 : freqObj[word] += 1;
  });

  return freqObj;
}
