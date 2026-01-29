import { promises } from 'fs'
import { CustomerData } from './customer-data'
import { CustomerDataParser } from './customer-data-parser'

export class CustomerDataParserTxt extends CustomerDataParser {
    protected async parseData(): Promise<CustomerData[]> {
        const data = await promises.readFile(this.filePath, 'utf-8')

        const lines = data.split('\n')

        const customerData: CustomerData[] = []

        for (const line of lines) {
            if (!line.trim()) continue

            const match = line.match(/^(.+?)\s+(\d{1,3})\s+([\d.-]+)$/)

            if (!match) {
                console.warn('Linha inválida:', line)
                continue
            }

            const [, name, age, cpf] = match

            customerData.push({
                name: name.trim(),
                age: age.trim(),
                cpf: cpf.trim(),
            })
        }

        return customerData
    }
}
