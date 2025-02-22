import reverse from "./reverse";

it("Reverses a singe word", () => {
    expect(reverse("hello")).toBe("olleh")
})

it("Reverses a multiple words", () => {
    expect(reverse("hello world again")).toBe("niaga dlrow olleh")
})