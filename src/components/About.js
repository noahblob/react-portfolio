import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';

import profile from '../resources/profile-pic.jpg';

import javaicon from '../resources/icons/java.svg';
import htmlicon from '../resources/icons/html.svg';
import cssicon from '../resources/icons/css.svg';
import javascripticon from '../resources/icons/javascript.svg';
import pythonicon from '../resources/icons/python.svg';

export default function About() {
  return (
    <div className='fullscreen'>
      <div className='container-fluid text-center'>
        <div className='row'>
          <div className='col-lg my-auto'>
            <img src={profile} alt='Profile' className='img-fluid rounded-circle p-5' height='500' width='500' />
            <h2>About Me</h2>
            <p>I'm an aspiring Software Engineer based in Auckland, New Zealand. I am passionate about front-end and back-end development and I consistently strive to do my best in all areas of my life: Personal, professional and academic.</p>
          </div>
          <div className='col-lg my-auto'>
            <h2>My Tech Stack</h2>

            <Tooltip placement='bottom' overlay={<span>Java</span>}>
              <img src={javaicon} alt='Java' className='icon img-fluid p-2' />
            </Tooltip>

            <Tooltip placement='bottom' overlay={<span>HTML</span>}>
              <img src={htmlicon} alt='HTML' className='icon img-fluid p-2' />
            </Tooltip>

            <Tooltip placement='bottom' overlay={<span>CSS</span>}>
              <img src={cssicon} alt='CSS' className='icon img-fluid p-2' />
            </Tooltip>

            <Tooltip placement='bottom' overlay={<span>JavaScript</span>}>
              <img src={javascripticon} alt='JavaScript' className='icon img-fluid p-2' />
            </Tooltip>

            <Tooltip placement='bottom' overlay={<span>Python</span>}>
              <img src={pythonicon} alt='Python' className='icon img-fluid p-2' />
            </Tooltip>

            <p>Being relatively new to software engineering, I am always looking for new ways to challenge myself and learn new programming skills. I look to expand my tech stack further in the future as well as hone my current skills.</p>
          </div>
        </div>
      </div>
    </div>
  )
}