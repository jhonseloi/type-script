interface TipoNome {
    nome: string
}

interface TipoSobrenome {
    sobrenome: string
}

interface TipoNomeCompleto {
    nomeCompleto(): string
}

interface TipoPessoa extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

const pessoa1: TipoPessoa = {
    nome: 'Caio',
    sobrenome: 'Sousa',
    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    },
}

console.log(pessoa1.nomeCompleto())

export class Pessoa implements TipoPessoa {
    constructor(
        public nome: string,
        public sobrenome: string,
    ) {}

    nomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`
    }
}

const pessoa2 = new Pessoa('Raul', 'Gonçalves')
console.log(pessoa2.nomeCompleto())
