interface Pessoa {
    nome: string
}

interface Pessoa {
    readonly sobrenome: string
    idade?: number
    readonly peso?: number
    readonly bens: string[]
    readonly endereco: readonly string[]
}

const pessoa: Pessoa = {
    nome: 'Hélio',
    sobrenome: 'Dias',
    idade: 29,
    peso: 1.7,
    bens: ['Casa', 'Carro'],
    endereco: ['Av. Brasil'],
}

pessoa.idade = 30
pessoa.bens.push('Moto')
console.log(pessoa)
