// testes em bloco único
describe('TESTE 1', () => {
    it('should return 1', () => {
        const number = 1
        expect(number).toBe(1)
    })

    test('not should return 10', () => {
        const number = 1
        expect(number).not.toBe(10)
    })
})

// testes em bloco separado
describe('TESTE 2', () => {
    it('not should return José', () => {
        const string = 'Carlos'
        expect(string).not.toBe('José')
    })
})

describe('TESTE 3', () => {
    test('should return Maria', () => {
        const string = 'Maria'
        expect(string).toBe('Maria')
    })
})
