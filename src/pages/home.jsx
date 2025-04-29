import './home.css';
import {motion} from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

function Home(){
   return (
     <div className="home-container">
        < motion.div 
        className="home-text"
        initial ={{opacity:0 ,y:-50}}
        animate ={{opacity:1 ,y:0}}
        transition={{duration:1}}
        >
  <h1>
  <Typewriter
            words={['Building Dreams Through Code and Creativity', 'Crafting Digital Experiences', 'Turning Ideas Into Reality']}
            loop={Infinity}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
  </h1>
  <p>
    Hi there! I'm Nziza, a creative web developer with a passion for turning ideas into beautiful digital experiences.
    I love building websites that are not only functional but also visually stunning. Welcome to my portfolio — let’s bring ideas to life together!
  </p>
</motion.div>

        <motion.div 
        className="home-image"
        initial ={{opacity:0 , scale:0.5}}
        animate ={{opacity:1, scale:1}}
        transition={{duration:1.2}}
        whileHover={{scale:1.1 ,}}
        >
            <img src="/Javascript.jpg" alt="my image" />
        </motion.div>
     </div>
   )
}
 export default Home;