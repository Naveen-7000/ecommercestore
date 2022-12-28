import React from 'react'
import { AiFillInstagram, AiFillTwitterCircle,  AiFillYoutube } from 'react-icons/ai';
const Footer = () => {
  return (
    <div className='footer-container'>
      <p className="">
        Headphones All rights reserved
      </p>
      <p className="icons">
        <AiFillInstagram />
        <AiFillTwitterCircle />
        <AiFillYoutube />
      </p>
    </div>
  )
}

export default Footer