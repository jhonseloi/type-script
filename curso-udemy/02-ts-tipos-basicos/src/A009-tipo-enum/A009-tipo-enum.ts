enum Cores {
    Vermelho = 10, // 10
    Azul = 100, // 100
    Amarelo = 200, // 200
}

enum Cores {
    Roxo = 'Roxo',
    Verde = 201,
    Rosa,
}

export function escolhaACor(cor: Cores): void {
    console.log(Cores[cor])
}

console.log(Cores)
console.log(Cores[10])
console.log(Cores.Vermelho)
escolhaACor(Cores.Azul)
