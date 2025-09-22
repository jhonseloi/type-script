// Record
const pessoa1: Record<string, string | number> = {
    nome: 'Erling',
    sobrenome: 'Haaland',
    idade: 25,
}
console.log(pessoa1)

type Pessoa = {
    nome?: string
    sobrenome?: string
    idade?: number
}

// Required
type PessoaRequired = Required<Pessoa>
const pessoa2: PessoaRequired = {
    nome: 'Tijani',
    sobrenome: 'Reijnders',
    idade: 27,
}
console.log(pessoa2)

// Partial
type PessoaPartial = Partial<PessoaRequired>
const pessoa3: PessoaPartial = {
    nome: 'Bernardo',
    sobrenome: 'Silva',
}
console.log(pessoa3)

// Readonly
type PessoaReadonly = Readonly<PessoaRequired>
const pessoa4: PessoaReadonly = {
    nome: 'Phil',
    sobrenome: 'Foden',
    idade: 25,
}
console.log(pessoa4)

// Pick
type PessoaPick = Pick<PessoaRequired, 'nome' | 'idade'>
const pessoa5: PessoaPick = {
    nome: 'Savinho',
    idade: 21,
}
console.log(pessoa5)

// module mode
export default 1
