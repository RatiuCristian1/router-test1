import React from "react";

export default function Caravans() {
    return (
        <div className="caravans--container">
            <div className="caravan--image--container" >
                <p>A</p>
                <img className="caravan--image" src="images\1382399Aero470.jpg" />
            </div>

            <div className="caravan--image--container">
                <img className="caravan--image" src="images\1376588-768x429Nomad.jpg" />
                <p>B</p>
            </div>

            <div className="caravan--image--container">
                <p>C</p>
                <img className="caravan--image" src="images\9PulseGt.jpg" />
            </div>

            <div className="caravan--image--container">
                <img className="caravan--image" src="images\maxresdefaultAlphaA.jpg" />
                <p>D</p>
            </div>
        </div>
    )
} 