import React from 'react'
import './about.css'

const AboutCard = ({title,description,icon}) => {
  return (
    
    <article className="about__card">
      {icon}
      <h5>{title}</h5>
      <small>{description}</small>
    </article>
  
  )
}

export default AboutCard