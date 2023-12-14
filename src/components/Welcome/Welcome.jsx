import React, { forwardRef } from "react";
import './Welcome.css'

const WelcomeMessage = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="welcome">
      <div>
        <h1 className="header1">FRIDRIIK</h1>
      </div>
      <div className="roles">
        <div className="rol-1">
          <h4 className="header4">SYSTEM ANALYST</h4>
        </div>
        <div className="rol-2">
          <h4 className="header4">FRONT-END DEV</h4>
        </div>
        <div className="rol-3">
          <h4 className="header4">UX/UI DESIGNER</h4>
        </div>
      </div>
    </div>
  );
});
export default WelcomeMessage;
