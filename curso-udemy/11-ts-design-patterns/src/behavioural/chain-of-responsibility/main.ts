import { CEOBudgetHandler } from './budget/ceo-budget-handler'
import { CustomerBudget } from './budget/customer-budget'
import { DirectorBudgetHandler } from './budget/director-budget-handler'
import { ManagerBudgetHandler } from './budget/manager-budget-handler'
import { SellerBudgetHandler } from './budget/seller-budget-handler'

const customerBudget1 = new CustomerBudget(1000)
const customerBudget2 = new CustomerBudget(5000)
const customerBudget3 = new CustomerBudget(50000)
const customerBudget4 = new CustomerBudget(50001)

const seller = new SellerBudgetHandler()
seller
    .setNextHandler(new ManagerBudgetHandler())
    .setNextHandler(new DirectorBudgetHandler())
    .setNextHandler(new CEOBudgetHandler())

seller.handle(customerBudget1)
console.log(customerBudget1)

seller.handle(customerBudget2)
console.log(customerBudget2)

seller.handle(customerBudget3)
console.log(customerBudget3)

seller.handle(customerBudget4)
console.log(customerBudget4)
