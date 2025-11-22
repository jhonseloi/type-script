import React, { useEffect } from 'react'
import { useInterval } from '../hooks/use-interval'
import { Button } from './button'
import { Timer } from './timer'

const bellStart = require('../sounds/bell-start.mp3')
const bellFinish = require('../sounds/bell-finish.mp3')
const audioStartWorking = new Audio(bellStart)
const audioStopWorking = new Audio(bellFinish)

interface Props {
    pomodoroTime: number
    shortRestTime: number
    longRestTime: number
    cycles: number
}

export function PomodoroTimer(props: Props) {
    const [mainTime, setMainTime] = React.useState(props.pomodoroTime)
    const [timeCouting, setTimeCouting] = React.useState(false)
    const [working, setWorking] = React.useState(false)
    const [resting, setResting] = React.useState(false)

    useEffect(() => {
        if (working) document.body.classList.add('working')
        if (resting) document.body.classList.remove('working')
    }, [working, resting])

    useInterval(() => {
        setMainTime(mainTime - 1)
    }, timeCouting ? 1000 : null)

    const configureWork = () => {
        setTimeCouting(true)
        setWorking(true)
        setResting(false)
        setMainTime(props.pomodoroTime)
        audioStartWorking.play()
    }

    const configureRest = (long: boolean) => {
        setTimeCouting(true)
        setWorking(false)
        setResting(true)

        if (long) {
            setMainTime(props.longRestTime)
        } else {
            setMainTime(props.shortRestTime)
        }

        audioStopWorking.play()
    }

    return (
        <div className='pomodoro'>
            <h2>You are: working</h2>
            <Timer mainTime={mainTime} />
            <div className='controls'>
                <Button text='Work' onClick={() => configureWork()}></Button>
                <Button text='Rest' onClick={() => configureRest(false)}></Button>
                <Button
                    className={!working && !resting ? 'hidden' : ''}
                    text={timeCouting ? 'Pause' : 'Play'}
                    onClick={() => setTimeCouting(!timeCouting)}
                ></Button>
            </div>
            <div className='details'>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </div>
        </div>
    )
}
