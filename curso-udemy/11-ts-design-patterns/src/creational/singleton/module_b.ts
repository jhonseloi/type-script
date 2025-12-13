import { MyDatabaseClassic } from './db/my-database-classic'
import { myDatabaseClassic as myDatabaseFromModuleA } from './module_a'
import { MyDatabaseModule } from './db/my-database-module'

const myDatabaseClassic = MyDatabaseClassic.instance
const myDatabaseModule = MyDatabaseModule

myDatabaseModule.add({ name: 'Igor', age: 21 })
myDatabaseModule.add({ name: 'Maria', age: 35 })
myDatabaseModule.add({ name: 'Daniel', age: 44 })
myDatabaseModule.show()

console.log(myDatabaseClassic === myDatabaseFromModuleA)
