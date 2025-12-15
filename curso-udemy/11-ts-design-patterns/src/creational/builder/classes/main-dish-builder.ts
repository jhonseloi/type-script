import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol'
import { Beans } from './beans'
import { Beverage } from './beverage'
import { Dessert } from './dessert'
import { MealBox } from './meal-box'
import { Meat } from './meat'
import { Rice } from './rice'

export class MainDishBuilder implements MealBuilderProtocol {
    private _meal: MealBox = new MealBox()

    reset(): this {
        this._meal = new MealBox()
        return this
    }

    makeMeal(): this {
        const rice = new Rice('Arroz', 10)
        const beans = new Beans('Feijão', 5)
        const meat = new Meat('Carne', 30)
        this._meal.add(rice, beans, meat)
        return this
    }

    makeBeverage(): this {
        const beverage = new Beverage('Refrigerante', 7)
        this._meal.add(beverage)
        return this
    }

    makeDessert(): this {
        const dessert = new Dessert('Sobremesa', 15)
        this._meal.add(dessert)
        return this
    }

    getMeal(): MealBox {
        return this._meal
    }

    getPrice(): number {
        return this._meal.getPrice()
    }
}
