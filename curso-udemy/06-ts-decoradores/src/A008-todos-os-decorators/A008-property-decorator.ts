function decoradorDePropriedade(
    prototipoDaClasse: object,
    nomePropriedade: string,
): any {
    console.log('DECORADOR DE PROPRIEDADE:')
    console.log(prototipoDaClasse)
    console.log(nomePropriedade)
    console.log('###')

    let valorPropriedade: any
    return {
        enumerable: true,
        configurable: true,
        get: () => valorPropriedade,
        set: (valor: any) => {
            if (typeof valor === 'string') {
                valorPropriedade = valor.split('').reverse().join('')
                return
            }
            valorPropriedade = valor
        },
    }
}

function decoradorDePropriedadeEstatica(
    classConstructor: object,
    nomePropriedade: string,
): any {
    console.log('DECORADOR DE PROPRIEDADE ESTÁTICA')
    console.log(classConstructor)
    console.log(nomePropriedade)
    console.log('###')

    return {
        enumerable: true,
        configurable: true,
    }
}

export class Pessoa {
    @decoradorDePropriedade
    nome: string
    sobrenome: string
    idade: number

    @decoradorDePropriedadeEstatica
    static propriedadeEstatica = 'VALOR PROPRIEDADE ESTÁTICA'

    constructor(nome: string, sobrenome: string, idade: number) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
    }
}

const pessoa = new Pessoa('Jude', 'Bellingham', 30)
pessoa.nome = 'Endrick'
console.log(pessoa.nome)
