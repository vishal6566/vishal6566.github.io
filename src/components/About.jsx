import React from 'react'
import Calender from "./Calender"
import Stats from './Stats'
const About = () => {
  return (
    <div name="about" className='w-full  bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500' >About</p>
            </div>
            <p className='text-xl mt-15'>
              
            Software development professional, adept at engineering robust and user-centric solutions. Collaborative, team player who is proficient in working with interdisciplinary teams and executing goal oriented projects. Strongly interested in obtaining a Software Developer position to work on enhancing the product experience.

            </p>
            <br />
            <div>
              <p className='text-4xl font-bold inline border-b-4 border-gray-500'>My Github Stats</p>
              <div className='my-8'>
              <Calender />
              </div>
              <div>
              <Stats />
              </div>
             
              
            </div>
        </div>

    </div>
  )
}

export default About