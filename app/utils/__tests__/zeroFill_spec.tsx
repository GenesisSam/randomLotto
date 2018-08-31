import zeroFill from "../zeroFill";

describe("zeroFill()", () => {
  describe("when give 2 pad", () => {
    describe("when give 2", () => {
      it("should return 02", () => {
        const result = zeroFill(2, 2);
        expect(result).toBe("02");
        expect(result).not.toBe("20");
        expect(result).not.toBe("2");
      });
    });

    describe("when give 34", () => {
      it("should return 34", () => {
        const result = zeroFill(34, 2);
        expect(result).toBe("34");
        expect(result).not.toBe("034");
        expect(result).not.toBe("340");
      });
    });
  });
});
