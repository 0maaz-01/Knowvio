import React, { useContext } from 'react';
import {assets} from '../../assets/assets';
import { Link } from 'react-router-dom';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { AppContext } from '../../context/AppContext';

const Navbar = () => {

  const {navigate, isEducator} = useContext(AppContext)
  
  // if the user is on the course-list route or the course list page
  const isCourseListPage = location.pathname.includes('/course-list');

  const {openSignIn} = useClerk();
  const { user } = useUser();

  return (  // flex arranges children in a row, items-center ensures that the items are centered vertically within the flex container.  
                                                                                                                    // if we are on course page then navbar color should be white otherwise cyan
    <div  className = 'flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 py-4 bg-custom-purple'>                             {/*width on small and large screen, cursor wala use hota h, ye batane ke liye ki image clickable h*/}             
      <img onClick = {() => navigate('/')} src = {assets.logo} alt = "Logo" className = 'w-28 lg:w-32 cursor-pointer' />
                  
                  {/*medium aur badi screen pe flex wala laga do and items ko center pe krdo, gap 5 ka hona chahiye dono ke beech me and text grey color ka hoga*/}
      <div className='hidden md:flex items-center gap-5 text-white'>
              
              {/*If the user is logged in, only then display become educator and my enrollment button*/}
              {user && 
                <>                  <div className = 'flex items-center gap-5 text-white'>
                      <button onClick = {() => {navigate('/educator')}}>{isEducator ? 'Dashboard' : 'Become Educator'}</button>
                        <Link to = '/my-enrollments'> My Enrollments</Link>
                  </div>
                </>
              }
              
              {/*If the user is signed in then display UserButton else display Create Account Button*/}                                                                       {/*padding x, padding y, borders fully rounded*/}
              { user ? <UserButton/> : <button onClick = {() => openSignIn()} className = 'bg-black text-white px-5 py-2 rounded-full'>Create Account</button>}
      </div>

        {/*For phone screens*/}
      <div className = 'md:hidden flex items-center gap-2 sm:gap-5 text-white'>
        {user && 
          <>
            <div className = 'flex items-center gap-5 text-white text-sm md:text-lg lg:text-2xl xl:text-3xl'>
                <button onClick = {() => {navigate('/educator')}}>{isEducator ? 'Dashboard' : 'Become Educator'}</button>
            <Link to = '/my-enrollments'> My Enrollments</Link>
            </div>
          </>
        }
            { user ? <UserButton/> : <button onClick = {() => openSignIn()}><img src = {assets.user_icon}/></button>}
      </div>
    
    
    
    </div>
  )
}

export default Navbar