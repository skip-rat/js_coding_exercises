import {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
} from "../challenges/exercise007";

describe("sumDigits", () => {
    test("typical input", () => {
        expect(sumDigits(0)).toEqual(0);
        expect(sumDigits(1)).toEqual(1);
        expect(sumDigits(23)).toEqual(5);
        expect(sumDigits(123456789)).toEqual(45);
        expect(sumDigits(50607)).toEqual(18);
        expect(sumDigits(123.456)).toEqual(21);
    });

    test("erroneous input", () => {
        expect(() => sumDigits()).toThrow(Error);
        expect(() => sumDigits(undefined)).toThrow(Error);
        expect(() => sumDigits(null)).toThrow(Error);
        expect(() => sumDigits("123")).toThrow(Error);
    });
});

describe("createRange", () => {
    test("typical input with step arg", () => {
        expect(createRange(3, 11, 1)).toEqual([3, 4, 5, 6, 7, 8, 9, 10, 11]);
        expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
        expect(createRange(10, 100, 10)).toEqual([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
    });

    test("typical input without step arg", () => {
        expect(createRange(3, 11)).toEqual([3, 4, 5, 6, 7, 8, 9, 10, 11]);
    });

    test("erroneous input (step = 0 should default to step = 1)", () => {
        expect(createRange(3, 11, 0)).toEqual([3, 4, 5, 6, 7, 8, 9, 10, 11]);
        expect(() => createRange()).toThrow(Error);
        expect(() => createRange(undefined)).toThrow(Error);
        expect(() => createRange(1)).toThrow(Error);
    });
});

describe("getScreentimeAlertList", () => {

    const users = [
        {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
                { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
            ]
        },
        {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
                { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
            ]
        },
        {
            username: "mary_b_5678",
            name: "Mary Brown",
            screenTime: [
                { date: "2019-05-01", usage: { mapMyRun: 8, whatsApp: 9, facebook: 15, safari: 10 } },
                { date: "2019-05-04", usage: { mapMyRun: 20, whatsApp: 35, facebook: 45, safari: 18 } },
                { date: "2019-05-05", usage: { mapMyRun: 15, whatsApp: 0, facebook: 0, safari: 31 } },
            ]
        },
    ];

    test("typical input", () => {
        expect(getScreentimeAlertList(users, "2019-04-01")).toEqual([]);
        expect(getScreentimeAlertList(users, "2019-05-02")).toEqual(["beth_1234"]);
        expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234", "mary_b_5678"]);
    });
});

describe("hexToRGB", () => {
    test("typical input", () => {
        expect(hexToRGB("#FF1133")).toEqual("rgb(255,17,51)");
        expect(hexToRGB("#000000")).toEqual("rgb(0,0,0)");
        expect(hexToRGB("#FFFFFF")).toEqual("rgb(255,255,255)");
        expect(hexToRGB("#00AABBCC")).toEqual("rgb(0,170,187)");
    });


    test("erroneous input", () => {
        expect(() => hexToRGB()).toThrow(Error);
        expect(() => hexToRGB(undefined)).toThrow(Error);
        expect(() => hexToRGB(1)).toThrow(Error);
        expect(() => hexToRGB("FF")).toThrow(Error);
        expect(() => hexToRGB("FF1133")).toThrow(Error);
    });
});

describe("findWinner", () => {
    const arr = [
        [
            ["X", "0", null],
            ["X", null, "0"],
            ["X", null, "0"]
        ],
        [
            ["0", "X", null],
            [null, "X", "0"],
            [null, "X", "0"]
        ],
        [
            [null, "0", "X"],
            ["0", null, "X"],
            ["0", null, "X"]
        ],
        [
            ["0", "0", "0"],
            ["X", null, "X"],
            ["X", null, "0"]
        ],
        [
            ["X", null, "X"],
            ["0", "0", "0"],
            ["X", null, "0"]
        ],
        [
            ["X", null, "X"],
            ["X", null, "0"],
            ["0", "0", "0"]
        ],
        [
            ["X", "0", null],
            ["0", "X", "0"],
            ["X", null, "X"]
        ],
        [
            ["X", "0", "X"],
            ["0", "X", "0"],
            ["X", null, "0"]
        ],
        [
            ["X", "0", "X"],
            ["0", null, "0"],
            ["X", null, "0"]
        ],
    ];

    test("has winner", () => {
        expect(findWinner(arr[0])).toEqual("X");
        expect(findWinner(arr[1])).toEqual("X");
        expect(findWinner(arr[2])).toEqual("X");
        expect(findWinner(arr[3])).toEqual("0");
        expect(findWinner(arr[4])).toEqual("0");
        expect(findWinner(arr[5])).toEqual("0");
        expect(findWinner(arr[6])).toEqual("X");
        expect(findWinner(arr[7])).toEqual("X");
    });

    test("no winner", () => {
        expect(findWinner(arr[8])).toEqual(null);
    });
});

