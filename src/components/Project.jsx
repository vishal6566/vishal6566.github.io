import React from 'react'
import manageEngine from "../assets/portfolio/manageEngine.jpg"
import Boat from "../assets/portfolio/Boat.png"

const Project = () => {
    const projects=[
        {
            id:1,
            src:manageEngine,
            code:"https://github.com/vishal6566/ManageEngine",
            demo:"https://effulgent-cassata-80da43.netlify.app/"
        }, {
            id:2,
            src:Boat,
            code:"https://github.com/vishal6566/boat-clone",
            demo:"https://regal-axolotl-a1cd50.netlify.app/",
        }
    ]
  return (
    <div name="projects" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>Project</p>
                <p className='py-6'>Check out some my work right here.</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {projects.map(({id,src,code,demo})=>(
   
    <div  key={id}  className='shadow-md shadow-gray-600 rounded-lg'>
        <img src={src} alt="" className='rounded-md hover:scale-105 duration-200' />
        <div className='flex items-center justify-center'>
            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' ><a href={demo} target="_blank" rel="noopener noreferrer">Demo</a></button>
            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={code} target="_blank" rel="noopener noreferrer">Code</a></button>
        </div>
    </div>

            ))}
        </div>
        </div>
    </div>
  )
}

export default Project