import React, {
  useEffect,
  useImperativeHandle,
  forwardRef,
  useRef,
} from 'react'

const Dialog = forwardRef(({ timer, timerMiliSeconds, resetTimer }, ref) => {
  const localDialogRef = useRef(null)

  // Expose dialog methods to parent via ref
  useImperativeHandle(ref, () => ({
    showModal: () => localDialogRef.current?.showModal(),
    close: () => localDialogRef.current?.close(),
  }))

  useEffect(() => {
    const dialog = localDialogRef.current

    const handleCancel = (e) => {
      e.preventDefault() // optional: prevent auto close
      resetTimer() // call reset on Esc
      dialog.close() // close manually
    }

    const handleClose = () => {
      resetTimer()
    }

    dialog.addEventListener('cancel', handleCancel)
    dialog.addEventListener('close', handleClose)

    return () => {
      dialog.removeEventListener('cancel', handleCancel)
      dialog.removeEventListener('close', handleClose)
    }
  }, [resetTimer])

  const roundOffTimerMiliSeconds = (timerMiliSeconds / 1000).toFixed(2)
  const totalTimeMs = timer * 1000
  const msElapsed = totalTimeMs - timerMiliSeconds
  const score = Math.floor((msElapsed / totalTimeMs) * 100)

  return (
    <dialog className='result-modal' ref={localDialogRef}>
      <h2>{score < 100 ? `Your Score ${score}` : 'You Lost'}</h2>
      <p>The target time was {timer} seconds.</p>
      <p>You stopped the timer with {roundOffTimerMiliSeconds} seconds left.</p>
      <form method='dialog'>
        <button type='submit'>Close</button>
      </form>
    </dialog>
  )
})

export default Dialog
