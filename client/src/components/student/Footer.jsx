import React from 'react';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className='bg-custom-purple md:px-36 text-left w-full '>
          <div className='flex flex-col md:flex-row items-start px-8 md : px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white'>
              <div className='flex flex-col md:items-start iems-center w-full'>
              <img className='max-w-full max-h-10 max-w-20' src = {assets.logo} alt = "logo"></img>
                <p className='mt-6 text-center md:text-left text-sm text-white'>The sun dipped below the horizon, casting a warm golden glow across the tranquil lake. Birds flitted through the air, their calls echoing in the stillness of the evening.</p>
              </div>

              <div className = 'flex flex-col md:items-start items-center w-full'>
                  <h2 className='text-white mb-5 font-semibold'>Company </h2>
                  <ul className = 'flex md:flex-col w-full justify-between text-sm text-white md:space-y-2'>
                    <li className='text-white'><a href = "#"/>Home</li>
                    <li className='text-white'><a href = "#"/>About Us</li>
                    <li className='text-white'><a href = "#"/>Contact Us</li>
                    <li className='text-white'><a href = "#"/>Privacy policy</li>
                  </ul>
              </div>
              <div></div>
          </div>
          <p className='py-4 text-center text-xs md:text-sm text-white'>Copyright 2025 © KnoVio. All Right Reserved.</p>
    </footer>
  )
}

export default Footer