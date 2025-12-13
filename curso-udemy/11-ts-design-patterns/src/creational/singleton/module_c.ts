import { MyDatabaseFunction } from './db/my-database-function'

const myDatabaseFunction = MyDatabaseFunction
myDatabaseFunction.add({ name: 'Heloísa', age: 42 })
myDatabaseFunction.add({ name: 'Paulo', age: 36 })
myDatabaseFunction.add({ name: 'Ana', age: 27 })
myDatabaseFunction.show()
