import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const SearchBar = ({data}) => {


  // useNavigate allows you to navigate to different routes in your application without relying on traditional <Link> or <NavLink>
  const navigate = useNavigate();

  const [input, setInput] = useState(data ? data : '')


  // Whenver we will submit this form, prevent function will stop the website from reloading
  const onSearchHandler = (e) => {
    e.preventDefault();
    navigate('/course-list/' + input)
  }

  return (
      
        <form onSubmit = {onSearchHandler} className='max-w-xl w-full md:h-14 h-12 flex items-center bg-white border border-gray-500/20 rounded'>
          <img src = {assets.search_icon} alt = "Search Bar" className = 'md:w-auto w-10 px-3'/>
          <input onChange = {event => setInput(event.target.value)} value = {input} type = 'text' placeholder = 'Search for courses' className='w-full h-full outline-none text-black'></input>
          <button type = 'submit' className='bg-custom-purple rounded-full text-white md:px-10 px-7 md:py-3 py-2 mx-1'>Search</button>
        </form>
  )
}

export default SearchBar