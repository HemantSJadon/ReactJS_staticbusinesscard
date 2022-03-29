import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitterSquare,faFacebookSquare,faInstagramSquare, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

export default function Footer(){
    return (
        <div className="footer">
            <FooterIcons />
        </div>
    )
}
function FooterIcons(){
    return (
        <ul className="footer--iconlist">
            <li><a href="https://www.twitter.com" target="_blank"><FontAwesomeIcon className="footer--icon" icon={faTwitterSquare}/></a></li>
            <li><a href="https://www.facebook.com" target="_blank"><FontAwesomeIcon className="footer--icon" icon={faFacebookSquare}/></a></li>
            <li><a href="https://www.instagram.com" target="_blank"><FontAwesomeIcon className="footer--icon" icon={faInstagramSquare}/></a></li>
            <li><a href="https://www.github.com" target="_blank"><FontAwesomeIcon className="footer--icon" icon={faGithubSquare}/></a></li>
        </ul>
    )
}