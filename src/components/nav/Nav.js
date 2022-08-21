import React,{useState} from 'react'
import {ImHome} from 'react-icons/im'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiProfileLine} from 'react-icons/ri'
import {AiOutlineMessage} from 'react-icons/ai'
import './nav.css'
const Nav = () => {
  const [activeNav,setActiveNav]= useState('#')
  return (
    <nav>
      <div className='toolTip'>
        <span>Home</span>
        <a href='#' onClick={()=> setActiveNav('#')} 
        className={activeNav==='#'? 'active':''}
        ><ImHome/></a>
      </div>
      <div className='toolTip'>
        <span>About Me</span>
        <a href='#about' onClick={()=> setActiveNav('#about')}
        className={activeNav==='#about'? 'active':''}><AiOutlineUser/></a>
      </div>
      <div className='toolTip'>
        <span>Experience</span>
        <a href='#experience' onClick={()=> setActiveNav('#experience')}
        className={activeNav==='#experience'? 'active':''}><BiBook/></a>
      </div>
      <div className='toolTip'>
        <span>Portfolio</span>
        <a href='#portfolio' onClick={()=> setActiveNav('#portfolio')}
        className={activeNav==='#portfolio'? 'active':''}><RiProfileLine/></a>
      </div>
      <div className='toolTip'>
        <span>Contact Me</span>
        <a href='#contact' onClick={()=> setActiveNav('#contact')}
        className={activeNav==='#contact'? 'active':''}><AiOutlineMessage/></a>
      </div>
    </nav>
  )
}

export default Nav