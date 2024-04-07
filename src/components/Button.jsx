import React from 'react'

const Button = ({text, className, fun}) => {
  return (
    <>
    <button 
    onClick={fun} 
    className={`${className} bg-zinc-800 w-[78%] px-5 py-3 text-white rounded-lg shadow-xl shadow-black`}>{text}</button>
    </>
  )
}

export default Button