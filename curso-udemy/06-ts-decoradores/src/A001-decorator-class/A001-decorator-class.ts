@decorator
export class Animal {
    constructor(
        public nome: string,
        public cor: string,
    ) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
    return class extends target {
        nome: string[]
        cor: string[]

        constructor(...args: any[]) {
            super(...args)
            this.nome = this.divide(args[0])
            this.cor = this.divide(args[1])
        }

        divide(valor: string): string[] {
            return valor.split('')
        }
    }
}

const animal = new Animal('cachorro', 'branco')
console.log(animal)
