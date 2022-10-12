import React from 'react'
import './experiance.css'
import Skiils from './Skills'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experiance = () => {
  return (
    <section id='experiance'>
      <h5>What Skills I Have</h5>
      <h2>My Experiance</h2>
      <div className="container experiance__container">
        <div className="experiance__frontend">
          <h3>Frontend Development</h3>
          <div className="experiance__content">
            <Skiils title="HTML" details="Experianced" icon={<BsPatchCheckFill/>}/>
            <Skiils title="CSS" details="Experianced" icon={<BsPatchCheckFill/>}/>
            <Skiils title="Javascript" details="Experianced" icon={<BsPatchCheckFill/>}/>
            <Skiils title="Bootstrap 4" details="Experianced" icon={<BsPatchCheckFill/>}/>
            <Skiils title="React js" details="Intermediate" icon={<BsPatchCheckFill/>}/>
          </div>
        </div>
        <div className="experiance__backend">
        <h3>Backend Development</h3>
          <div className="experiance__content">
            <Skiils title="HTML" details="Experianced" icon={<BsPatchCheckFill/>}/>
            <Skiils title="CSS" details="Experianced" icon={<BsPatchCheckFill/>}/>
            <Skiils title="Javascript" details="Experianced" icon={<BsPatchCheckFill/>}/>
            <Skiils title="Bootstrap 4" details="Experianced" icon={<BsPatchCheckFill/>}/>
            <Skiils title="React js" details="Intermediate" icon={<BsPatchCheckFill/>}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiance