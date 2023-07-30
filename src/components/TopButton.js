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
    <>
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
        }} onClick={scrollUp}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M205.66,117.66a8,8,0,0,1-11.32,0L136,59.31V216a8,8,0,0,1-16,0V59.31L61.66,117.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,205.66,117.66Z"></path></svg></button>
      )}
    </>
  )
}