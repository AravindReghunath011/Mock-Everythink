import React, { useEffect } from 'react'
import './projects.css'
import {useNavigate} from 'react-router-dom'
import { useAnimation, motion } from 'framer-motion'

const Projects = ({styles}) => {
    const navigate = useNavigate()
    const handleClick = (link) =>{
        navigate(link)
    }

   

    return (
        <motion.div style={styles} data-bgcolor="#2e3192" data-textcolor="white" className='projects-container' >
            <h1>Our Projects</h1>
            <div className='projects-list'>
                <img onClick={() => handleClick('/project1')} src="./Asset 9ethink_char.svg" alt="" />
                <img onClick={() => handleClick('/project2')} src="./Asset 10ethink_char.svg" alt="" />
                <img onClick={() => handleClick('/project3')} src="./Asset 11ethink_char.svg" alt="" />
                <img onClick={() => handleClick('/project4')} src="./Asset 12ethink_char.svg" alt="" />
            </div>
        </motion.div>
    )
}

export default Projects
