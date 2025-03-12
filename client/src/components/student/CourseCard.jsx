import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'


// Using the data that is present in the assets/assets.js
const CourseCard = ({course}) => {
  
  const { currency, calculateRating  } = useContext(AppContext)

  return (
    <Link to = {'/course/' + course._id} onClick = {() => scrollTo(0,0)}
    className='pb-6 overflow-hidden rounded-lg'>
        <img className='w-full' src = {course.courseThumbnail} alt = ""/>    
        <div className='p-3 text-left text-white'>
          <h3 className='text-base font-semibold text-white'>{course.courseTitle}</h3>        
          <p className='text-white'>{course.educator.name}</p>    
          <p className='text-white'>Maaz</p>   


        <div className='flex gap-2'>
              <p>{calculateRating(course)}</p>
              {/*Adding the star items*/}
              <div className='flex '>      {/*To add the stars in a single row*/}
                  {[...Array(5)].map((_, i) => (
                    <img key = {i} src = {i < Math.floor(calculateRating(course)) ? assets.star : assets.star_blank} alt = '' className='w-3.5 h-3.5'/>
                  ))}
              </div>
        
              <p>{course.courseRatings.length}</p>
        </div>

              <p className='text-base font-semibold text-white'>{currency}{(course.coursePrice - (course.discount * course.coursePrice)/100).toFixed(2)}</p>
        
        </div>
    </Link>
  )
}

export default CourseCard