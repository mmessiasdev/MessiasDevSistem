import React from "react";

const CardCourses = ({ title, desc, logo, cargh}) => {
    return <div id="course" data-aos="fade-left">
                <h3>{title}</h3>
        <div className="contCourse">
            <div className="textPr">
                <h4 className="desc">{desc}</h4>
                <h4 className="appli">Carga Horária: {cargh}</h4>
            </div>  
            <div className="imgPr"><img src={logo} alt="" /></div>

        </div>


    </div>
}

export default CardCourses;