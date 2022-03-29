import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


export default function EmailButton(){
    const handleClick = () => {
        window.location.href = "mailto:"+ "h.s.jadon185@gmail.com"
    };
    return (
            <button onClick={handleClick/* () => window.location.href = 'mailto:h.s.jadon185@gmail.com' */} className="contact-buttons--emailbutton">
            <FontAwesomeIcon icon={faEnvelope}/><h3> Email</h3>
            </button>
    )
}