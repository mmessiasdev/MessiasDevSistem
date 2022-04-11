import React, { } from "react";

import { FaGithubSquare } from 'react-icons/fa';
import { BsCameraVideoFill } from 'react-icons/bs';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardProject = ({ title, desc, appli, github, post1, post2, post3, video }) => {

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true
    }

    return (<div id="project" data-aos="fade-right" >
        <h3>{title}</h3>
        <div className="contProject">
            <Slider className="imgPr" {...settings}>
                <div className="carouselPosts">
                    <img src={post1} alt="" srcset="" />
                </div>
                <div className="carouselPosts">
                    <img src={post2} alt="" srcset="" />
                </div>
                <div className="carouselPosts">
                    <img src={post3} alt="" srcset="" />
                </div>
            </Slider>
            <div className="textPr">
                <h4 className="desc">{desc}</h4>
                <h4 className="appli">{appli}</h4>
                <div className="divRedes">
                    <a className="video" href={video}><BsCameraVideoFill /></a>
                    <a className="gitHub" href={github}><FaGithubSquare /></a>

                </div>
            </div>

        </div>

    </div>
    );
}

export default CardProject;