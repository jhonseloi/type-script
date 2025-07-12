export class Pessoa {
    constructor(
        private nome: string,
        private sobrenome: string,
        private idade: number,
        private cpf: string,
    ) {}

    set _cpf(_cpf: string) {
        console.log('SETTER CHAMADO')
        this.cpf = _cpf
    }

    get _cpf(): string {
        console.log('GETTER CHAMADO')
        return this.cpf.replace(/\D/g, '')
    }
}

const pessoa = new Pessoa('Antonio', 'Carlos', 30, '000.000.000-00')
pessoa._cpf = '123.456.789-00'
console.log(pessoa._cpf)
