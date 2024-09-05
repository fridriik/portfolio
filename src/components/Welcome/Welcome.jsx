import React, { useEffect, useState, forwardRef } from "react";
import './Welcome.css'

const WelcomeMessage = forwardRef((props, ref) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = ['DISEÑADOR UX - UI', 'DISEÑO DE PRODUCTO', 'DESARROLLADOR FULLSTACK'];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isDeleting) {
        setText((prevText) => prevText.slice(0, prevText.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      } else {
        setText(roles[index].slice(0, text.length + 1));
        if (text === roles[index]) {
          setIsDeleting(true);
        }
      }
    }, isDeleting ? 100 : 200);

    return () => clearTimeout(timer);
  }, [text, index, isDeleting]);

  return (
    <div ref={ref} className="welcome">
      <div>
        <h1 className="header1 glitch is-glitching" data-text="FRIDRIIK">FRIDRIIK</h1>
      </div>
      <div className="roles">
        <h4 className="header4 typing-demo">{text}</h4>
      </div>
    </div>
  );
});

export default WelcomeMessage;
