import { ShoppingOrder } from './shopping-order/shopping-order'

const order = new ShoppingOrder() // Pendente

order.approvePayment() // Aprovado
order.shipOrder()

order.waitPayment() // Pendente
order.shipOrder()

order.rejectPayment() // Rejeitado
order.shipOrder()

// Depois de rejeitado, o estado não mudará mais
order.waitPayment()
order.approvePayment()
order.rejectPayment()
