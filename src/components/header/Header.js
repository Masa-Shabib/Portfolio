import React from 'react'
import Typical from 'react-typical'
import Me from '../../assets/Untitled-1.png'
import CTA from './CTA'
import './header.css'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header className='backgroung-gray'>
      <div className='innerHeader'>
        <h5>Hello I'm </h5>
        <h1>Masa Shabib</h1>
        <h4><Typical
        loop ={Infinity}
        steps={
          ["Developer",2000,"Architect",2000]
        }
        />
          </h4>
        <CTA/>
        <HeaderSocials/>
        <div className='me'>
        <img src={Me} alt="alternatetext"/>
        </div>
      </div>
    </header>
  )
}

export default Header