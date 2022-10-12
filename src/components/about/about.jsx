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
          <AboutCard title={"Clients"} description={"1000+ Clients"} icon={<FiUser/>}/>
          <AboutCard title={"Projects"} description={"10+ Project completed"} icon={<VscFolderLibrary/>}/>
  </div>
          
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, nostrum ratione unde quisquam ipsum illo. Reprehenderit ad et ipsa praesentium iusto magnam accusantium quisquam possimus eius quam. Aperiam, hic magnam.</p>
        <a href="" className="btn btn-primary">Let's Talk</a>
      </div>
      </div>
    </section>
  )
}

export default About