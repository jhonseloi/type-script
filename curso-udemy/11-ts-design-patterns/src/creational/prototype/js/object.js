const personPrototype = {
    firstName: 'Maria',
    lastName: 'Alencar',
    age: 25,

    fullName() {
        return `${this.firstName} ${this.lastName}`
    },
}

const anotherPerson = Object.create(personPrototype)
console.log(anotherPerson)
console.log(anotherPerson.firstName)
console.log(anotherPerson.fullName())

anotherPerson.firstName = 'Jonas'
console.log(anotherPerson)
console.log(anotherPerson.firstName)
console.log(anotherPerson.fullName())
