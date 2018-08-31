import rangeColorSwitch from "../rangeColorSwitch";

describe("rangeColorSwitch()", () => {
  describe("1~10", () => {
    it("should return yellow", () => {
      expect(rangeColorSwitch("01")).toBe("#ffff00");
    });

    it("should return yellow", () => {
      expect(rangeColorSwitch("10")).toBe("#ffff00");
    });
  });

  describe("11~20", () => {
    it("should return 039be5", () => {
      expect(rangeColorSwitch("11")).toBe("#039be5");
    });

    it("should return 039be5", () => {
      expect(rangeColorSwitch("20")).toBe("#039be5");
    });
  });

  describe("21~30", () => {
    it("should return b71c1c", () => {
      expect(rangeColorSwitch("21")).toBe("#b71c1c");
      expect(rangeColorSwitch("30")).toBe("#b71c1c");
    });
  });

  describe("31~40", () => {
    it("should return 757575", () => {
      expect(rangeColorSwitch("31")).toBe("#757575");
      expect(rangeColorSwitch("40")).toBe("#757575");
    });
  });

  describe("41~45", () => {
    it("should return 4caf50", () => {
      expect(rangeColorSwitch("41")).toBe("#4caf50");
      expect(rangeColorSwitch("45")).toBe("#4caf50");
    });
  });
});
