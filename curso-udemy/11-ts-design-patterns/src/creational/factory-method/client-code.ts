import { CarFactory } from './factories/car-factory'
import { randomVehicleAlgorithm } from './main/random-vehicle-algorithm'
import { randomNumbers } from './utils/random-numbers'

const carFactory = new CarFactory()
const strada = carFactory.getVehicle('Fiat Strada')
strada.pickUp('Juan')
strada.stop()

for (let i = 0; i < 5; i++) {
    const cars = randomVehicleAlgorithm()
    const customerNames = ['Diego', 'Gabriela', 'Laura', 'Ricardo']
    const name = customerNames[randomNumbers(customerNames.length)]
    cars.pickUp(name)
    cars.stop()
}
