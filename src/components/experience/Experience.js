    import React from 'react'
    import './experience.css'
    import {BsFillPatchCheckFill} from 'react-icons/bs'
    const Experience = () => {
      return (
        <section id='experience'>
          <h5>What Skills I Have </h5>
          <h1>My Experience</h1>
          <div className='front_back'>
            <div className='frontend'>
            <h3>Frontend Development</h3>
            <div className='skills'>
              <div className='skill-detail'>
                <BsFillPatchCheckFill/>
              <div>
                <h4>HTML</h4>
                <small>Experienced</small>
              </div>
              </div>
              <div className='skill-detail'>
                <BsFillPatchCheckFill/>
                <div>
                <h4>CSS</h4>
                <small>Intermediate</small>
                </div>
                </div>
              <div className='skill-detail'>
                <BsFillPatchCheckFill/>
                <div>
                <h4>JavaScript</h4>
                <small>Intermediate</small>
                </div>
              </div>
              <div className='skill-detail'>
                <BsFillPatchCheckFill/>
                <div>
                <h4>React</h4>
                <small>Intermediate</small>
                </div>
              </div>
              <div className='skill-detail'>
                <BsFillPatchCheckFill/>
                <div>
                <h4>Bootstrap</h4>
                <small>Experienced</small>
                </div>
              </div>
              <div className='skill-detail'>
                <BsFillPatchCheckFill/>
                <div>
                <h4>Material UI</h4>
                <small>Intermediate</small>
                </div>
              </div>
            </div>
            </div>
            <div className='backend'>
            <h3>Backend Development</h3>
            <div className='skills'>
              <div className='skill-detail'>
                <BsFillPatchCheckFill/>
                <div>
                <h4>Node JS</h4>
                <small>Intermediate</small>
                </div>
              </div>
              <div className='skill-detail'>
                <BsFillPatchCheckFill/>
                <div>
                <h4>MongoDB</h4>
                <small>Basic</small>
                </div>
              </div>
              <div className='skill-detail'>
                <BsFillPatchCheckFill/>
                <div>
                <h4>MySQL</h4>
                <small>Intermediate</small>
                </div>
              </div>
              <div className='skill-detail'>
                <BsFillPatchCheckFill/>
                <div>
                <h4>Python</h4>
                <small>Intermediate</small>
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>
      )
    }

    export default Experience