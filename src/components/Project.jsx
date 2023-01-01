import React from 'react'
import manageEngine from "../assets/portfolio/manageEngine.jpg"
import Boat from "../assets/portfolio/Boat.png"
import weather from "../assets/portfolio/weather.png"

const Project = () => {
    const projects=[
        {
            id:1,
            src:manageEngine,
            code:"https://github.com/vishal6566/ManageEngine",
            demo:"https://effulgent-cassata-80da43.netlify.app/",
            title:"ManageEngine",
            description:"ManageEngine offers enterprise IT management software for your service management, operations management, Active Directory and security needs. This is a collaborative project built by a team of 4 members in 5 days.",
            tech:"HTML,CSS,JAVASCRIPT"
            
        }, {
            id:2,
            src:Boat,
            code:"https://github.com/vishal6566/boat-clone",
            demo:"https://regal-axolotl-a1cd50.netlify.app/",
            title:"Boat Clone",
            description:"This project is a clone of boat.lifestyle.com. It is an online website which sell electronic gadgets. It was a collaborative project of 4 developers and project was completed within 5 days.",
            tech:"HTML,CSS,JAVASCRIPT"
        },{
            id:3,
            src:weather,
            code:"https://github.com/vishal6566/weather-app",
            demo:"https://weather-app-site-by-vishal6566.netlify.app/",
            title:"Weather app",
            description:"Weather App : Fetch current weather of cities and current location",
            tech:"REACT,TAILWIND CSS"
            
        },{
            id:4,
            src:Boat,
            code:"https://github.com/vishal6566/boat-clone",
            demo:"https://regal-axolotl-a1cd50.netlify.app/",
            title:"Boat Clone",
            description:"This project is a clone of boat.lifestyle.com. It is an online website which sell electronic gadgets. It was a collaborative project of 4 developers and project was completed within 5 days.",
            tech:"HTML,CSS,JAVASCRIPT"
        }
    ]
  return (
    <div name="projects" className='bg-gradient-to-b from-black to-gray-800 w-full text-white h-full'>
        
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>Project</p>
                <p className='py-6'>Check out some my work right here.</p>
            </div>
            <div className='grid  sm:grid-cols-2 md:grid-cols-3 gap-4 px-12 sm:px-0'>
            {projects.map(({id,src,code,demo,title,description,tech})=>(
   
    <div  key={id}  className='shadow-md shadow-gray-600 rounded-lg'>
        <img src={src} alt="" className='rounded-md hover:scale-105 duration-200' />
        <div>
            <p className='text-center font-bold my-2 text-2xl text-yellow-200'>{title}</p>
            <p className='texl-lg'>{description}</p>
            <p className='text-red-500 mt-4 texl-lg'>Tech Stack: <span className=' text-yellow-200'>{tech}</span>  </p>
        </div>
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