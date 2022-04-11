import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import '../src/index.css'
import './View/Style/Responsive.css';
import './View/Style/Animation.css'
import './View/Screens/HomePage/HomePage.css';
import './View/Screens/About/About.css';
import './View/Screens/Projects/Projects.css';
import './View/Screens/Courses/Courses.css';
import './View/Screens/Contate/Contate.css';
import './View/Screens/Footer/Footer.css';
import './View/Screens/Menu/Menu.css';

import AOS from 'aos';
import '../node_modules/aos/dist/aos.css';
AOS.init();



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

