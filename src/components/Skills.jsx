import React from 'react'
import html from "../assets/html.png"
import reactImage from "../assets/react.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import github from "../assets/github.png"
import tailwind from "../assets/tailwind.png"
const Skills = () => {
  const techs = [{
    id: 1,
    src: html,
    title: "HTML",
    style: 'shadow-orange-500'
  }, {
    id: 2,
    src: css,
    title: "CSS",
    style: 'shadow-blue-500'
  }, {
    id: 3,
    src: javascript,
    title: "JAVASCRIPT",
    style: 'shadow-yellow-500'
  }, {
    id: 4,
    src: reactImage,
    title: "REACT",
    style: 'shadow-blue-600'
  }, {
    id: 5,
    src: tailwind,
    title: "TAILWIND",
    style: 'shadow-sky-400'
  }, {
    id: 6,
    src: github,
    title: "GITHUB",
    style: 'shadow-gray-400'
  },{
    id: 7,
    src: "https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png",
    title: "NODEJS",
    style: 'shadow-green-400'
  },{
    id: 8,
    src: "https://cdn.iconscout.com/icon/free/png-256/netlify-3628945-3030170.png",
    title: "NETLIFY",
    style: 'shadow-blue-400'
  },
  {
    id: 9,
    src: "https://www.svgrepo.com/show/331488/mongodb.svg",
    title: "MONGODB",
    style: 'shadow-green-600'
  },{
    id: 10,
    src: "https://cdn.worldvectorlogo.com/logos/npm-2.svg",
    title: "NPM",
    style: 'shadow-red-400'
  },{
    id: 11,
    src: "https://www.pngfind.com/pngs/m/136-1363736_express-js-icon-png-transparent-png.png",
    title: "EXPRESS",
    style: 'shadow-gray-400'
  }
  ]
  return (
    <div name="skills" className='bg-gradient-to-b from-gray-800 to-black w-full h-full'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline ' >Skills</p>
          <p className='py-6'>These are the technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0'>
          {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className='w-20 mx-auto' />
              <p className='mt-4'>{title}</p>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Skills