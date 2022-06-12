import main, { InputType } from "..";

describe("main", () => {
  describe("通常パターン：1人ずつ", () => {
    test("大人", () => {
      const input: InputType = {
        screenType: "0",
        watchDatetime: "2022-06-12 12:00",
        tickets: [
          {
            type: "1",
            amount: 1,
            membership: false,
          },
        ],
      };
      expect(main(input)).toBe(1800);
    });

    test("大学生", () => {
      const input: InputType = {
        screenType: "0",
        watchDatetime: "2022-06-12 12:00",
        tickets: [
          {
            type: "2",
            amount: 1,
            membership: false,
          },
        ],
      };
      expect(main(input)).toBe(1500);
    });

    test("大学生", () => {
      const input: InputType = {
        screenType: "0",
        watchDatetime: "2022-06-12 12:00",
        tickets: [
          {
            type: "2",
            amount: 1,
            membership: false,
          },
        ],
      };
      expect(main(input)).toBe(1500);
    });
    test("高校生", () => {
      const input: InputType = {
        screenType: "0",
        watchDatetime: "2022-06-12 12:00",
        tickets: [
          {
            type: "3",
            amount: 1,
            membership: false,
          },
        ],
      };
      expect(main(input)).toBe(1300);
    });
    test("小中学生", () => {
      const input: InputType = {
        screenType: "0",
        watchDatetime: "2022-06-12 12:00",
        tickets: [
          {
            type: "4",
            amount: 1,
            membership: false,
          },
        ],
      };
      expect(main(input)).toBe(1100);
    });

    test("幼児", () => {
      const input: InputType = {
        screenType: "0",
        watchDatetime: "2022-06-12 12:00",
        tickets: [
          {
            type: "5",
            amount: 1,
            membership: false,
          },
        ],
      };
      expect(main(input)).toBe(1000);
    });
  });

  describe("通常パターン：組み合わせ", () => {
    test("CASE1", () => {
      const input: InputType = {
        screenType: "0",
        watchDatetime: "2022-06-12 12:00",
        tickets: [
          {
            type: "1",
            amount: 1,
            membership: false,
          },
          {
            type: "2",
            amount: 1,
            membership: false,
          },
          {
            type: "3",
            amount: 1,
            membership: false,
          },
          {
            type: "4",
            amount: 1,
            membership: false,
          },
          {
            type: "5",
            amount: 1,
            membership: false,
          },
        ],
      };
      expect(main(input)).toBe(6700);
    });

    test("CASE2", () => {
      const input: InputType = {
        screenType: "0",
        watchDatetime: "2022-06-12 12:00",
        tickets: [
          {
            type: "1",
            amount: 2,
            membership: false,
          },
          {
            type: "2",
            amount: 3,
            membership: false,
          },
        ],
      };
      expect(main(input)).toBe(8100);
    });

    test("CASE3", () => {
      const input: InputType = {
        screenType: "0",
        watchDatetime: "2022-06-12 12:00",
        tickets: [
          {
            type: "4",
            amount: 1,
            membership: false,
          },
          {
            type: "3",
            amount: 2,
            membership: false,
          },
        ],
      };
      expect(main(input)).toBe(3700);
    });
  });

  describe("シネマ会員割引", () => {
    test("CASE1", () => {
      const input: InputType = {
        screenType: "0",
        watchDatetime: "2022-06-12 12:00",
        tickets: [
          {
            type: "1",
            amount: 1,
            membership: true,
          },
        ],
      };
      expect(main(input)).toBe(1500);
    });

    test("CASE2", () => {
      const input: InputType = {
        screenType: "0",
        watchDatetime: "2022-06-12 12:00",
        tickets: [
          {
            type: "5",
            amount: 1,
            membership: true,
          },
        ],
      };
      expect(main(input)).toBe(700);
    });

    test("CASE3", () => {
      const input: InputType = {
        screenType: "0",
        watchDatetime: "2022-06-12 12:00",
        tickets: [
          {
            type: "2",
            amount: 2,
            membership: true,
          },
          {
            type: "3",
            amount: 3,
            membership: true,
          },
        ],
      };
      expect(main(input)).toBe(5400);
    });

    test("CASE4", () => {
      const input: InputType = {
        screenType: "0",
        watchDatetime: "2022-06-12 12:00",
        tickets: [
          {
            type: "1",
            amount: 1,
            membership: true,
          },
          {
            type: "1",
            amount: 1,
            membership: false,
          },
        ],
      };
      expect(main(input)).toBe(3300);
    });
  });

  describe("特殊スクリーン", () => {
    test("CASE1", () => {
      const input: InputType = {
        screenType: "2",
        watchDatetime: "2022-06-12 12:00",
        tickets: [
          {
            type: "1",
            amount: 1,
            membership: false,
          },
        ],
      };
      expect(main(input)).toBe(1500);
    });
  });
});
