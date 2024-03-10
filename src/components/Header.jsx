import React from 'react'
import Gif from "../assests/dev1.gif"
import ReduxImg from "../assests/redux.png"
import ReactImg  from '../assests/react.png'
import Sass from "../assests/sass.png"

// animation
// import { Fade } from 'react-reveal';

const Header = () => {
  return (
    <div className='pt-[200px] lg:pt-0 bg-slate-100 w-full  lg:h-[100vh]  flex lg:flex-row flex-col items-center justify-center gap-5'>
        {/* Download Cv */}

       
        
        <div className='flex flex-col gap-6 md:gap-10 items-center md:items-end w-full max-w-[400px]'>
        {/* <Fade right>  animation ishlamayapti-------------------------------------- */}
            <div className='flex justify-center items-center bg-[white] gap-5 md:gap-10 w-full max-w-[350px] p-3 rounded-[10px] shadow-lg'>
                <p className='text-[35px]'>👋</p>
                <p className='flex flex-col'>
                 <span className='text-slate-400 text-[25px]' >Hello, I am</span>
                 <span className='font-[700] text-[30px]'>Abdulaziz</span>
                </p>
            </div>  
           
            <div className='w-full bg-[white]  max-w-[300px] p-3 text-slate-400 text-[20px] rounded-[15px] rshadow-lg '>FRONTEND/REACT  DEVELOPER</div>
            <a href='rezume.pdf' download  type="button" class="text-white bg-[#313bac] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Download CV</a>

            
        </div>
        
         {/* </Fade>  animation ishlamayapti ------------------------------------------ */}
          
          {/* gif for developer */}
        <div className='text-center'>
            <img src={Gif} alt="Gif" />
        </div>
        <div className='flex lg:flex-col gap-7'>
          <div className='w-[75px] h-[75px] lg:w-[150px] lg:h-[150px] rounded-full bg-[white] shadow-2xl flex justify-center items-center'>
            <img src={ReduxImg} className='w-[80%]' alt="img" />
            </div>
          <div className='w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] rounded-full bg-[white] shadow-2xl  flex justify-center items-center'>
            <img src={ReactImg}  className='w-[80%]' alt="img" />
            </div>
          <div className='w-[50px] h-[50px] rounded-full bg-[white] shadow-2xl  flex justify-center items-center'>
            <img src={Sass}  className='w-[80%]' alt="img" />

            </div>
          
        </div>
        {/* <Social/>   manashu xatolik kursatyapti */}
    </div>
  )
}

export default Header