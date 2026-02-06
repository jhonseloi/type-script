import { AlcoholicDrink } from './alcoholic-drink'
import { BrazilTaxVisitor } from './brazil-tax-visitor'
import { Cigarette } from './cigarette'
import { Food } from './food'
import { USATaxVisitor } from './usa-tax-visitor'

const food = new Food(10)
const cigarette = new Cigarette(5)
const alcoholicDrink = new AlcoholicDrink(5)

const brazilTaxVisitor = new BrazilTaxVisitor()
const usaTaxVisitor = new USATaxVisitor()

const cart = [food, cigarette, alcoholicDrink]
const total = cart.reduce((sum, item) => item.getPrice() + sum, 0)
const totalWithTaxesBrazil = cart.reduce(
    (sum, item) => item.getPriceWithTaxes(brazilTaxVisitor) + sum,
    0,
)
const totalWithTaxesUSA = cart.reduce(
    (sum, item) => item.getPriceWithTaxes(usaTaxVisitor) + sum,
    0,
)

console.log(total)
console.log(totalWithTaxesBrazil)
console.log(totalWithTaxesUSA)
