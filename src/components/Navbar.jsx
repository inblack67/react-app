import React from 'react'
import logo from '../logo/logo.png'

const Navbar = () => {
    return (
        <header className='bg-gray-900 flex items-start items-center justify-around'>
            <div className='py-4'>
                <a href="#!">
                    <img src={logo} alt="SigNoz" className='h-16 rounded'/>
                </a>
            </div>
            <div className='text-white'>
                <a href="#!" className='button text-pink p-4 block font-medium'>Flame Graph | Tailwind</a>
            </div>
        </header>
    )
}

export default Navbar
