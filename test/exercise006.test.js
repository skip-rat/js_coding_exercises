import {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
} from "../challenges/exercise006";

describe("sumMultiples", () => {
  const arr = [24, 44, 56, 11, 12, 17, 34];

  test("sum array elements which are a multiple of 3 or 5", () => {
    expect(sumMultiples([])).toBe(0);
    expect(sumMultiples([ 3, 5 ])).toBe(8);
    expect(sumMultiples([ 1, 2, 3, 4, 5 ])).toBe(8);
    expect(sumMultiples(arr)).toBe(36);
  });

  test("null and wrong input etc", () => {
    expect(sumMultiples(null)).toBe(0);
    expect(sumMultiples("a string")).toBe(0);
    expect(sumMultiples(15)).toBe(0);
  });
});

describe("isValidDNA", () => {
  test("test string is a valid DNA string, containing only C, G, T and A (case in-senstivie)", () => {
    expect(isValidDNA(null)).toBe(false);
    expect(isValidDNA("")).toBe(false);
    expect(isValidDNA("xyz")).toBe(false);
    expect(isValidDNA("TGATACGA")).toBe(true);
    expect(isValidDNA("tGATAcGA")).toBe(true);
    expect(isValidDNA("TGATACXGA")).toBe(false);
  });
});

describe("getComplementaryDNA", () => {
  test("given a DNA string (containing C, G, T, A) returns string of complementary base pairs: T-A, C-G (case in-senstivie)", () => {
    expect(getComplementaryDNA(null)).toBe("");
    expect(getComplementaryDNA("")).toBe("");
    expect(getComplementaryDNA("xyz")).toBe("");
    expect(getComplementaryDNA("TGATACGA")).toBe("ACTATGCT");
    expect(getComplementaryDNA("tGATAcGA")).toBe("ACTATGCT");
    expect(getComplementaryDNA("TGATACXGA")).toBe("");
  });
});

describe("isItPrime", () => {
  test("returns true if number is a prime number, else false", () => {
    expect(isItPrime(null)).toBe(false);
    expect(isItPrime(0)).toBe(false);
    expect(isItPrime(1)).toBe(false);
    expect(isItPrime(2)).toBe(true);
    expect(isItPrime(5)).toBe(true);
    expect(isItPrime(10)).toBe(false);
    expect(isItPrime(29)).toBe(true);
    expect(isItPrime(619)).toBe(true);
  });
});

describe("createMatrix", () => {
  test("create an n x n array and fill with a value", () => {
    expect(createMatrix(0, "abc")).toEqual([]);
    expect(createMatrix(1, "abc")).toEqual([ [ 'abc' ] ]);
    expect(createMatrix(2, "def")).toEqual([ [ 'def', 'def' ], [ 'def', 'def' ]]);
  });
});

// returns true if there are enough staff (min 3) to cover on the given day
describe("areWeCovered", () => {

  const staff = [
    { name: "Sally", rota: ["Monday", "Tuesday"] },
    { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
    { name: "Mary", rota: ["Sunday", "Tuesday", "Thursday"] },
    { name: "Jim", rota: ["Saturday"] },
    { name: "Alex", rota: ["Saturday"] },
    ];

  test("fail tests", () => {
    expect(areWeCovered(staff, "Monday")).toBe(false);
    expect(areWeCovered(staff, "Sunday")).toBe(false);
    expect(areWeCovered(staff, "Friday")).toBe(false);
  });

  test("success tests", () => {
    expect(areWeCovered(staff, "Tuesday")).toBe(true);
    expect(areWeCovered(staff, "Saturday")).toBe(true);
  });
});
