import { FiftyPercentDiscount } from './entities/discount'
import { ShoppingCart } from './entities/shopping-cart'
import { Order } from './entities/order'
import { Messaging } from './services/messaging'
import { Persistency } from './services/persistency'
import { Product } from './entities/product'
import {
    IndividualCustomer,
    // EnterpriseCustomer,
} from './entities/interfaces/costumer'

const fiftyPercentDiscount = new FiftyPercentDiscount()
const shoppingCart = new ShoppingCart(fiftyPercentDiscount)
const messaging = new Messaging()
const persistency = new Persistency()
const individualCustomer = new IndividualCustomer(
    'Cid',
    'Moreira',
    '123.456.789-10',
)
/* const enterpriseCustomer = new EnterpriseCustomer(
    'Empresa',
    '00.000.000/0001-00',
) */
const order = new Order(
    shoppingCart,
    messaging,
    persistency,
    individualCustomer,
    // enterpriseCustomer,
)

shoppingCart.addItem(new Product('Camiseta', 49.9))
shoppingCart.addItem(new Product('Caderno', 10.9))
shoppingCart.addItem(new Product('Lápis', 1.49))

console.log(shoppingCart.items)
console.log(shoppingCart.total())
console.log(shoppingCart.totalWithDicount())
console.log(order.orderStatus)
order.checkout()
console.log(order.orderStatus)
