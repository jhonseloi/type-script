export class Pessoa {
    constructor(
        public nome: string,
        public sobrenome: string,
        private idade: number,
        protected cpf: string,
    ) {}

    getNomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome
    }

    getIdade(): number {
        return this.idade
    }

    getCpf(): string {
        return this.cpf
    }
}

export class Aluno extends Pessoa {
    constructor(
        // repassando valores
        nome: string,
        sobrenome: string,
        idade: number,
        cpf: string,
        public sala: string, // criando novo valor
    ) {
        super(nome, sobrenome, idade, cpf)
    }

    getNomeCompleto(): string {
        console.log('Fazendo algo antes...')
        const result = super.getNomeCompleto()
        return `Hey ${result}`
    }
}

export class Professor extends Pessoa {
    getNomeCompleto(): string {
        return `Isso vem do professor: ${this.nome} ${this.sobrenome}`
    }
}

const aluno = new Aluno('Jude', 'Belo', 15, '111.111.111-11', 'B-10')
const professor = new Professor('Gilberto', 'Sousa', 40, '222.222.222-22')

console.log(aluno)
console.log(aluno.getNomeCompleto())
console.log(professor.getNomeCompleto())
