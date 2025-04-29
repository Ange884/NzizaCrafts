import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Projects.css';
    function Projects() {
      useEffect(() =>{
          AOS.init({
            duration:1000,
            once:true
          })
      },[]);
        const projects = [
          {
            title: 'Fashion Store',
            description: 'A modern e-commerce fashion store built with React.',
            link: '',
            img: '/fa.jpg'
          },
          {
            title: 'Quiz App',
            description: 'A fun JavaScript quiz app with timer and score tracking.',
            link: '',
            img: '/qq.jpg'
          },
          {
            title: 'Portfolio Website',
            description: 'My personal portfolio website to showcase my skills and projects.',
            link: '',
            img: '/po.jpg'
          },
          {
            title: 'Weather App',
            description: 'A weather app using an API to show real-time weather data.',
            link: '',
            img: '/ww.jpg'
          },
          {
            title: 'Blog Website',
            description: 'A fully functional blog website with a comment section.',
            link: '',
            img: '/architecture.jpg'
          },
          {
            title: 'To-Do List App',
            description: 'A simple to-do list app built with React to manage tasks.',
            link: '',
            img: '/td.jpg'
          },
        ];
  return(
       <section className='projects-section'>
          <h2 className='projects-title' data-aos="fade-down">My Projects</h2>
              <div className='projects-grid'>
                {projects.map((project,index) =>(
                    <div key={index} className='project-card' data-aos="fade-up" data-aos-delay="{index * 100}">
                        <img src={project.img} alt={project.title} className='project-image' />
                        <div className='project-info'>
                            <h3 className='project-title'>{project.title}</h3>
                            <p className='project-description'>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
                        </div>
                    </div>
                )
                )}
              </div>
              </section>
);
      
}

export default Projects;