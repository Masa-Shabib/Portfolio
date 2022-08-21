import React from 'react'
import './footer.css'
import Logo from '../../assets/Untitled-1.png'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href='#'><img src={Logo} alt="alternatetext"/></a>
      <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About ME</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footerSocials'>
        <a href='https://www.linkedin.com/in/masa-shabib-3b32b1108/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/Masa-Shabib' target="_blank"><BsGithub/></a>
        <a href='https://www.instagram.com/through_palestinian_eyes/' target="_blank"><BsInstagram/></a>
      </div>
    <div className='footerCopyright'>
      <small>&copy; Masa Shabib 2022</small>
    </div>
      </footer>
  )
}

export default Footer