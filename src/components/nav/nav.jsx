import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServerLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import './nav.css'
const nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome/></a>
      <a href="about"><AiOutlineUser/></a>
      <a href="experiance"><BiBook/></a>
      <a href="services"><RiServerLine/></a>
      <a href="contact"><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default nav