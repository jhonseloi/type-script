type Constructor = new (...args: any[]) => any

function decoradorDeParametroDeMetodo(
    prototipoDaClasse: object,
    nomeDoMetodo: string,
    indiceDaPropriedade: number,
): any {
    console.log('PARÂMETRO DE MÉTODO:')
    console.log(prototipoDaClasse)
    console.log(nomeDoMetodo)
    console.log(indiceDaPropriedade)
    console.log('###')
}

function decoradorDeParametroDeMetodoEstatico(
    classConstructor: Constructor,
    nomeDoMetodo: string,
    indiceDaPropriedade: number,
): any {
    console.log('PARÂMETRO DE MÉTODO ESTÁTICO:')
    console.log(classConstructor)
    console.log(nomeDoMetodo)
    console.log(indiceDaPropriedade)
    console.log('###')
}

export class Pessoa {
    nome: string
    sobrenome: string
    idade: number

    static propriedadeEstatica = 'VALOR PROPRIEDADE ESTÁTICA'

    constructor(nome: string, sobrenome: string, idade: number) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
    }

    metodo(@decoradorDeParametroDeMetodo msg: string): string {
        return `${this.nome} ${this.sobrenome}: ${msg}`
    }

    static metodoEstatico(
        @decoradorDeParametroDeMetodoEstatico msg: string,
    ): string {
        return `${Pessoa.propriedadeEstatica} ${msg}`
    }
}

const pessoa = new Pessoa('Kylian', 'Mbappé', 30)
console.log(pessoa.metodo('Olá!'))
console.log(Pessoa.metodoEstatico('está aqui!'))
