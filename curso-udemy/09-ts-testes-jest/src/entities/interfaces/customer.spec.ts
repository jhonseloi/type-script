import { IndividualCustomer, EnterpriseCustomer } from './customer'

const createIndividualCustomer = (
    firstName: string,
    lastName: string,
    cpf: string,
): IndividualCustomer => {
    return new IndividualCustomer(firstName, lastName, cpf)
}

const createEnterpriseCustomer = (
    name: string,
    cnpj: string,
): EnterpriseCustomer => {
    return new EnterpriseCustomer(name, cnpj)
}

afterEach(() => jest.clearAllMocks())

describe('IndividualCustomer', () => {
    it('should have firstName, lastName and cpf', () => {
        const sut = createIndividualCustomer('Carlos', 'Santos', '111.111')
        expect(sut).toHaveProperty('firstName', 'Carlos')
        expect(sut).toHaveProperty('lastName', 'Santos')
        expect(sut).toHaveProperty('cpf', '111.111')
    })

    it('should have methods to get name and idn for individual customer', () => {
        const sut = createIndividualCustomer('Carlos', 'Santos', '111.111')
        expect(sut.getName()).toBe('Carlos Santos')
        expect(sut.getIDN()).toBe('111.111')
    })
})

describe('EnterpriseCustomer', () => {
    it('should have name and cnpj', () => {
        const sut = createEnterpriseCustomer('YouTube', '000.000')
        expect(sut).toHaveProperty('name', 'YouTube')
        expect(sut).toHaveProperty('cnpj', '000.000')
    })

    it('should have methods to get name and idn for enterprise customer', () => {
        const sut = createEnterpriseCustomer('YouTube', '000.000')
        expect(sut.getName()).toBe('YouTube')
        expect(sut.getIDN()).toBe('000.000')
    })
})
