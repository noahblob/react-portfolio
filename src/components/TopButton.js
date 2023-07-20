import { useState, useEffect } from 'react';

export default function TopButton() {
  const [topButton, setTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setTopButton(true);
      } else {
        setTopButton(false);
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div>
      {topButton && (
        <button style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          height: '3rem',
          width: '3rem',
          borderRadius: '50%',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          background: 'linear-gradient(#e66465, #9198e5)'
        }} onClick={scrollUp}>^</button>
      )}
    </div>
  )
}