let x = 10
x = 0b1010 // eslint-disable-line
const a = 100 // eslint-disable-line

const pessoa = { // eslint-disable-line
    nome: 'Luiz' as const,
    sobrenome: 'Carlos',
}

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
    return cor
}

console.log(escolhaCor('Vermelho'))

export default 1
