import { sum } from "./helpers";

describe("sum", () => {
  it("should return sumb of two given numbers", () => {
    const output = sum(3, 4);

    expect(output).toEqual(7);
  });
});
