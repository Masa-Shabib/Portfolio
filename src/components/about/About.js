import React from 'react'
import './about.css'
import Me from '../../assets/profile.png'
import Pic1 from '../../assets/IMG_20210303_193311.jpg'
import Pic2 from '../../assets/IMG_20210402_104408.jpg'
import Pic3 from '../../assets/IMG_20210730_193308.jpg'
import Pic4 from '../../assets/IMG_20210326_105816 (1).jpg'

const About = () => {
  const change = e =>{
     document.querySelector('.popImage').style.display='block';
    document.querySelector('.popImage img').src = e.target.src
    document.querySelector('.popImage p').innerHTML = e.target.alt
    
  }
  const close = e =>{
    document.querySelector('.popImage').style.display='none';
 }

  return (
    <section id='about'>
      <h5>Get To Know </h5>
      <h1>About Me</h1>
      <div className='aboutMe'>
        <div className='myPic'>
          <img src={Me} alt="alternatetext"/>
        </div>
        <div>
          <p> I am an architect whos motivated for self-development and learning 
            new things is what got me into the programming world to learn and know more. Now I am 
            pursuing my career as a full-stack developer, with the goal of connecting both of my jobs together.
              Aside from coding and architecture I have a large passion for photography
            .When I'm not working,
             you'll probably find me taking or editing photos.</p>
             <div className='pics'>
             <img  onClick={change} src={Pic1} className='zoom' alt='Al Naqura - Nablus'></img>
             <img  onClick={change} src={Pic2} className='zoom' alt='Jericho'></img>
             <img  onClick={change} src={Pic3} className='zoom' alt='Al Naqura - Nablus'></img>
             <img  onClick={change} src={Pic4} className='zoom' alt='Wadi-Qelt - Jericho'></img>
             </div>
             
        </div>
      </div> 
             <p><a href='https://www.instagram.com/through_palestinian_eyes/' target="_blank">Click For More Photos</a></p>
        <div className='popImage'>
          <span onClick={close}>&times;</span>
          <img src={Pic1} alt='Pic2' ></img>
          <p >Al Naqura - Nablus</p>
        </div>
    </section>
  )
}

export default About