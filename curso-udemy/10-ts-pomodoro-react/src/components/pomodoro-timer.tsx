import { useEffect, useState, useCallback, useMemo } from 'react'
import { useInterval } from '../hooks/use-interval'
import { Button } from './button'
import { Timer } from './timer'
import { secondsToTime } from '../utils/seconds-to-time'

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
    const cyclesFilled = useMemo(
        () => new Array(props.cycles - 1).fill(true),
        [props.cycles]
    )

    const [mainTime, setMainTime] = useState(props.pomodoroTime)
    const [timeCounting, setTimeCounting] = useState(false)
    const [working, setWorking] = useState(false)
    const [resting, setResting] = useState(false)
    const [cyclesQtdManager, setCyclesQtdManager] = useState(cyclesFilled)
    const [completedCycles, setCompletedCycles] = useState(0)
    const [fullWorkingTime, setFullWorkingTime] = useState(0)
    const [numberOfPomodoros, setNumberOfPomodoros] = useState(0)

    useInterval(() => {
        setMainTime(prev => prev - 1)
        if (working) setFullWorkingTime(prev => prev + 1)
    }, timeCounting ? 1000 : null)

    const configureWork = useCallback(() => {
        setTimeCounting(true)
        setWorking(true)
        setResting(false)
        setMainTime(props.pomodoroTime)
        audioStartWorking.play()
    }, [props.pomodoroTime])

    const configureRest = useCallback((long: boolean) => {
        setTimeCounting(true)
        setWorking(false)
        setResting(true)
        setMainTime(long ? props.longRestTime : props.shortRestTime)
        audioStopWorking.play()
    }, [props.longRestTime, props.shortRestTime])

    useEffect(() => {
        if (working) document.body.classList.add('working')
        if (resting) document.body.classList.remove('working')

        if (mainTime > 0) return

        if (working) {
            setNumberOfPomodoros(prev => prev + 1)

            if (cyclesQtdManager.length > 0) {
                configureRest(false)
                setCyclesQtdManager(prev => prev.slice(0, -1))
            } else {
                configureRest(true)
                setCyclesQtdManager(cyclesFilled)
                setCompletedCycles(prev => prev + 1)
            }
        } else if (resting) {
            configureWork()
        }

    }, [
        working,
        resting,
        mainTime,
        cyclesQtdManager.length,
        configureRest,
        configureWork,
        cyclesFilled
    ])

    return (
        <div className='pomodoro'>
            <h2>Você está: {working ? 'Trabalhando' : 'Descansando'}</h2>
            <Timer mainTime={mainTime} />
            <div className='controls'>
                <Button text='Work' onClick={configureWork} />
                <Button text='Rest' onClick={() => configureRest(false)} />
                <Button
                    className={!working && !resting ? 'hidden' : ''}
                    text={timeCounting ? 'Pause' : 'Play'}
                    onClick={() => setTimeCounting(prev => !prev)}
                />
            </div>
            <div className='details'>
                <p>Ciclos concluídos: {completedCycles}</p>
                <p>Horas trabalhadas: {secondsToTime(fullWorkingTime)}</p>
                <p>Pomodoros concluídos: {numberOfPomodoros}</p>
            </div>
        </div>
    )
}
