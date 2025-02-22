import cipher from "./cipher";

it("Works with a simple shift", () => {
    expect(cipher("abc", 3)).toBe("def")
})

it("Works when crossing z", () => {
    expect(cipher("xyz", 3)).toBe("abc")
})

it("Works with a large shift", () => {
    expect(cipher("Hey", 20)).toBe("Bys")
})

it("Preserves casing", () => {
    expect(cipher("HeLLo", 3)).toBe("KhOOr")
})

it("Preserves punctuation", () => {
    expect(cipher("Hello, World!", 3)).toBe("Khoor, Zruog!")
})