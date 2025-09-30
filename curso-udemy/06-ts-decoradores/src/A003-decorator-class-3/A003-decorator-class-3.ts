function pessoa(sobrenome: string, digito: string) {
    return function <T extends new (...args: any[]) => any>(target: T): T {
        return class extends target {
            nome: string
            cpf: string

            constructor(...args: any[]) {
                super(...args)
                this.nome = this.nomeCompleto(args[0]) 
                this.cpf = this.cpfCompleto(args[1])
            }

            nomeCompleto(valor: string): string {
                return `${valor} ${sobrenome}`
            }

            cpfCompleto(valor: string): string {
                return `${valor}-${digito}`
            }
        }
    }
}

@pessoa('Silva', '00')
export class Pessoa {
    constructor(
        public nome: string,
        public cpf: string,
    ) {}
}

const p = new Pessoa('João', '123456789')
console.log(p)
