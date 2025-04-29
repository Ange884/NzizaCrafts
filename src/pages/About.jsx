import './About.css';
import { motion } from 'framer-motion';
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaNodeJs } from 'react-icons/fa'; 

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="about-title">About Me</h2>
          <p>
          Hi, I'm <strong>ISHIMWE NZIZA Angelique</strong>, a Frontend Developer from Rwanda Coding Academy.
          I create beautiful, user-friendly web applications using React, JavaScript, HTML, and CSS.
          I'm passionate about creativity, learning, and building experiences that inspire and connect people.
          </p>
          <div className="typewriter-container">
            <span className="typewriter-text">Frontend Developer | React Specialist | UI/UX Lover</span>
          </div>
        </motion.div>

        <motion.div 
          className="about-image"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src="/hacking.png" alt="Angelique Ishimwe Nziza" />
        </motion.div>

      </div>

    
      <div className="skills-section">
        <h3 className="skills-title">My Skills</h3>
        <div className="skills-grid">

          <motion.div whileHover={{ scale: 1.1 }} className="skill-card">
            <FaReact size={50} color="#61DBFB" />
            <p>React</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} className="skill-card">
            <FaJsSquare size={50} color="#F0DB4F" />
            <p>JavaScript</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} className="skill-card">
            <FaHtml5 size={50} color="#E34C26" />
            <p>HTML5</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} className="skill-card">
            <FaCss3Alt size={50} color="#264de4" />
            <p>CSS3</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} className="skill-card">
            <FaNodeJs size={50} color="#68A063" />
            <p>Node.js</p>
          </motion.div>

        </div>
      </div>

    </section>
  );
}

export default About;
