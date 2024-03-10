import React from 'react'
import Telegram from "../assests/telegramP.png"
import LinkedIn from "../assests/linkedinP.png"
import PhoneP from "../assests/phoniP.png"



const Contact = () => {
  return (
    <div>
        <div className=' text-[35px] my-10 md:text-[44px] text-center font-bold'>Contact Me</div>
        <div className='max-w-[700px] w-full m-auto '>
          <div className='flex flex-wrap justify-center items-center gap-5 md:gap-10 my-5'>
          <a href='https://www.linkedin.com/in/jamshid-zayniev-0091b66266' className='flex min-w-[300px] h-[60px] px-10 justify-start gap-2 items-center bg-[#fef4f5] rounded-[10px] shadow-md hover:shadow-lg cursor-pointer'>
             <img src={LinkedIn} alt="LinkedIn" className='w-[50px]' />
             <span className='text-[13px] text-[#5e6064]'>in/Abdsattorov-Abdulaziz</span>
            </a>
            <a href='https//t.me/A_H_09_14' className='flex min-w-[300px] h-[60px] px-5 justify-start gap-2 items-center bg-[#fef4f5] rounded-[10px] shadow-md hover:shadow-lg  cursor-pointer'>
             <img src={Telegram} alt="Telegram" className='w-[50px]' />
             <span className='text-[13px] text-[#5e6064]'>in/Abdsattorov-Abdulaziz</span>
            </a>
            <a href='tel:+998947535233' className='flex min-w-[300px] h-[60px] px-5 justify-start gap-2 items-center bg-[#fef4f5] rounded-[10px] shadow-md hover:shadow-lg  cursor-pointer'>
             <img src={PhoneP} alt="PhoneP" className='w-[20px]' />
             <span className='text-[13px] text-[#5e6064]'>+(998) 94 753 52 33</span>
            </a>
          </div>
        </div>
    </div>
  )
}

export default Contact