import React from 'react'
import cam from '../assets/cam.png'
import "./Scan.css"

function Scan() {
    return (
        <div className="scan">
            <div className = "scan__header">
                <h1>Gist</h1>
            </div>

            <div className = "scan__body">
                <img src={cam}/>
            </div>

            <div className = "scan__button">
                    <h4>Start</h4>
            </div>



        </div>
    )
}

export default Scan
