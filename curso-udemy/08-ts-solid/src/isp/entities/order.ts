import { ShoppingCart } from './shopping-cart'
import { OrderStatus } from './interfaces/order-status'
import { Messaging } from '../services/messaging'
import { Persistency } from '../services/persistency'
import { CostumerOrder } from './interfaces/costumer-protocol'

export class Order {
    private _orderStatus: OrderStatus = 'open'

    constructor(
        private readonly cart: ShoppingCart,
        private readonly messaging: Messaging,
        private readonly persistency: Persistency,
        private readonly costumer: CostumerOrder,
    ) {}

    get orderStatus(): OrderStatus {
        return this._orderStatus
    }

    checkout(): void {
        if (this.cart.isEmpty()) {
            console.log('Seu carrinho está vazio.')
            return
        }

        this._orderStatus = 'closed'
        this.messaging.sendMessage(
            `Seu pedido com total de ${this.cart.totalWithDicount()} foi recebido.`,
        )
        this.persistency.saveOrder()
        this.cart.clear()

        console.log(
            `O cliente é ${this.costumer.getName()}, CPF/CNPJ: ${this.costumer.getIDN()}`,
        )
    }
}
