// Record
const pessoa1: Record<string, string | number> = {
    nome: 'Erling',
    sobrenome: 'Haaland',
    idade: 25,
}
console.log(pessoa1)

type Pessoa = {
    nome?: string
    sobrenome?: string
    idade?: number
}

// Required
type PessoaRequired = Required<Pessoa>
const pessoa2: PessoaRequired = {
    nome: 'Tijani',
    sobrenome: 'Reijnders',
    idade: 27,
}
console.log(pessoa2)

// Partial
type PessoaPartial = Partial<PessoaRequired>
const pessoa3: PessoaPartial = {
    nome: 'Bernardo',
    sobrenome: 'Silva',
}
console.log(pessoa3)

// Readonly
type PessoaReadonly = Readonly<PessoaRequired>
const pessoa4: PessoaReadonly = {
    nome: 'Phil',
    sobrenome: 'Foden',
    idade: 25,
}
console.log(pessoa4)

// Pick
type PessoaPick = Pick<PessoaRequired, 'nome' | 'idade'>
const pessoa5: PessoaPick = {
    nome: 'Savinho',
    idade: 21,
}
console.log(pessoa5)

// Extract e Exclude
type ABC = 'A' | 'B' | 'C'
type CDE = 'C' | 'D' | 'E'
// eslint-disable-next-line
type TipoExclude = Exclude<ABC, CDE>
// eslint-disable-next-line
type TipoExtract = Extract<ABC, CDE>

/**/
type AccountMongo = {
    _id: string
    nome: string
    sobrenome: string
    idade: number
}

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
    id: string
}

const accountMongo: AccountMongo = {
    _id: 'a6a46g45g46452g39575hdte35',
    nome: 'Gianluigi',
    sobrenome: 'Donnarumma',
    idade: 26,
}

function mapAccount(accountMongo: AccountMongo): AccountApi {
    const { _id, ...accountData } = accountMongo
    return { ...accountData, id: _id }
}

const accountApi = mapAccount(accountMongo)
console.log('API')
console.log(accountApi)

// module mode
export default 1
