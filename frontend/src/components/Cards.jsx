import React from 'react'

function Cards({icon, title, text}) {
  return (
    <div className="sm:w-[350px] text-white bg-black pt-6 px-6 sm:px-8 pb-12 rounded-xl opacity-80">
        <img src={icon} className="w-[40px] mb-4 "></img>
        <h6 className="text-xl mb-4">{title}</h6>
        <p>{text}</p>
    </div>
  )
}

export default Cards