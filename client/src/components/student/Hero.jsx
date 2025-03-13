import React from 'react'
import SearchBar from './SearchBar'
import Companies from './Companies'
import CoursesSection from './CoursesSection'

const Hero = () => {
  return (
    <div className = 'flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-9 space-y-7 text-center bg-custom-black '>

          <h1 className="md:text-home-heading-small text-home-heading-small relative font-bold text-white max-w-2xl mx-auto">
              Shape your future with courses <span className="text-custom-purple"> tailored to your preferences and goals.</span>
          </h1>


        <p className = 'text-gray-500 max-w-sm mx-auto'>
        Learn at your own pace with experts from all over the world who create courses that make it possible for anyone to learn anything.
        </p>

      <SearchBar/>


    </div>
  )
}

export default Hero