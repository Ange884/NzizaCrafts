import './contacts.css';

function Contact(){
  return(
    <div className='contact-container'>
      <div className='contact-form'>
        <h1> Get In Touch</h1>
        <form className='contact-form'>
            <input type='name' placeholder='Your name' required></input>
            <input type='email' placeholder='Your email' required></input>
            <textarea placeholder='Your message' required></textarea>
            <button type='submit'>Send Message</button>
        </form>
        </div>
        <div className='contact-info'>
          <p className='title'>REACH ME AT:</p>
        <p className='reach'><i class='bx bxs-envelope' style={{fontSize:'20px',}}></i>ishimwenzizaangell@gmail.com</p>
        <p className='reach'><i class='bx bxs-phone-call' style={{verticalAlign:'middle',fontSize:'20px'}}></i> 0727691777</p>
        <div className='social-icons'>
            <a href='https://github.com/Ange884' target='blank'><i className='bx bxl-github' style={{fontSize:' 20px',verticalAlign:'middle'}}></i>Github</a>
            <a href='https://www.linkedin.com/feed/' target='blank'><i class='bx bxl-linkedin' style={{fontSize:'20px',verticalAlign:'middle'}} ></i>LinkedIn</a>
            <a href='https://www.instagram.com/i___nziza/' target='blank'><i class='bx bxl-instagram' style={{fontSize:'20px',verticalAlign:'middle'}}></i>Instagram</a>
         </div>
        </div>
    </div>
  )
}

export default Contact;