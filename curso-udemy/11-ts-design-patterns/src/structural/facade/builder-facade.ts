import { MainDishBuilder } from '../../creational/builder/classes/main-dish-builder'
import { VeganDishBuilder } from '../../creational/builder/classes/vegan-dish-builder'

export class BuilderFacade {
    private mainDishBuilder = new MainDishBuilder()
    private veganDishBuilder = new VeganDishBuilder()

    makeMeal1(): void {
        const meal1 = this.mainDishBuilder.makeMeal().getMeal()
        console.log(meal1)
        console.log(this.mainDishBuilder.getPrice())
    }

    makeMeal2(): void {
        const meal2 = this.mainDishBuilder.makeBeverage().getMeal()
        console.log(meal2)
        console.log(this.mainDishBuilder.getPrice())
    }

    makeMeal3(): void {
        const meal3 = this.veganDishBuilder.makeMeal().getMeal()
        console.log(meal3)
        console.log(this.veganDishBuilder.getPrice())
    }
}
