import { useState } from 'react';
import './Skills.css';
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaNodeJs, FaGit } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiReact } from 'react-icons/si';

function Skills() {
  const [showSkills, setshowSKills] = useState(false);
  const [showStylingSkills, setshowStylingSkills] = useState(false);
  const [showLearningSkills, setshowLearningSkills] = useState(false);

  const toggleSkills = () => {
    setshowSKills(!showSkills);
  };

  const toggleStylingSkills = () => {
    setshowStylingSkills(!showStylingSkills);
  };

  const toggleLearningSkills = () => {
    setshowLearningSkills(!showLearningSkills);
  };

  return (
    <section className="skills-section">
      <h2 className="skills-title">My Skills:</h2>

      <div className="skills-category">
        <button onClick={toggleSkills} className="skills-subtitle">
          Frontend Development
        </button>
        {showSkills && (
          <div className="skills-grid">
            <div className="skills-item">
              <FaReact className="skill-icon" />
              <p>React.js</p>
            </div>

            <div className="skills-item">
              <FaJsSquare className="skill-icon" />
              <p>JavaScript</p>
            </div>

            <div className="skills-item">
              <FaHtml5 className="skill-icon" />
              <p>HTML</p>
            </div>

            <div className="skills-item">
              <FaCss3Alt className="skill-icon" />
              <p>CSS</p>
            </div>

            <div className="skills-item">
              <FaGit className="skill-icon" />
              <p>Git</p>
            </div>
          </div>
        )}
      </div>

      <div className="skills-category">
        <button onClick={toggleStylingSkills} className="skills-subtitle">
          Styling & Design
        </button>
        {showStylingSkills && (
          <ul className="skills-list">
            <li>Tailwind CSS (learning)</li>
            <li>Responsive Web Design</li>
            <li>Basic Figma</li>
            <li>Flexbox & CSS Grid</li>
          </ul>
        )}
      </div>

      <div className="skills-category">
        <button onClick={toggleLearningSkills} className="skills-subtitle">
          Currently Learning
        </button>
        {showLearningSkills && (
          <div className="skills-grid">
            <div className="skills-item">
              <SiTailwindcss className="skill-icon" />
              <p>Tailwind CSS</p>
            </div>

            <div className="skills-item">
              <FaNodeJs className="skill-icon" />
              <p>Node.js</p>
            </div>

            <div className="skills-item">
              <SiExpress className="skill-icon" />
              <p>Express.js</p>
            </div>

            <div className="skills-item">
              <SiReact className="skill-icon" />
              <p>Advanced React</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Skills;
