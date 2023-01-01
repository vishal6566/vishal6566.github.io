import React from 'react'
import HeroImage from "../assets/heroImage.png"
import { MdKeyboardArrowRight } from 'react-icons/md'
import {Link} from "react-scroll"

const Home = () => {
  const download=true;
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-5xl mt-8 font-bold text-white'>
            I'm a Full Stack Web Developer
          </h2>
          <p className='text-gray-500 py-4 max-w-md'>
            Aspiring Software development professional, adept at engineering robust and user-centric solutions. Collaborative, team player who is proficient in working with interdisciplinary teams and executing goal oriented projects. Strongly interested in obtaining a Software Developer position to work on enhancing the product experience.
          </p>
          <div className='flex gap-8'>
          <Link to='projects' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-red-500 to-blue-500 cursor-pointer'>Project
            <span className='group-hover:rotate-90 duration-300'><MdKeyboardArrowRight size={25} className="ml-1" /></span>

            </Link> 
            <button to='projects'  className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-red-500 to-blue-500 cursor-pointer'><a href="/VishalDasResume.pdf" className='flex justify-between items-center w-full text-white'
                     download={download}
                     target="_blank"
                     rel="noreferrer"
                     >Resume</a>
           
            
            </button> 
          </div>
        </div>
        <div>
          <img src={HeroImage} alt="my-profile" className='rounded-2xl mx-auto w-2/5  md:w-2/3' />
        </div>
      </div>
    </div>
  )
}

export default Home