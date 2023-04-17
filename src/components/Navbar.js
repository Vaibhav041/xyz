import React from 'react'
import logo from '../images/Logo.svg'

const Navbar = () => {
  return (
    <div className='py-16 px-24 flex justify-between'> 
        <img src={logo}/>
        <div>
            <ul className='flex md:gap-3 lg:gap-11'>
                <li className='font-bold text-lg'>About Us</li>
                <li className='font-bold text-lg'>Research & Content</li>
                <li className='font-bold text-lg'>Consulting</li>
                <li className='font-bold text-lg'>Community</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar