function First() {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor,
    ) {
        const original = descriptor.value
        descriptor.value = function (...args: any[]) {
            console.log('Executando First')
            return original.apply(this, args)
        }
    }
}

function Second() {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor,
    ) {
        const original = descriptor.value
        descriptor.value = function (...args: any[]) {
            console.log('Executando Second')
            return original.apply(this, args)
        }
    }
}

export class Example {
    @First()
    @Second()
    method() {
        console.log('Método chamado')
    }
}

const example = new Example()
example.method()
