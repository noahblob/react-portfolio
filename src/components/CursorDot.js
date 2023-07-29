import React, { useState, useEffect } from 'react';

const CursorDot = () => {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);

  const handleMouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    setPosX(x);
    setPosY(y);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: 'fixed',
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          background: '#fff',
          pointerEvents: 'none', // Prevents the dot from interfering with other elements
          left: `${posX}px`,
          top: `${posY}px`,
        }}
      />
      <style>{`
        a, button, TopButton, Link {
          cursor: none; /* Hide the actual cursor when hovering over links */
        }
      `}</style>
    </>
  );
};

export default CursorDot;
