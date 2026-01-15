import { ECommerceShoppingCart } from './shopping-cart/e-commerce-shopping-cart'
import { DefaultDiscount } from './shopping-cart/discount-strategy/default-discount'
// import { newDiscount } from './shopping-cart/discount-strategy/new-discount'

const shoppingCart = new ECommerceShoppingCart()
shoppingCart.discount = new DefaultDiscount()
// shoppingCart.discount = new newDiscount()

shoppingCart.addProduct({ name: 'Produto 1', price: 100 })
console.log(shoppingCart.getTotal())
console.log(shoppingCart.getTotalWithDiscount())

shoppingCart.addProduct({ name: 'Produto 2', price: 100 })
console.log(shoppingCart.getTotal())
console.log(shoppingCart.getTotalWithDiscount())

shoppingCart.addProduct({ name: 'Produto 3', price: 100 })
console.log(shoppingCart.getTotal())
console.log(shoppingCart.getTotalWithDiscount())
