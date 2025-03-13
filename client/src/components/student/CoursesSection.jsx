import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';
import { AppContext } from '../../context/AppContext';

const CoursesSection = () => {
  // Correctly call useContext at the top of your component
  const { allCourses } = useContext(AppContext);

  return (
    <div className='py-16 md:px-40 px-8 md:px-0 md_my-10 gap-4'>
      {/*tailwind wali file me gridTemplateColumns part me add kardiya customizable size to keep the website responsive*/}
      <div className='grid grid-cols-auto px-4 md:px-0 md:my-16'>
        {/* Map over the first 4 courses */}
        {allCourses.slice(0, 3).map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>

      {/* Scroll to the top function when clicking "Show all courses" */}
      <Link
        to='/course-list'
        onClick={() => window.scrollTo(0, 0)}
        className='text-white border border-white px-10 py-3'
      >
        Show all courses
      </Link>
    </div>
  );
};

export default CoursesSection;
