import { ShoppingCartMock } from './order-mocks'

const createSut = () => {
    return new ShoppingCartMock()
}

describe('ShoppingCartMock', () => {
    const sut = createSut()

    it('should return items an empty array', () => {
        expect(sut.items).toEqual([])
    })

    it('should addItem not throw', () => {
        expect(() => sut.addItem({ name: 'Test', price: 10 })).not.toThrow()
    })

    it('should removeItem not throw', () => {
        expect(() => sut.removeItem(0)).not.toThrow()
    })

    it('should return total', () => {
        expect(sut.total()).toBe(1)
    })
})
