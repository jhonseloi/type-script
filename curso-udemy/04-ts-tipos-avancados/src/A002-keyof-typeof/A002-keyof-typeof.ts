const coresObj = {
    vermelho: 'red',
    verde: 'green',
    azul: 'blue',
}

type CoresTipo = typeof coresObj
// CoresTipo agora é { vermelo: string, verde: string, azul: string }
type CoresChaves = keyof CoresTipo
// CoresChaves vira "vermelho" | "verde" | '"azul"'

function traduzirCores(cor: CoresChaves, cores: CoresTipo) {
    return cores[cor]
}

console.log(traduzirCores('vermelho', coresObj))
console.log(traduzirCores('verde', coresObj))
console.log(traduzirCores('azul', coresObj))
