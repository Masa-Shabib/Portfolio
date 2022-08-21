import React from 'react'
import pic1 from '../../assets/masar.JPG'
import pic2 from '../../assets/jobpal.JPG'
import pic3 from '../../assets/filistin2.JPG'
import port from '../../assets/portfolio.JPG'
import './porfolio.css'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work </h5>
      <h1>My Portfolio</h1>
      <div className='projects'>
      <div className='project'>
          <div className='project-img'>
            <span className='disc'>I am an architect who entered the programming world out of 
            curiosity to learn and know more, and now I am perusing my career as a full-stack 
            developer with the goal of connecting both of my careers together. </span>
            <img src={port} alt='project1'></img>
          </div>
          <h3>My Portfolio </h3>
          <a href='https://github.com/Masa-Shabib/My-Portfolio' target="_blank">Gethub</a>
        </div>
        <div className='project'>
          <div className='project-img'>
            <span className='disc'>Masar is built to enrich our lives and enlarge our
             understanding of Palestinian history, while creating for us a sense of 
             continuity through outdoor trips to historical landmarks which strengthens 
             the roots of Palestinian identity, through observing the beauty of nature in 
             our beloved holy homeland.</span>
            <img src={pic1} alt='project1'></img>
          </div>
          <h3>Masar </h3>
          <a href='https://github.com/Masa-Shabib/Masar-Project' target="_blank">Gethub</a>
        </div>
        <div className='project'>
        <div className='project-img'>
            <span className='disc'>A web application with the main purpose of exchanging
             information between Job seekers and recruiters about the local market 
             job needs and available opportunities</span>
          <img src={pic2} alt='project2'></img>
          </div>
          <h3>Jobpal</h3>
          <a href='https://github.com/Masa-Shabib/Jobpal_Project' target="_blank">Gethub</a>
        </div>
        <div className='project'>
        <div className='project-img'>
            <span className='disc'>This web application is an online magazine that will
             help to document Palestinian Cities and Villages and allow the world to get 
             to know more about Palestine. </span>
          <img src={pic3} alt='project3'></img>
          </div>
          <h3>Filistin-Magazine</h3>
          <a href='https://github.com/Masa-Shabib/Filistin-Magazine' target="_blank">Gethub</a>
        </div>
      </div>
    </section>
  )
}

export default Portfolio