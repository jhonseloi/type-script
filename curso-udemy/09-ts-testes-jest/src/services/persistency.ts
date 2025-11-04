import { PersistencyProtocol } from '../entities/interfaces/persistency-protocol'

export class Persistency implements PersistencyProtocol {
    saveOrder() {
        console.log('Pedido salvo com sucesso!')
    }
}
