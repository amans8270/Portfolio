import React from 'react'
import './education.css'
import {FaSchool} from 'react-icons/fa'
import Details from './Details'
const Education = () => {
  return (
    <section id='education'>
      <h5>Education Details</h5>
      <h2>My Schooling</h2>
      <div className="container education__container">
        <div className="education__school">
        <h3>School</h3>
        <div className="education__content">
          <Details icon={<FaSchool/>} schooling='10th' name="St. Mary's School"  percent="76.66"/>
          <Details icon={<FaSchool/>} schooling='12th' name="St. Mary's School"  percent="69.99"/>
        </div>
        </div>
        <div className="education__college">
        <h3>Graduation</h3>
        <div className="education__content">
          <Details icon={<FaSchool/>} schooling='B-Tech' name="PSIT Kanpur"  percent="73.32"/>
        </div>
        </div>
        </div>
      </section>
  )
}

export default Education