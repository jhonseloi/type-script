/* eslint-disable @typescript-eslint/no-unused-vars */
import { ShoppingCartProtocol } from './shopping-cart-protocol'
import { CartItem } from './cart-item'
import { MessagingProtocol } from './messaging-protocol'
import { PersistencyProtocol } from './persistency-protocol'
import { CustomerOrder } from './customer-protocol'

export class ShoppingCartMock implements ShoppingCartProtocol {
    get items(): Readonly<CartItem[]> {
        return []
    }
    addItem(item: CartItem): void {}
    removeItem(index: number): void {}
    total(): number {
        return 1
    }
    totalWithDiscount(): number {
        return 2
    }
    isEmpty(): boolean {
        return false
    }
    clear(): void {}
}

export class MessagingMock implements MessagingProtocol {
    sendMessage() {}
}

export class PersistencyMock implements PersistencyProtocol {
    saveOrder() {}
}

export class CustomerMock implements CustomerOrder {
    getName() {
        return ''
    }

    getIDN() {
        return ''
    }
}
