import React from "react";
import EmailButton from "./EmailButton";
import LinkedinButton from "./LinkedinButton";


export default function Buttons(){
    return (
        <div className="contact-buttons">
        <EmailButton />
        <LinkedinButton />
        </div>
    )
}