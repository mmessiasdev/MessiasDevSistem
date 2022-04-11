import React from "react";

import CardCourses from './CardCourses.jsx'

import Data from '../../../Model/Courses.json'

const Courses = () => {
    return <div className="courses">
                <div className="decoration">
            <p className="textDecoration">Cursos</p>
        </div>  
        <div className="circleCs ">
            <div className="circleUp ">
                <h1 className="aboutTitle">Cursos e <br/> formações</h1>                
            </div>

        </div>

        {Data.map((results) => {
            return <CardCourses title={results.title} desc={results.desc} logo={results.logo} cargh={results.cargh}/>
        })}
    </div>
}

export default Courses;