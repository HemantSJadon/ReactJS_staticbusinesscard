import React from "react";
import ProPic from "./info/ProPic";
import Name from "./info/Name";
import Profession from "./info/Profession";
import Website from "./info/Website";
import Buttons from "./info/Buttons";

export default function Info(){
    return (
        <div className="info-container">
        <ProPic />
        <Name />
        <Profession />
        <Website />
        <Buttons />
        </div>
    );
}