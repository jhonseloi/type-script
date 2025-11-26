import { useEffect, useState } from 'react'
import { useInterval } from '../hooks/use-interval'
import { Button } from './button'
import { Timer } from './timer'
import { secondsToTime } from '../utils/second-to-time'

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
    const cyclesFilled = new Array(props.cycles - 1).fill(true)
    
    const [mainTime, setMainTime] = useState(props.pomodoroTime)
    const [timeCouting, setTimeCouting] = useState(false)
    const [working, setWorking] = useState(false)
    const [resting, setResting] = useState(false)
    const [cyclesQtdManager, setCyclesQtdManager] = useState(cyclesFilled)
    const [completedCycles, setCompletedCycles] = useState(0)
    const [fullWorkingTime, setFullWorkingTime] = useState(0)
    const [numberOfPomodoros, setNumberOfPomodoros] = useState(0)

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

    useEffect(() => {
        if (working) document.body.classList.add('working')
        if (resting) document.body.classList.remove('working')

        if (mainTime > 0) return

        if (working && cyclesQtdManager.length > 0) {
            configureRest(false)
            cyclesQtdManager.pop()
        } else if (working && cyclesQtdManager.length <= 0) {
            configureRest(true)
            setCyclesQtdManager(cyclesFilled)
            setCompletedCycles(completedCycles + 1)
        }
    }, [
        working,
        resting,
        mainTime,
        cyclesQtdManager,
        numberOfPomodoros,
        completedCycles,
        configureRest,
        setCyclesQtdManager,
        configureWork,
        props.cycles,
    ])

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
                <p>Ciclos comcluídos: {completedCycles}</p>
                <p>Horas trabalhadas: {secondsToTime(fullWorkingTime)}</p>
                <p>Pomodoros concluídos: {numberOfPomodoros}</p>
            </div>
        </div>
    )
}
