import React from "react";

import { FaWhatsapp, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';

const Contate = () => {
    return <div className="contate" id="contate">
        <h1 className="aboutTitle">Contate-me e <br /> Conheça-me</h1>
        <div className="contRedeDiv">
            <div className="contRedes">
                <div className="itensRedes" data-aos="fade-left">
                    <a href="https://api.whatsapp.com/send?phone=5577991057040" className="gridRedes"><img src="https://images.unsplash.com/photo-1610548822783-33fb5cb0e3a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" srcset="" /> <h3>WhatsApp</h3><i><FaWhatsapp /> </i></a>
                    <a href="https://www.youtube.com/channel/UCHSrdW4QVmr-CjVW3KP2FAw" className="gridRedes"><img src="https://images.unsplash.com/photo-1521302200778-33500795e128?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" srcSet="" /> <h3>Youtube</h3><i><FaYoutube /> </i></a>
                    <a href="https://www.instagram.com/mmessiasdev" className="gridRedes"><img src="https://images.unsplash.com/photo-1585250003309-694ff34512d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" srcSet="" /> <h3>Instagram</h3><i><FaInstagram/></i></a>
                    <a href="https://mail.google.com/mail/u/0/?hl=pt-BR#inbox?compose=CllgCKCBBNKrCrgBHFHGDnQGnvKzqvtgqXmshLnkfCNvWFMCMBrVCBPqKGNdvcVsrfDXpLZRTcL" className="gridRedes"><img src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=717&q=80" alt="" srcSet="" /> <h3>Gmail</h3><i><AiOutlineMail /></i></a>
                    <a href="https://www.linkedin.com/in/m-messias-426868207" className="gridRedes"><img src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" srcSet="" /> <h3>Linkedin</h3><i><FaLinkedinIn /></i></a>
                    <a href="https://github.com/mmessiasdev" className="gridRedes"><img src="https://images.unsplash.com/photo-1643132935286-ebbcd087d249?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" srcSet="" /> <h3>GitHub</h3><i><FiGithub /></i></a>

                </div>

                <img src="https://i.imgur.com/xYKzQRo.png" alt="" srcset="" data-aos="fade-left" data-aos-duration= "1000" data-aos-delay= "50"/>
            </div>
        </div>

    </div>
}

export default Contate;