type Constructor = new (...args: any[]) => any

function decoradorDeGetterESetterNormal(
    prototipoDaClasse: object,
    nomePropriedade: string,
    descritorDePropriedade: PropertyDescriptor,
): any {
    console.log('GETTER/SETTER normal:')
    console.log(prototipoDaClasse)
    console.log(nomePropriedade)
    console.log(descritorDePropriedade)
    console.log('###')

    return {
        enumerable: true,
        configurable: true,
    }
}

function decoradorDeGetterESetterEstatico(
    classConstructor: Constructor,
    nomePropriedade: string,
    descritorDePropriedade: PropertyDescriptor,
): any {
    console.log('GETTER/SETTER estático:')
    console.log(classConstructor)
    console.log(nomePropriedade)
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

    static propriedadeEstatica = 'VALOR PROPRIEDADE ESTÁTICA'

    constructor(nome: string, sobrenome: string) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    get nomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`
    }

    @decoradorDeGetterESetterNormal
    set nomeCompleto(valor: string) {
        const palavras = valor.split(/\s+/g)
        const primeiroNome = palavras.shift()
        if (!primeiroNome) return
        this.nome = primeiroNome
        this.sobrenome = palavras.join(' ')
    }

    @decoradorDeGetterESetterEstatico
    static get staticPropertyGetterSetter(): string {
        return Pessoa.propriedadeEstatica
    }

    static set staticPropertyGetterSetter(value: string) {
        Pessoa.propriedadeEstatica = value
    }
}

const pessoa = new Pessoa('Rodrygo', 'Goes')
pessoa.nomeCompleto = 'Franco Mastantuono'
console.log(pessoa.nomeCompleto)
