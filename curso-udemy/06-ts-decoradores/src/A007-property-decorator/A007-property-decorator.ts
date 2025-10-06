function decorador(classPrototype: any, nameMethod: string) {
    let value = classPrototype[nameMethod]

    const getter = () => {
        console.log(`Getter: valor atual de ${nameMethod} = ${value}`)
        return value
    }

    const setter = (newValue: any) => {
        console.log(
            `Setter: alterando ${nameMethod} de ${value} para ${newValue}`,
        )
        value = newValue
    }

    Object.defineProperty(classPrototype, nameMethod, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true,
    })
}

export class Pessoa {
    @decorador
    nome: string

    constructor(nome: string) {
        this.nome = nome
    }
}

const pessoa = new Pessoa('Bruno')
console.log(pessoa)
console.log(pessoa.nome)
