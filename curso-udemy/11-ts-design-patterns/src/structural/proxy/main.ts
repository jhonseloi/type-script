import { SystemUserProxy } from './system-user/system-user-proxy'

async function clientCode(): Promise<void> {
    const user = new SystemUserProxy('Marcos', 'marcos_mion')
    console.log('Isso vai levar 1 segundo...')
    console.log(await user.getAddresses())

    console.log('Isso vai se repetir (CACHE)')
    for (let i = 0; i < 3; i++) {
        console.log(await user.getAddresses())
    }
}

clientCode()
