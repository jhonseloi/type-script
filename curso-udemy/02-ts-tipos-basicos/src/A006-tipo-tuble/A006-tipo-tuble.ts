const dadosCliente1: [number, string] = [8, 'Pedri']
const dadosCliente2: readonly [number, string, string] = [19, 'Lamine', 'Yamal']
const dadosCliente3: [number, string, string?] = [11, 'Raphinha']
const dadosCliente4: [number, ...string[]] = [2, 'Pau', 'Cubarsi', 'Paredes']

dadosCliente1[0] = 6
dadosCliente1[1] = 'Gavi'

console.log(dadosCliente1)
console.log(dadosCliente2)
console.log(dadosCliente3)
console.log(dadosCliente4)
