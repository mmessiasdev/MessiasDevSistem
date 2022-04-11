import React from "react";

import { BsChevronDoubleDown } from 'react-icons/bs'

import WallpaperPhoto from "../../Assets/wallpaperresp.png"
import Contate from "../Contate/Contate";
import Courses from "../Courses/Courses";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";



const About = () => {

    return <div className="main">
        <Menu/>
        <div className="about" data-aos="fade-right">
            <div className="circleAb ">
                <div className="circleUp ">
                    <h1 className="aboutTitle">Sobre mim</h1>
                    <h2>M. Messias</h2>
                </div>
                <div className="circleDown "></div>

            </div>
            <div className="photoAb ">
                <img src={WallpaperPhoto} alt=" " />
            </div>
            <div className="contCenterAb">
                <h3>Trajetória</h3>
                <div className="textCenterAb">
                    <h4>Sou estudante de Engenharia de Software, aos 16 anos eu decidi investir na área da Tecnologia das Informações. Minha primeira linguagem foi o Python, no qual eu investi na parte da automação com alguns cursos como o da HashTag e do Curso em Vídeo. Logo após fui para o Html, no qual aprendi seus conceitos e onde eu descobri o Front-End e o UI/UX. Depois de um tempo me aprofundei no React, com alguns cursos da DIO e com o BootCamp de 100 Horas da Duzz. Nesse percurso quis me tornar um desenvolvedor mobile com o Flutter, então decidi me dedicar no Framework com cursos como o do Polimorfismo e com o conhecimento que eu já tinha em Java, foi bem fácil me adaptar ao Dart. Um tempo depois fiz um curso do SENAC de 6 meses sobre Desenvolvimento Mobile,  que também acrescentou demais no meu conceito sobre o Desenvolvimento de aplicativos móveis e a pouco tempo fiz um curso da USP sobre User Interface (UI) e User Experience (UX). Atualmente sou desenvolvedor Front-End e UX/UI Designer com experiência Mobile, Web, Desktop em React/Flutter e automação em Python.</h4>
                </div>
                <div className="iconAb"><BsChevronDoubleDown /></div>
            </div>
            
        </div>
        <Projects />
        <Courses />
        <Contate />
        <Footer />
    </div>
}

export default About;