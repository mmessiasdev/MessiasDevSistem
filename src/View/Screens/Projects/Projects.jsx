import React from "react";
import CardProject from "./CardProject";
import Data from '../../../Model/Projects.json';

const Projects = () => {
    return <div className="projects">

        <div className="decoration">
            <p className="textDecoration">Projetos</p>
        </div>

        <div className="circlePr ">
            <div className="circleUp ">
                <h1 className="aboutTitle">Projetos</h1>
                <h2 className="">Front-End & UI/UX</h2>
            </div>

        </div>

        {Data.map((results) => {
            return <CardProject title={results.title} desc={results.desc} appli={results.applications} github={results.github} post1={results.post1} post2={results.post2} post3={results.post3} video={results.video}/>
        })}

    </div>
}

export default Projects;