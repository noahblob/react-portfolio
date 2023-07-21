import Fade from 'react-reveal/Fade';

export default function Home() {
  return (
    <div className='fullscreen w-100'>
      <Fade top>
        <h1 className='h1 text-white text-left w-100'>Hi there! I'm <strong>Noah Hagar-Dent</strong>, a Software Engineering student at the University of Auckland.</h1>
      </Fade>
      <ul className='background'>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}