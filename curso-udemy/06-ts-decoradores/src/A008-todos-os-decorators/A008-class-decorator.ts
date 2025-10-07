type Constructor = new (...args: any[]) => any

function decoradorDeClasse(construtor: Constructor): any {
    console.log('CLASSE:')
    console.log(construtor)

    return class extends construtor {
        // faça o que desejar
    }
}

@decoradorDeClasse
export class Pessoa {
    nome: string
    sobrenome: string
    idade: number

    constructor(nome: string, sobrenome: string, idade: number) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
    }

    metodo(msg: string): string {
        return `${this.nome} ${this.sobrenome}: ${msg}`
    }
}

const pessoa = new Pessoa('Arda', 'Guler', 20)
pessoa.metodo('Olá mundo!')
console.log(pessoa)
