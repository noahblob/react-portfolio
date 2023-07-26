import Fade from 'react-reveal/Fade';
import { HashLink as Link } from 'react-router-hash-link';

export default function Home() {
  return (
    <div className='fullscreen w-50'>
      <div className='col'>
        <Fade top>
          <h1 className='h1 text-white text-left w-100'>Hi there! I'm <strong>Noah Hagar-Dent</strong>, a Software Engineering student at the University of Auckland.</h1>
          <Link to='#about' smooth style={{ color: '#fff' }}><button className='h4 nice-button p-2' href=''>Learn more about me</button></Link>
        </Fade>
      </div>
    </div>
  );
}