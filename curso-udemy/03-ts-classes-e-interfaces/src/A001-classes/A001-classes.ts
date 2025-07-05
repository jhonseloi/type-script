export class Empresa {
    // atributos
    public readonly nome: string
    protected readonly cnpj: string
    private readonly funcionarios: Funcionario[] = []

    constructor(nome: string, cnpj: string) {
        this.nome = nome
        this.cnpj = cnpj
    }

    // métodos
    adicionaFuncionario(func: Funcionario): void {
        this.funcionarios.push(func)
    }

    mostraFuncionarios(): void {
        for (const func of this.funcionarios) {
            console.log(func)
        }
    }
}

export class Funcionario {
    constructor(
        // public não obrigatório
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
empresa.adicionaFuncionario({
    nome: 'Luigi',
    sobrenome: 'Ambrosio',
})

console.log(empresa)
empresa.mostraFuncionarios()
