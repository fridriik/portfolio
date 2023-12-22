// AnimatedBackground.js
import React, { useEffect, useState } from 'react';
import './AnimatedBackground.css';

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const AnimatedBackground = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderLines = () => {
    const lines = [];
    for (let i = 0; i < 10; i++) {
      const height = getRandomInt(50, 1000);
      const position = getRandomInt(0, 100);
      const direction = getRandomInt(0, 1) === 0 ? -1 : 1;

      // Limitar la posición en el eje x
      const xPosition = position < 50 ? position * 0.25 : (position - 50) * 0.25 + window.innerWidth - 25;

      lines.push(
        <div
          key={i}
          className="line"
          style={{
            height: `${height}px`,
            left: `${xPosition}px`,
            animationDuration: `${getRandomInt(1, 4)}s`,
            transform: `translateY(${direction * getRandomInt(100, 200)}%)`, // Cambiado
          }}
        ></div>
      );
    }
    return lines;
  };


  return (
    <div className="animated-background" style={{ '--scroll-position': scrollPosition }}>
      {renderLines()}
    </div>
  );
};

export default AnimatedBackground;
