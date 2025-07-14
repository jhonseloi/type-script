export class Pessoa {
    static idadePadrao = 10
    static cpfPadrao = '000.000.000-00'

    constructor(
        public nome: string,
        public sobrenome: string,
        public idade: number,
        public cpf: string,
    ) {}

    static criaPessoa(nome: string, sobrenome: string) {
        return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao)
    }

    metodoNormal(): void {
        console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao)
    }
}

const pessoa1 = new Pessoa('Carlos', 'Barbosa', 35, '123.456.789-00')
const pessoa2 = Pessoa.criaPessoa('Maria', 'Miranda')

console.log(pessoa1)
console.log(pessoa2)
console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao)
pessoa1.metodoNormal()
