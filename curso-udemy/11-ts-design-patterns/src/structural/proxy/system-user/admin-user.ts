import {
    SystemUserAddressProtocol,
    SystemUserProtocol,
} from './system-user-protocol'

export class AdminUser implements SystemUserProtocol {
    public firstName: string
    public userName: string

    constructor(firstName: string, userName: string) {
        this.firstName = firstName
        this.userName = userName
    }

    async getAddresses(): Promise<SystemUserAddressProtocol[]> {
        return new Promise((resolve) => {
            return setTimeout(() => {
                return resolve([
                    { street: 'Av. Brasil', number: 100 },
                    { street: 'Av. Josué Alves', number: 50 },
                ])
            }, 1000)
        })
    }
}
