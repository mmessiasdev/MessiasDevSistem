import React, { useEffect, useState } from "react";
import { SiAboutdotme } from 'react-icons/si';
import { GrProjects } from 'react-icons/gr';
import { GrCertificate } from 'react-icons/gr';
import { IoMdPersonAdd } from 'react-icons/io';

import { FaWhatsapp, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';

import { Link } from 'react-router-dom';

const Menu = () => {
    const [navBar, setNavBar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 80 && window.scrollY <= 6975){
            setNavBar(true);
        }else {
            setNavBar(false);
        }
    };
    console.log(window.scrollY);

    window.addEventListener('scroll', changeBackground);

    return <div className={navBar ? 'menuActive' : 'menu'} >
        <div className="itensMenu">

            <Link to="/Projects">
                <a href=""> <GrProjects className="icon"/> <h4>Projetos</h4></a>
            </Link>
            <Link to="/Courses">
                <a href="">  <GrCertificate className="icon"/><h4>Cursos</h4></a>
            </Link>
            <Link to="/Contate">
                <a href=""> <IoMdPersonAdd className="icon"/><h4>Contate-me</h4></a>
            </Link>

        </div>
        <div className="redesMenu">
            <a href="https://api.whatsapp.com/send?phone=5577991057040" target="_blank" rel="noopener noreferrer"><FaWhatsapp/> </a>
            <a href="https://www.youtube.com/channel/UCHSrdW4QVmr-CjVW3KP2FAw" target="_blank" rel="noopener noreferrer"><FaYoutube/> </a>
            <a href="https://www.instagram.com/mmessiasdev" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
            <a href="https://mail.google.com/mail/u/0/?hl=pt-BR#inbox?compose=CllgCKCBBNKrCrgBHFHGDnQGnvKzqvtgqXmshLnkfCNvWFMCMBrVCBPqKGNdvcVsrfDXpLZRTcL" target="_blank" rel="noopener noreferrer"><AiOutlineMail/></a>
            <a href="https://www.linkedin.com/in/m-messias-426868207" target="_blank" rel="noopener noreferrer"><FaLinkedinIn/></a>
            <a href="https://github.com/mmessiasdev" target="_blank" rel="noopener noreferrer"><FiGithub/></a>

        </div>
    </div>
}

export default Menu;