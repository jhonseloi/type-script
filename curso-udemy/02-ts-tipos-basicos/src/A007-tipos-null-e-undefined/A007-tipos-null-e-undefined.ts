// undefined
let x
if (typeof x === 'undefined') x = 10
console.log(x * 2)

export function createPerson(
    // abertura da função
    firstName: string,
    lastName?: string,
): {
    // type annotation
    firstName: string
    lastName?: string
} {
    // corpo da função
    return {
        firstName,
        lastName,
    }
}

// null
export function squareOf(x: any) {
    if (typeof x === 'number') return x * x

    return null
}

const squareOfTwo = squareOf('2')

if (squareOfTwo === null) {
    console.log('Número inválido.')
} else {
    console.log(squareOfTwo * 100)
}
