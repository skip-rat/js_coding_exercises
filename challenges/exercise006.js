/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
export const sumMultiples = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  if (Array.isArray(arr) === false) return 0;

  return arr.reduce((total, num) => {
    return (num % 3 === 0 || num % 5 === 0) ? total + num : total;
  }, 0);    // 0 = total start value
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
export const isValidDNA = (str) => {
  if (str === undefined) throw new Error("str is required");

  const re = /[^CGTA]/i;

  return str !== null && str.length > 0 && !re.test(str);
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String} complementary DNA string if input is a valid DNA string, else an empty string
 */
export const getComplementaryDNA = (str) => {
  if (str === undefined) throw new Error("str is required");

  if (isValidDNA(str) === false) {
    return "";
  }

  str = str.toUpperCase();  // handle case-insensitive input

  let base1 = ['A', 'T', 'C', 'G'];
  let base2 = ['T', 'A', 'G', 'C'];

  return (Array.from(str).map(ch => {
    return base2[base1.indexOf(ch)];
  })).join('');
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
export const isItPrime = (n) => {
  if (n === undefined) throw new Error("n is required");
  if (typeof n != "number") return false;

  if (n === 0 || n === 1) {
    return false;
  } else {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
  }

  return true;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays.
 * For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
export const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");

  let arr = new Array(n);           // outer array
  for (let a = 0; a < n; a++) {
    arr[a] = new Array(n);          // 'n' inner arrays
    for (let i = 0; i < n; i++) {
      arr[a][i] = fill;             // each inner array has 'n' elements
    }
  }

  return arr;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day.
 * The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
export const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
  if (Array.isArray(staff) === false) throw new Error("staff array is required");

  let count = 0;
  staff.forEach(person => {
    if (person.rota.find(workDay => new RegExp(day, 'i').test(workDay)) != undefined) {
      count++;
    }
  });

  return count >= 3;
};
