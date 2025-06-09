type Idade = number
type Pessoa = {
    nome: string
    idade: Idade
    salario: number
    corPreferida?: string
}
type CorRGB = 'Vermelho' | 'Verde' | 'Azul'
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto'
type Cores = CorRGB | CorCMYK

const pessoa: Pessoa = {
    idade: 30,
    nome: 'Edison',
    salario: 200_000,
}

export function setCorPreferida(pessoa: Pessoa, cor: Cores): Pessoa {
    return { ...pessoa, corPreferida: cor }
}

console.log(pessoa)
console.log(setCorPreferida(pessoa, 'Azul'))
