interface Pessoa1<T, U> {
    nome: T
    sobrenome: T
    idade: U
}

type Pessoa2<T, U> = {
    nome: T
    sobrenome: T
    idade: U
}

const aluno1: Pessoa1<string, number> = {
    nome: 'Augusto',
    sobrenome: 'Marques',
    idade: 30,
}

const aluno2: Pessoa2<string, number> = {
    nome: 'Maria',
    sobrenome: 'Oliveira',
    idade: 25,
}

console.log(aluno1)
console.log(aluno2)
