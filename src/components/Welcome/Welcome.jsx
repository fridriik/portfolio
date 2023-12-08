import React from 'react';
import './Welcome.css'

const WelcomeMessage = () => {
  return (
    <div className="welcome">
      <div>
        <h1 className="header1">FRIDRIIK</h1>
      </div>
      <div className="roles">
        <div className="rol-1">
          <h3 className="header3">SYSTEM ANALYST</h3>
        </div>
          <h3 className="header3">FRONT-END DEV</h3>
          <h3 className="header3">UX/UI DESIGNER</h3>
      </div>
    </div>
  );
};

export default WelcomeMessage;
