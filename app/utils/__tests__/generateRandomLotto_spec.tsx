import generateRandomLotto from "../generateRandomLotto";

describe("generateRandomLotto()", () => {
  describe("should return properly game count", () => {
    it("should match games", () => {
      expect(generateRandomLotto(1)).toHaveLength(1);
    });

    it("should match games", () => {
      expect(generateRandomLotto(2)).not.toHaveLength(1);
    });
  });
});
