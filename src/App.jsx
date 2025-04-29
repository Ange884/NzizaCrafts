import { Element } from "react-scroll";
import Home from "./pages/home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contacts";
import Skills from "./pages/Skills";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import './App.css';

function App(){
       return(
          <>
           <Navbar/>
           <Element name="home">
             <Home/>
           </Element>
           <Element name="about">
             <About/>
           </Element>
           <Element name="projects">
             <Projects/>
           </Element>
           <Element name="skills">
             <Skills/>
           </Element>
           <Element name="contact">
             <Contact/>
           </Element>

           <Footer/>


          </>
       )


}
export default App ;