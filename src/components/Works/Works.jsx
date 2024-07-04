import React, { useEffect, useRef, useState } from 'react'
import './works.css'
import {motion,useScroll, useTransform} from 'framer-motion'

const Works = () => {
  const [height,setHeight] = useState(0)
    useEffect(()=>{
        const updateHeight = ()=>{
            setHeight(window.innerHeight)
        }
        setHeight(window.innerHeight)
        document.addEventListener('resize',updateHeight)
        updateHeight()
        return ()=>{
            document.removeEventListener('resize',updateHeight)
        }
    },[])
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [1.5, 1 ]);
  const y1 = useTransform(scrollYProgress, [0, 1], [1, 1.5 ]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0.8, 1.2 ]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0.7, 1 ]);
  return (
    <div className='works-main'>
      <h1>Our Works</h1>
      <div  className='works-container'>

      <div ref={container} className='card1'>
          <div>
          <motion.img style={{scale:y}} src="./nada.jpg" alt="" />
          </div>
          <h1>Black Arrow </h1>
          <h3>web development</h3>
      </div>        
      <div className='card2'>
        <div>
            <div>
            <motion.img style={{scale:y1}} src="./al.jpg" alt="" />

            </div>
            <h1>hey</h1>
            <h3>web development</h3>
        </div>
        <div>
            <div>
            <motion.img style={{scale:y2}} src="./zebra.jpg" alt="" />

            </div>
            <h1>hai</h1>
            <h3>web development</h3>
        </div>
      </div>               
      <div className='card1'>
          <div>
          <motion.img style={{scale:y3}} src="./blackArrow.jpg" alt="" />


          </div>
          <h1>Black Arrow </h1>
          <h3>web development</h3>
      </div>        
      </div>
    </div>
  )
}

export default Works