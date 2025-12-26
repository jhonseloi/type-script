import { RemoteControl } from './remote-control/remote-control'
import { RemoteControlWithVolume } from './remote-control/remote-control-with-volume'
import { Radio } from './device/radio'
import { Tv } from './device/tv'

export function Client(
    abstraction: RemoteControl | RemoteControlWithVolume,
): void {
    abstraction.togglePower()

    if (!('volumeUp' in abstraction)) return

    abstraction.volumeUp()
    abstraction.volumeUp()
    abstraction.volumeDown()
}

const tv = new Tv()
const radio = new Radio()

const tvRemoteControl = new RemoteControlWithVolume(tv)
const radioRemoteControl = new RemoteControlWithVolume(radio)
Client(tvRemoteControl)
Client(radioRemoteControl)
