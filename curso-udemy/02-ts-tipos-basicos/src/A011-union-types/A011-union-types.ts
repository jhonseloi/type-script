function addOrConcat(
    a: number | string | boolean,
    b: number | string | boolean,
): number | string | boolean {
    if (typeof a === 'number' && typeof b === 'number') return a + b
    return `${a} + ${b}`
}

console.log(addOrConcat(10, 20)) // soma
console.log(addOrConcat('10', '20')) // concatenação
console.log(addOrConcat(10, '20')) // concatenação
console.log(addOrConcat('10', 20)) // concatenação
console.log(addOrConcat(true, true)) // concatenação
