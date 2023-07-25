import Fade from 'react-reveal/Fade';

export default function Contact() {
  return (
    <div className='fullscreen'>
      <form className='container-fluid text-center w-50' action='https://formsubmit.co/noahhagardent@gmail.com' method='POST'>

        {/* Honeypot */}
        <input type='text' name='_honey' className='hidden' />

        {/* Disable Captcha */}
        <input type='hidden' name='_captcha' value='false' />

        {/* Redirect on form submission */}
        <input type='hidden' name='_next' value='https://noahblob.github.io/react-portfolio' />

        <Fade top>
          <div className='mb-5'>
            <h2>Contact Me</h2>
          </div>

          <div className='mb-5'>
            <div className='row'>
              <div className='col'>
                <label for='first-name' className='form-label'>First Name</label>
                <input className='form-control' type='text' id='first-name' placeholder='Your first name' required />
              </div>
              <div className='col'>
                <label for='last-name' className='form-label'>Last Name</label>
                <input className='form-control' type='text' id='last-name' placeholder='Your last name' />
              </div>
            </div>
          </div>

          <div className='mb-5'>
            <label for='name' className='form-label'>Email</label>
            <input className='form-control' type='text' id='email' placeholder='Your email' required />
          </div>

          <div className='mb-5'>
            <label for='message' className='form-label'>Message</label>
            <textarea className='form-control' id='message' rows='4' placeholder='Your message' required></textarea>
          </div>

          <div className='mb-5'>
            <button className='rounded nice-button' type='submit' name='send'>Send</button>
          </div>
        </Fade>
      </form>
    </div>
  );
}