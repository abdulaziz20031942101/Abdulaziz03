import React from 'react'
import reactIcon from "../assests/react.png"
import {SkillsData} from "../database/skills.db"

// import {Fade} from "react-reveal"

const Skills = () => {

    
  return (
    <div className=' h-auto md:h-[100vh] relative'>
     <div className='font-bold flex gap-2 text-[35px] md:text-[50px] my-10 md:my-16  justify-center '>
        <span>MY</span>
        <span className='text-[#313bac]'>Skills</span>
        </div> 
        
      <div className='flex flex-wrap gap-5 md:gap-10 py-10 justify-center items-center w-[90%] md:w-[70%] m-auto'>
            {SkillsData.map((item)=>(
          // <Fade bottom>
         <div key={item.id}>
          <div className='w-[70px] h-[70px] md:w-[100px] md:h-[100px] rounded-full bg-[#f8eaea] flex justify-center items-center  hover:shadow-lg'>
          <img src={item.img} className='w-[50px] h-[50px] p-2' alt="reactIcon" />
         </div>
          <div className='text-center mt-2 text-[12px]' >{item.title}</div>
         </div>
        //  </Fade>
            ))}
          
        </div>

        {/* <div className='relative'>
         <Social/>
        </div> */}
        <div className='md:text-[20px]  text-[14px] py-5   text-right w-[90%] md:absolute bottom-[12px] right-[40px] '>
            @2024 ABDULAZIZ ABDSATTOROV 
        </div>
      
    </div>
  )
}

export default Skills