import capitalize from "./capitalize";

it("Capitalizes the first character of a single word", () => {
    expect(capitalize("aaa")).toBe("Aaa")
})

it("Capitalizes the first character of multiple words", () => {
    expect(capitalize("hello world")).toBe("Hello world")
})