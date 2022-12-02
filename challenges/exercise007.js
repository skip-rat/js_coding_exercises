/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
export const sumDigits = (n) => {
  if (n === undefined) throw new Error("n is required");
  if (typeof n != "number") throw new Error("number is required");

  // convert number to string and iterate over chars
  let str = "" + n;
  let i = str.length;
  let sum = 0;
  while (i--) {
    // only look at digit chars
    if (/\d/.test(str[i])) {
      sum += Number(str[i]);
    }
  }

  return sum;
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. 
 * For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step if not supplied or is < 1, will default to using step = 1
 */
export const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  if (step === undefined || step < 1) {
    step = 1;
  }

  const arr = new Array();
  for (let n = start; n <= end; n += step) {
    arr.push(n);
  }

  return arr;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
export const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");

  const arr = new Array();
  let screenTime;
  let totalTime;
  users.forEach(user => {
    screenTime = user.screenTime.find(entry => {
      return entry.date === date;
    })

    if (screenTime !== undefined) {
      totalTime = calcTotalScreenTime(screenTime.usage);
      if (totalTime > 100) {
        arr.push(user.username);
      }
    }
  });

  return arr;
};

/**
 * Sums the time values from the supplied object and returns the total
 * 
 * @param {Object} usage eg { twitter: 34, instagram: 22, facebook: 40} 
 */
export const calcTotalScreenTime = (usage) => {
  if (usage === undefined) throw new Error("usage is required");

  /*let total = 0;
  for (const value of Object.values(usage)) {  
    total += value;
  }

  return total;*/

  return Object.values(usage).reduce((total, value) => { return total + value }, 0);
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. 
 * If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, 
 * and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
export const hexToRGB = (hexStr) => {
  if (hexStr === undefined) throw new Error("hexStr is required");
  if (typeof hexStr !== "string" || hexStr.startsWith('#') === false || hexStr.length < 7) throw new Error("hex colour code is required");

  let r = Number.parseInt(hexStr.slice(1, 3), 16);
  let g = Number.parseInt(hexStr.slice(3, 5), 16);
  let b = Number.parseInt(hexStr.slice(5, 7), 16);

  return "rgb(" + r + "," + g + "," + b + ")";
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
export const findWinner = (board) => {
  if (board === undefined) throw new Error("board is required");

  // check all possible winner positions
  function checkBoard(player, board) {
    if (checkRows(player, board)) return true;
    if (checkCols(player, board)) return true;
    // check the 2 diagonals
    if (checkRow(player, [board[0][0], board[1][1], board[2][2]])) return true;
    if (checkRow(player, [board[0][2], board[1][1], board[2][0]])) return true;
    return false;
  }

  // check the 3 rows for a winner
  function checkRows(player, board) {
    for (let i = 0; i < 3; i++) {
      if (checkRow(player, board[i])) return true;
    }
  }

  // check the 3 columns for a winner
  function checkCols(player, board) {
    for (let i = 0; i < 3; i++) {
      if (checkRow(player, [board[0][i], board[1][i], board[2][i]])) return true;
    }
  }

  // check if a single row of 3 cells has a winner
  function checkRow(player, row) {
    return row[0] === player && row[1] === player && row[2] === player;
  }

  if (checkBoard("X", board)) return "X";
  if (checkBoard("0", board)) return "0";
  return null;
};
