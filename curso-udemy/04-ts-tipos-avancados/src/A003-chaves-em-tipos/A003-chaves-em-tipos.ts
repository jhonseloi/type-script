type Veiculo = {
    marca: string
    ano: number
}

type Car = {
    brand: Veiculo['marca']
    year: Veiculo['ano']
    plate: string
}

const carro: Car = {
    brand: 'Ford',
    year: 2025,
    plate: 'ABC-0000',
}

console.log(carro)
