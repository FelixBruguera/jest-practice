export default function cipher(string, shift) {
    const ABECEDARY = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", 
                        "S", "T", "U", "V", "W", "X", "Y", "Z"]
    let arr = string.split("")
    function shiftChar(char, shiftNum) {
        let newIndex = ABECEDARY.indexOf(char.toUpperCase()) + shiftNum
        if (newIndex > 25) { newIndex = newIndex - 26}
        return ABECEDARY[newIndex]
    }
    arr = arr.map((char) => {
        if (char.match(/[a-zA-Z]/)) {
            if (char == char.toUpperCase()) { return shiftChar(char, shift).toUpperCase()}
            else { return shiftChar(char, shift).toLowerCase()}
        }
        else {
            return char
        }
    })
    return arr.join("")
    
}