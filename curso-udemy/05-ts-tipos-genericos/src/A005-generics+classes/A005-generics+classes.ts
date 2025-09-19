export class Pilha<T> {
    private contador = 0
    private elementos: { [k: number]: T } = {}

    push(elemento: T): void {
        this.elementos[this.contador] = elemento
        this.contador++
    }

    pop(): T | void {
        if (this.isEmpty()) return undefined
    }

    peek(): T | undefined {
        this.contador--
        const elemento = this.elementos[this.contador]
        delete this.elementos[this.contador]
        return elemento
    }

    isEmpty(): boolean {
        return this.contador === 0
    }

    size(): number {
        return this.contador
    }

    mostrarPilha(): void {
        for (const chave in this.elementos) {
            console.log(this.elementos[chave])
        }
    }
}

const pilha = new Pilha<number | string>()
pilha.push(1)
pilha.push(2)
pilha.push(3)
pilha.push('4')
pilha.mostrarPilha()

while (!pilha.isEmpty()) {
    console.log(pilha.peek())
}

console.log(pilha.pop())
console.log(pilha.size())
