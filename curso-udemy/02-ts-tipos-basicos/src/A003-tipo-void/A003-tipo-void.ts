function semRetorno(...args: number[]): void {
    console.log(args)
}

export const pessoa = {
    nome: 'Luis',
    sobrenome: 'Henrique',

    exibirNome(): void {
        console.log(`${this.nome} ${this.sobrenome}`)
    },
}

semRetorno(1, 2, 3)
pessoa.exibirNome()
