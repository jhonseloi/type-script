export class Empresa {
    readonly nome: string
    private readonly funcionarios: Funcionario[] = []
    protected readonly cnpj: string

    constructor(nome: string, cnpj: string) {
        this.nome = nome
        this.cnpj = cnpj
    }

    adicionaFuncionario(func: Funcionario): void {
        this.funcionarios.push(func)
    }

    mostraFuncionarios(): void {
        for (const func of this.funcionarios) {
            console.log(func)
        }
    }

    getNome(): string {
        return this.nome
    }
}

export class Funcionario {
    constructor(
        readonly nome: string,
        readonly sobrenome: string,
    ) {}
}

const empresa = new Empresa('Facebook', '11.111.111/0001-11')
const funcionario1 = new Funcionario('Marcio', 'Araujo')
const funcionario2 = new Funcionario('Diogo', 'Simões')
const funcionario3 = new Funcionario('Maria', 'Alice')

empresa.adicionaFuncionario(funcionario1)
empresa.adicionaFuncionario(funcionario2)
empresa.adicionaFuncionario(funcionario3)

console.log(empresa.nome, empresa.getNome())
