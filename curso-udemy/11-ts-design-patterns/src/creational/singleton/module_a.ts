import { MyDatabaseClassic } from './db/my-database-classic'

const myDatabaseClassic = MyDatabaseClassic.instance
myDatabaseClassic.add({ name: 'Rogério', age: 33 })
myDatabaseClassic.add({ name: 'Luísa', age: 24 })
myDatabaseClassic.add({ name: 'Marcelo', age: 40 })
myDatabaseClassic.show()

export { myDatabaseClassic }
