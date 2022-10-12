import React from 'react'
import './education.css'
const Details = ({icon,schooling,name,percent}) => {
  return (
    <article className="education__details">
    <span className="education__details-icon">{icon}</span>
    <div className="">
      <h4>{schooling}</h4>
      <h4>{name}</h4>
      <small className="text-light">{percent}</small>
    </div>
  </article>
  )
}

export default Details