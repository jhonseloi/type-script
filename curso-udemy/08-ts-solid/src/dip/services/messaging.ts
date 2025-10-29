import { MessagingProtocol } from '../entities/interfaces/messaging-protocol'

export class Messaging implements MessagingProtocol {
    sendMessage(msg: string) {
        console.log('Mensagem enviada:', msg)
    }
}
