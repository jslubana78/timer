import React, { useRef, useState } from 'react'
import Dialog from './Dialog';


function Challenge({title, timer}) {
    // let timerMiliSeconds = timer*1000;
    const [timerMiliSeconds, setTimerMiliSeconds] = useState(timer*1000);
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    let timerId = useRef(null);
    let dialogRef = useRef(null);

    const gameStartHandle = () => {
        setTimerStarted(true)

        timerId.current = setInterval(() => {
    setTimerMiliSeconds((prevValue) => {
        const updatedValue = prevValue - 10;

        if (updatedValue <= 0) {
            clearInterval(timerId.current);
            setTimerExpired(true);
            dialogRef.current?.showModal();
            return 0; // don't go negative
        }

        return updatedValue;
    });
}, 10);
    }

    const gameStopHandle = () => {
        clearInterval(timerId.current);
        dialogRef.current.showModal();
        // console.log({timerMiliSeconds});
    }

    const resetTimer = () => {
        clearInterval(timerId.current);
        // alert("sdfdf");
        setTimerStarted(false)
        setTimerExpired(false)
        if (dialogRef.current) {
            dialogRef.current.close();
        }
        setTimerMiliSeconds(timer*1000)
        
    }
    
    // console.log(timerId.current)

    return (
        <>
        <Dialog ref={dialogRef} timer={timer} timerMiliSeconds={timerMiliSeconds} resetTimer={resetTimer}/>
        <div className='challenge'>
            <h2>{title}</h2>
            {timerExpired ? 'You lost!': ''}
            <p className='challenge-time'>{timer} second{timer > 1 ? 's': ''}</p>
            <button onClick={timerStarted ? gameStopHandle : gameStartHandle}>{timerStarted ? 'Stop' : 'Start'} Challenge</button>
            <p className={timerStarted ? 'active' : undefined}>
                {timerStarted ? 'Timer running...': 'Timer Inactive'}
            </p>
        </div>
        </>
    )
}

export default Challenge