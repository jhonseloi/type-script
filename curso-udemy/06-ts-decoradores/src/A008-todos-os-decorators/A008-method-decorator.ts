type Constructor = new (...args: any[]) => any

function decoradorDeMetodo(
    prototipoDaClasse: object,
    nomeDoMetodo: string,
    descritorDePropriedade: PropertyDescriptor,
): any {
    console.log('MÉTODO NORMAL:')
    console.log(prototipoDaClasse)
    console.log(nomeDoMetodo)
    console.log(descritorDePropriedade)
    console.log('###')

    return {
        writable: true,
        enumerable: true,
        configurable: true,
    }
}

function decoradorDeMetodoEstatico(
    classConstructor: Constructor,
    nomeDoMetodo: string,
    descritorDePropriedade: PropertyDescriptor,
): any {
    console.log('MÉTODO ESTÁTICO:')
    console.log(classConstructor)
    console.log(nomeDoMetodo)
    console.log(descritorDePropriedade)
    console.log('###')

    return {
        enumerable: true,
        configurable: true,
    }
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

    @decoradorDeMetodo
    metodo(msg: string): string {
        return `${this.nome} ${this.sobrenome}: ${msg}`
    }

    @decoradorDeMetodoEstatico
    static metodoEstatico(msg: string): string {
        return `${Pessoa.propriedadeEstatica} ${msg}`
    }
}

const pessoa = new Pessoa('Vinicius', 'Junior', 30)
console.log(pessoa.metodo('Olá!'))
console.log(Pessoa.metodoEstatico('está aqui!'))
