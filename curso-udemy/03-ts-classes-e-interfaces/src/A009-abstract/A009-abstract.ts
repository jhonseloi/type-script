export abstract class Personagem {
    constructor(
        protected nome: string,
        protected ataque: number,
        protected vida: number,
    ) {}

    protected abstract emoji: string

    atacar(personagem: Personagem): void {
        this.bordao()
        personagem.perderVida(this.ataque)
    }

    perderVida(forcaAtaque: number): void {
        this.vida -= forcaAtaque
        console.log(
            `${this.emoji} ${this.nome} agora tem ${this.vida} de vida...`,
        )
    }

    abstract bordao(): void
}

export class Guerreira extends Personagem {
    protected emoji = '\u{1F9DD}'

    bordao(): void {
        console.log(`${this.emoji} WARRIOR KICK!!!`)
    }
}

export class Monstro extends Personagem {
    protected emoji = '\u{1F9DF}'

    bordao(): void {
        console.log(`${this.emoji} MONSTER SPLASH ATTACK!!!`)
    }
}

const guerreira = new Guerreira('Guerreira', 100, 1000)
const monstro = new Monstro('Monstro', 90, 1000)

guerreira.atacar(monstro)
monstro.atacar(guerreira)
guerreira.atacar(monstro)
monstro.atacar(guerreira)
guerreira.atacar(monstro)
monstro.atacar(guerreira)
