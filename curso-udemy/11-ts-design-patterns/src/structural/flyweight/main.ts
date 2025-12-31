import { deliveryContext } from './delivery/delivery-context'
import { DeliveryFactory } from './delivery/delivery-factory'

const factory = new DeliveryFactory()
deliveryContext(factory, 'José', '20A', 'Av. Brasil', 'SP')
deliveryContext(factory, 'Maria', '20A', 'Av. Brasil', 'SP')
deliveryContext(factory, 'Helena', '350', 'Av. Brasil', 'SP')
deliveryContext(factory, 'Luis', '211', 'Rua B.', 'RJ')

console.log()
console.log(factory.getLocations())
