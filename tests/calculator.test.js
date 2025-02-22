import calculator from "./calculator";

it("Sums small numbers", () => {
    expect(calculator.sum(2,1)).toBe(3)
})

it("Sums big numbers", () => {
    expect(calculator.sum(5264, 1351)).toBe(6615)
})

it("Substracts small numbers", () => {
    expect(calculator.substract(5,3)).toBe(2)
})

it("Substracts big numbers", () => {
    expect(calculator.substract(5486, 4531)).toBe(955)
})

it("Divides", () => {
    expect(calculator.divide(5,2)).toBe(2.5)
})

it("Multiplies", () => {
    expect(calculator.multiply(5,2)).toBe(10)
})
