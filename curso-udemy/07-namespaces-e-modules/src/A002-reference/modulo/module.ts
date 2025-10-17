/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-unused-vars */
namespace MeuNamespace {
    export const nomeDoNamespace = 'Joel Santos'

    export class PessoaDoNamespace {
        constructor(public nome: string) {}
    }

    const pessoaDoNamespace = new PessoaDoNamespace('Maria')
    console.log(pessoaDoNamespace)
    console.log('###')

    export namespace OutroNamespace {
        export const nomeDoNamespace = 'Nome do outro namespace'
    }
}
