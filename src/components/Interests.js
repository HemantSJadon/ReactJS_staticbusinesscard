import React from "react";

export default function Interest(){
    return (
        <div className="interests">
            <InterestsSectionTitle />
            <InterestsDescription />
        </div>
    )
}
function InterestsSectionTitle(){
    return (
        <h2>Interests</h2>
    )
}
function InterestsDescription(){
    return (
        <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
    )
}