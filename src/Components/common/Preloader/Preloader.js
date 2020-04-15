import s from "./Preloader.module.css"
import React from "react";

const Preloader = (props) =>{
    return(
    <div className={s.lds_hourglass}></div>
    )
};

export default Preloader;