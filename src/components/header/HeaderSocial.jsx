import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
const HeaderSocial = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/aman-singh-03571713a/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/amans8270" target="_blank"><FaGithub/></a>
        <a href="whatsapp://send?text=' Hello!! '&phone=91' + 8173870265" target="_blank"><BsWhatsapp/></a>

    </div>

  )
}

export default HeaderSocial