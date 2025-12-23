import { formatGarge } from "../app/utils";

describe("garge module", () => {
  test("formats text with garge prefix", () => {
    expect(formatGarge("hello")).toBe("garge: hello");
  });

  test("trims whitespace from text", () => {
    expect(formatGarge("  hello  ")).toBe("garge: hello");
  });

  test("returns empty string for empty input", () => {
    expect(formatGarge("")).toBe("");
  });

  test("returns empty string for non-string input", () => {
    expect(formatGarge(null as any)).toBe("");
    expect(formatGarge(undefined as any)).toBe("");
  });
});
