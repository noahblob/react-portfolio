export default function Contact() {
  return (
    <div className='fullscreen'>
      <form className='container-fluid text-center w-50'>
        <div className='mb-5'>
          <h2>Contact Me</h2>
        </div>

        <div className='mb-5'>
          <div className="row">
            <div className="col">
              <label for='first-name' className='form-label'>First Name</label>
              <input className='form-control' type='text' id='first-name' placeholder='Your first name' required />
            </div>
            <div className="col">
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
          <textarea className='form-control' id='message' rows='4' placeholder='Your message'></textarea>
        </div>

        <div className='mb-5'>
          <button className='btn btn-primary' type='submit' name='send'>Send</button>
        </div>
      </form>
    </div>
  );
}