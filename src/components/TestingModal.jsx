import React from 'react'
import ReactDOM from 'react-dom';

function TestingModal({children}) {
  return ReactDOM.createPortal(
    <>
    {children}
    </>,
     document.getElementById('modal-root')
  )
}

export default TestingModal