/* eslint-disable @typescript-eslint/no-namespace */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
namespace MeuNamespace {
    const nome = 'Carlos'
    console.log(nome)

    class Pessoa {
        constructor(public nome: string) {}
    }

    const pessoa = new Pessoa('João')
    console.log(pessoa)
}

console.log('########')

namespace NamespaceExport {
    export const animal = 'Rato'

    export class Animal {
        constructor(public animal: string) {}
    }

    const a = new Animal('Cachorro')
    console.log(a)
    console.log('########')

    export namespace OutroNamespace {
        export const outroNamespace =
            'Chamando namespace dentro de outro namespace.'
    }
}

console.log(NamespaceExport.animal)
console.log('########')

const a = new NamespaceExport.Animal('Gato')
console.log(a)
console.log('########')

console.log(NamespaceExport.OutroNamespace.outroNamespace)

export default 1
