import React from 'react'
import './about.css'
import ME from '../../assets/me.png'
import AboutCard from './AboutCard'
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary}  from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
          </div>
          
        <div className="about__content">
        <div className="about__cards">
        <AboutCard title={"Experiance"} description={"Still a Fresher"} icon={<FaAward/>}/>
        <AboutCard title={"Projects"} description={"10+ Project completed"} icon={<VscFolderLibrary/>}/>
          <AboutCard title={"Hobbies"} description={"Chess, Football,Books,Travelling"} icon={<FiUser/>}/>
          
  </div>
          
        <p>A result-oriented and self-motivated B.Tech graduate, looking for a challenging career where I can implement my coding knowledge so that further enhance my skills. Strong knowledge of HTML, CSS,Javascript, Java,python,reactjs.</p>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>
      </div>
    </section>
  )
}

export default About