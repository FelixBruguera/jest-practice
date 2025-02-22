import analyzeArray from "./analyzeArray";

it("Returns an object", () => {
    expect(analyzeArray([1,2,3])).toBeInstanceOf(Object)
})

it("Returns the expected properties", () => {
    let analyzedArray = analyzeArray([1,2,3])
    expect(Object.keys(analyzedArray)).toContain("average", "min")
    expect(Object.keys(analyzedArray)).toContain("min")
    expect(Object.keys(analyzedArray)).toContain("max")
    expect(Object.keys(analyzedArray)).toContain("length")
})

it("Returns the correct average", () => {
    expect(analyzeArray([2,2,2,2]).average).toBe(2)
    expect(analyzeArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]).average).toBe(55)
})

it("Returns the correct min", () => {
    expect(analyzeArray([1,2,3,4]).min).toBe(1)
    expect(analyzeArray([105,500,99,145615]).min).toBe(99)
})

it("Returns the correct max", () => {
    expect(analyzeArray([1,2,3,4]).max).toBe(4)
    expect(analyzeArray([8,3,4,7]).max).toBe(8)
})

it("Returns the correct length", () => {
    expect(analyzeArray([1,2,3,4,5]).length).toBe(5)
    expect(analyzeArray([1]).length).toBe(1)
})