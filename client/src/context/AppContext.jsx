import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();


export const AppContextProvider = (props) => {

    // initial isEducator array is empty
    const [isEducator, setisEducator] = useState([true])

    
    // Calculating the average rating for the course
    const calculateRating = (course) => {
        if (course.courseRatings.length === 0){
            return 0;
        }
        else{
            let totalRating = 0
            course.courseRatings.forEach(rating => {
                totalRating += rating.rating
            })
            return totalRating / course.courseRatings.length
        }
    } 

    // To add currency in any part of the project
    const currency = import.meta.env.VITE_CURRENCY
    
    // initial allCourses array is empty
    const [allCourses, setAllCourses] = useState([])

    const navigate = useNavigate()
    
    // Fetch All Courses
    const fetchAllCourses = async () => {
        setAllCourses(dummyCourses)
    }
    
    useEffect(() => {
        fetchAllCourses()
    }, [])

    const value = {
        currency, allCourses, navigate, calculateRating, isEducator, setisEducator
    }

    return (
        // Whatever the components or data are wrapped inside the provider will be passed to this files children.
        <AppContext.Provider value = {value}>
            {props.children}    
        </AppContext.Provider>
    )
}

