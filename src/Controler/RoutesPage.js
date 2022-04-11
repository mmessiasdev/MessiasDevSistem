import React from "react";

import HomePage from '../View/Screens/HomePage/HomePage'
import About from '../View/Screens/About/About'

import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import history from "../Model/History";
import Projects from "../View/Screens/Projects/Projects";
import Courses from "../View/Screens/Courses/Courses";
import Contate from "../View/Screens/Contate/Contate";

function RoutesPage() {
    
    return (
        <Router history={history}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/About" element={<About />} />
                <Route path="/Projects" element={<Projects />}/>
                <Route path="/Courses" element={<Courses />}/>  
                <Route path="/Contate" element={<Contate />}/>
            </Routes>

        </Router>

    )
}

export default RoutesPage;
