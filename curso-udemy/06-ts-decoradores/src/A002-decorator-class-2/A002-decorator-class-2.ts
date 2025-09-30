function divideNomeECor<T extends new (...args: any[]) => any>(target: T): T {
    console.log('Sou o decorador e recebi:', target)

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

@divideNomeECor
export class Animal {
    constructor(
        public nome: string,
        public cor: string,
    ) {}
}

const animal = new Animal('cachorro', 'branco')
console.log('CLASSE:', animal)
