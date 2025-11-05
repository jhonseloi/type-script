// bloco único
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

// blocos separados
describe('TESTE 2', () => {
    it('not should return José', () => {
        const name = 'Carlos'
        expect(name).not.toBe('José')
    })
})

describe('TESTE 3', () => {
    test('should return Maria', () => {
        const name = 'Maria'
        expect(name).toBe('Maria')
    })
})
