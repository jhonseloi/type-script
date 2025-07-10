export class Empresa {
    readonly nome: string
    protected readonly funcionarios: Funcionario[] = []
    private readonly cnpj: string

    constructor(nome: string, cnpj: string) {
        this.nome = nome
        this.cnpj = cnpj
    }

    getNome(): string {
        return this.nome
    }

    // Acesso de 'funcionarios' dentro da classe
    adicionaFuncionario(func: Funcionario): void {
        this.funcionarios.push(func)
    }

    mostraFuncionarios(): void {
        for (const func of this.funcionarios) {
            console.log(func)
        }
    }
}

export class Facebook extends Empresa {
    constructor() {
        super('Facebook', '11.111.111/0001-11')
    }

    // Acesso de 'funcionarios' na subclasse
    popFuncionario(): Funcionario | null {
        const func = this.funcionarios.pop()
        if (func) return func
        return null
    }
}

export class Funcionario {
    constructor(
        readonly nome: string,
        readonly sobrenome: string,
    ) {}
}

const empresa = new Facebook()
const funcionario1 = new Funcionario('Marcio', 'Araujo')
const funcionario2 = new Funcionario('Diogo', 'Simões')
const funcionario3 = new Funcionario('Maria', 'Alice')

empresa.adicionaFuncionario(funcionario1)
empresa.adicionaFuncionario(funcionario2)
empresa.adicionaFuncionario(funcionario3)
const funcionarioRemovido = empresa.popFuncionario()

console.log(funcionarioRemovido)
console.log(empresa)
