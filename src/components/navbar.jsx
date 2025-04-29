import { Link } from "react-scroll";
import './navbar.css';

function Navbar(){
     return(
        <nav className="navbar">
         <h1 className="logo">Nziza</h1>
          <ul className="nav-links">
             <li><Link to="home"
                    smooth={true}
                    duration={500}
                    offset={-70}
                    spy={true}
                    activeClass="active"

                   >Home</Link></li>
             <li><Link to="about"
                       smooth={true}
                       duration={500}
                       offset={-70}
                       spy={true}
                       activeClass="active"
                       >About</Link></li>
             <li><Link to="projects"
                          smooth={true}
                          duration={500}
                          offset={-70}
                          spy={true}
                          activeClass="active"
                          
                          >Projects</Link></li>
             <li><Link to="skills"
                    smooth={true}
                    duration={500}
                    offset={-70}
                    spy={true}
                    activeClass="active"
                       >Skills</Link></li>
             <li><Link to="contact"
                    smooth={true}
                    duration={500}
                    offset={-70}
                    spy={true}
                    activeClass="active"
             >Contact</Link></li>
          </ul>
        </nav>
     )

}

export default Navbar ;