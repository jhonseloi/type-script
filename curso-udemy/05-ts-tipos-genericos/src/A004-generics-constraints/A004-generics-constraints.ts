type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K]

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave]

const animal = {
    cor: 'Branco',
    idade: 10,
    vacinas: ['Vacina 1', 'Vacina 2', 'Vacina 3'],
}

const cor = obterChave(animal, 'cor')
const idade = obterChave(animal, 'idade')
const vacinas = obterChave(animal, 'vacinas')

console.log(cor, idade, vacinas)
