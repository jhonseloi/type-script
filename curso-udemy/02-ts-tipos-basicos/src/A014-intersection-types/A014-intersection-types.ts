type TemNome = { nome: string }
type TemSobrenome = { sobrenome: string }
type TemIdade = { idade: number }
type Pessoa = TemNome & TemSobrenome & TemIdade // AND

type AB = 'A' | 'B'
type AC = 'A' | 'C'
type AD = 'A' | 'D'
type Intersecao = AB & AC & AD

const pessoa: Pessoa = {
    nome: 'Roberto',
    sobrenome: 'Martinez',
    idade: 28,
}

console.log(pessoa)

export { pessoa }
