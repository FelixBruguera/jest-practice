export default function analyzeArray(array) {
    let sortedArray = array.toSorted((a,b) => a - b)
    return {
        average: array.reduce((acumulator, value) => acumulator + value)/array.length,
        min: sortedArray.at(0),
        max: sortedArray.at(-1),
        length: array.length
    }
}