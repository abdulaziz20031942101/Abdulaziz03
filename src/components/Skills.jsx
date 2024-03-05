import React from 'react'
import reactIcon from "../assests/react.png"
import {SkillsData} from "../database/skills.db"
import Social from './Social'

const Skills = () => {

    
  return (
    <div className='w-full lg:h-[90vh]'>
     <div className='font-bold flex gap-2 text-[35px] md:text-[50px] my-10 md:my-16  justify-center'>
        <span>MY</span>
        <span className='text-[#313bac]'>Skills</span>
        </div> 
        
      <div className='flex flex-wrap gap-10 justify-center items-center w-[70%] m-auto'>
            {SkillsData.map((item)=>(

         <div key={item.id}>
          <div className='w-[100px] h-[100px] rounded-full bg-[#f8eaea] flex justify-center items-center  hover:shadow-lg'>
          <img src={item.img} className='w-[50px] h-[50px] ' alt="reactIcon" />
         </div>
          <div className='text-center mt-2 text-[12px]' >{item.title}</div>
         </div>
            
            ))}
          
        </div>

        {/* <div className='relative'>
         <Social/>
        </div> */}
        <div className='text-[16px] mt-20 text-right w-[90%]'>
            @2024 ABDULAZIZ ABDSATTOROV 
        </div>
      
    </div>
  )
}

export default Skills