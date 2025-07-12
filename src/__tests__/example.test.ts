function sum(a: number, b: number): number {
  return a + b;
}

test("example", () => {
  const value = sum(2, 5);
  expect(value).toBe(7);
});
