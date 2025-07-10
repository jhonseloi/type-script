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

export class Aluno extends Pessoa {}

export class Professor extends Pessoa {
    getNomeCompleto(): string {
        return `Isso vem do professor: ${this.nome} ${this.sobrenome}`
    }
}

const aluno = new Aluno('Enzo', 'Fernando', 15, '111.111.111-11')
const professor = new Professor('Gilberto', 'Sousa', 40, '222.222.222-22')

console.log(aluno.getNomeCompleto())
console.log(professor.getNomeCompleto())
