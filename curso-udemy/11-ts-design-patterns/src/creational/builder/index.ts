import { MainDishBuilder } from './classes/main-dish-builder'
import { VeganDishBuilder } from './classes/vegan-dish-builder'

const mainDishBuilder = new MainDishBuilder()
const veganDishBuilder = new VeganDishBuilder()

const meal1 = mainDishBuilder.makeMeal().getMeal()
console.log(meal1)
console.log(mainDishBuilder.getPrice())
mainDishBuilder.reset()

const meal2 = mainDishBuilder.makeBeverage().getMeal()
console.log(meal2)
console.log(mainDishBuilder.getPrice())
mainDishBuilder.reset()

const meal3 = veganDishBuilder.makeMeal().getMeal()
console.log(meal3)
console.log(veganDishBuilder.getPrice())
