export class Database {
    // Singleton - GoF
    private static database: Database

    private constructor(
        private host: string,
        private user: string,
        private password: string,
    ) {}

    connect(): void {
        console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`)
    }

    // Factory Method - GoF
    static getInstance(host: string, user: string, password: string): Database {
        if (Database.database) {
            console.log('RETORNANDO INSTÂNCIA JÁ CRIADA:')
            return Database.database
        }
        console.log('CRIANDO NOVA INSTÂNCIA:')
        Database.database = new Database(host, user, password)
        return Database.database
    }
}

// Apenas os primeiros valores estabelecidos serão retornados
const db1 = Database.getInstance('localhost', 'root', '123456')
db1.connect()

// Valores não retornados
const db2 = Database.getInstance('localhost2', 'root2', '222222')
db2.connect()
const db3 = Database.getInstance('localhost3', 'root3', '333333')
db3.connect()
