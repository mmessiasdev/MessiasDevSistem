import React from "react";
import { Link } from 'react-router-dom';

import WallpaperPhoto from '../../Assets/wallpaper.png'

const HomePage = () => {

    return <div className="HomePage ">
        <div className="contateDiv ">
            <div className="buttons ">
                <div className="titleBut">
                    <div className="dinamic">
                        <li><span>Visite-me</span></li>
                        <li><span>Contate-me</span></li>
                    </div>
                </div>
                <Link className="options " to="/About">
                    <h2 className="Port ">Portfólio <i className="fa-solid fa-terminal "></i></h2>
                </Link>
                <div className="optionsRs">
                    <a href="https://www.instagram.com/mmessiasdev" target="_blank" rel="noopener noreferrer">Instagram <i className="fa-brands fa-instagram "></i></a>
                    <a href="https://www.linkedin.com/in/m-messias-426868207/" target="_blank" rel="noopener noreferrer">Linkedin <i className="fa-brands fa-linkedin "></i></a>
                    <a href="https://github.com/mmessiasdev" target="_blank" rel="noopener noreferrer">Git Hub <i className="fa-brands fa-github "></i></a>
                    <a href="https://api.whatsapp.com/send?phone=5577991057040" target="_blank" rel="noopener noreferrer">WhatsApp <i className="fa-brands fa-whatsapp "></i></a>
                </div>
            </div>
        </div>
        <div className="circle " data-aos="fade-right">
            <div className="circleUp "></div>
            <div className="circleDown "></div>

        </div>
        <div className="photo ">
            <img src={WallpaperPhoto} alt=" " />
        </div>


        <div className="cont " data-aos="fade-left">
            <div className="title ">
                <h1> M. Messias</h1>
                <h2>Dev and UI/UX Designer</h2>
            </div>

        </div>
    </div>
}

export default HomePage;