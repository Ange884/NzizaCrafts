import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

    
        <div className="footer-column">
          <h3>Nziza</h3>
          <p>Passionate about building beautiful digital experiences and turning ideas into reality!</p>
        </div>

    
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/skills">Skills</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <p>Email: ishimwenzizaangell@gmail.com</p>
          <p>Phone: +250 727691777</p>
        </div>

        <div className="footer-column">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <a href="https://github.com/Ange884" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github' style={{fontSize:' 18px',verticalAlign:'middle',position:'relative'}}></i>GitHub</a>
            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin' style={{fontSize:'18px' ,verticalAlign:'middle',position:'relative'}} ></i>LinkedIn</a>
            <a href="https://www.instagram.com/i___nziza/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-instagram' style={{fontSize:'18px', verticalAlign:'middle',position:'relative'}}></i>Instagram</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Nziza. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
