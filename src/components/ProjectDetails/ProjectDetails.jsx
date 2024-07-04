import React from 'react'
import './details.css'
import HorizontalScrollCarousel from '../HorizontalScroll/Horizontal'

const ProjectDetails = () => {
  return (
    <>
    <div className='details-container'>
        <div >

        <h1>Project Details</h1>
        <h3>A complete brand identity and website redesign project.</h3>
        <img src="./blackArrow.jpg" alt="helo" />
        </div>
    </div>
        <HorizontalScrollCarousel/>

        <div className='project-details'>
          <h1>Everythink Design Studio is proud to have partnered with Black Arrow to create a new branding identity and website. The new branding and website reflect Black Arrow's commitment to innovation, quality, and customer service.</h1>
        </div>
        
</>
  )
}

export default ProjectDetails