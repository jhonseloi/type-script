export function funcao(this: Date, nome: string, age: number) {
    console.log(this)
    console.log(nome, age)
}

funcao.call(new Date(), 'Lucas', 30)
funcao.apply(new Date(), ['Antonio', 40])
