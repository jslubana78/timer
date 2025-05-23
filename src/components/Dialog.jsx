import React from 'react'

function Dialog({timer, timerMiliSeconds, ref, resetTimer}) {

  let roundOffTimerMiliSeconds = (timerMiliSeconds / 1000).toFixed(2);

  // Calculate how close to 5 seconds
  // const msLeft = 187;
  const tttimer = timer*1000;
  const msElapsed = (tttimer - timerMiliSeconds);
  const score = Math.floor((msElapsed/tttimer)*100);
  // alert(score);
  // console.log({score})

  return (
    <dialog className='result-modal' ref={ref} >
        <h2>{score < 100 ? `Your Score ${score}`: 'You Lost'}</h2>
        
        
        <p>The target time was {timer} seconds.</p>
        <p>You stopped the timer with {roundOffTimerMiliSeconds} seconds left.</p>
        <form method='dialog'>
          <button onClick={resetTimer}>Close</button>
        </form>
    </dialog>
  )
}

export default Dialog