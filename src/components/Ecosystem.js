import React from 'react'
import { ReactSVG } from 'react-svg'
import group from '../images/Group 469.svg'

const Ecosystem = () => {
  return (
    <div className='p-24'>
        <div className='flex items-center justify-between mb-5 bg-[#F4F6FB] p-5 rounded-lg'>
            <h1 className='text-xl font-medium'>About <span className='font-bold'>Ecosystem</span></h1>
            <ReactSVG src={group} height="50px" width='50px'/>
        </div>
        <div className='flex items-center justify-between mb-5 bg-[#F4F6FB] p-5 rounded-lg'>
            <h1 className='text-xl font-medium'>Our <span className='font-bold'>Offerings</span></h1>
            <ReactSVG src={group} height="50px" width='50px'/>
        </div>
    </div>
  )
}

export default Ecosystem