import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function LinkedinButton() {
    const handleClick = () => {
        const linkedinProUrl = "https://www.linkedin.com/in/hemant-singh-jadon-a171768a";
        // window.location.href = linkedinProUrl;
        window.open(linkedinProUrl,"_blank");

    };
    return (
        <button onClick={handleClick} className="contact-buttons--linkedinbutton">
            <FontAwesomeIcon icon={faLinkedin}/><h3> Linkedin</h3>
        </button>
    );
}