import { CarFactory } from '../factories/car-factory'
import { randomNumbers } from '../utils/random-numbers'
import { Vehicle } from '../vehicle/vehicle'

export function randomVehicleAlgorithm(): Vehicle {
    const carFactory = new CarFactory()
    const car1 = carFactory.getVehicle('Toro')
    const car2 = carFactory.getVehicle('Hilux')
    const car3 = carFactory.getVehicle('Silverado')
    const cars = [car1, car2, car3]

    return cars[randomNumbers(cars.length)]
}
