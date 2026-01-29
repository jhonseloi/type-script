import { promises } from 'fs'
import { CustomerDataParser } from './customer-data-parser'
import { CustomerData } from './customer-data'

export class CustomerDataParserJson extends CustomerDataParser {
    protected async parseData(): Promise<CustomerData[]> {
        const data = JSON.parse(await promises.readFile(this.filePath, 'utf-8'))

        const customerData: CustomerData[] = []

        for (const customer of data) {
            const { name, age, cpf } = customer
            customerData.push({ name, age, cpf })
        }

        return customerData
    }
}
