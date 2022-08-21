import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='headerSocials'>
        <a href='https://www.linkedin.com/in/masa-shabib-3b32b1108/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/Masa-Shabib' target="_blank"><BsGithub/></a>
        <a href='https://www.instagram.com/through_palestinian_eyes/' target="_blank"><BsInstagram/></a>

    </div>
  )
}

export default HeaderSocials