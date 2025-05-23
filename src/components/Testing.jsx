import React, { useEffect, useRef, useState } from 'react';
import './Testing.css'
import TestingModal from './TestingModal';

function Testing() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container">
      <h2>Scroll Container (overflow: hidden)</h2>
      <button onClick={() => setShowModal(true)}>Show Modal</button>

      {showModal && (
        <TestingModal>
          <div className="modal">
            <p>This modal may be clipped!</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </TestingModal>
        
      )}
    </div>
  );
}

export default Testing