import React from "react"
import "../sass/mobile.scss"
import MobileItem from "./mobileItem.jsx"
import arrow from "../assets/images/mobileArrow.svg"
import MobileNumbers from "./mobileNumbers.jsx"

import gsap from "gsap"

const Mobile = props =>{
    const handleArrowClick = (direction) =>{
        
        let numContainer = document.getElementsByClassName("contentContainer")[0];
        let right = ((((Math.floor(numContainer.scrollLeft / document.body.clientWidth)) + 1) * (document.body.clientWidth + 1)))
        let left = ((((Math.floor(numContainer.scrollLeft / document.body.clientWidth)) - 1) * (document.body.clientWidth + 1)))
        let num = direction === "left" ? left : right;
        numContainer.scrollTo(num, 0)
        
    }
    return(<div className = "mobileContainer">
        <div className ="numberContainer">
            <MobileNumbers />
        </div>
        <div className = "contentContainer">
           <div className = "reel">
                <MobileItem first = {true} header = {<h1>WILL<br/>CHATT-<br/>ERSON</h1>} subHeader = {<h3>Designer & Developer</h3>} />
                <MobileItem header = {<h2>MATTE PROJECTS</h2>} subHeader = {<h3>CREATIVE DIRECTION, DESIGN, DEVELOPMENT</h3>} />
                <MobileItem header = {<h2>BUG B. VINTAGE</h2>} subHeader = {<h3>BRANDING, DESIGN, DEVELOPMENT</h3>} />
                <MobileItem header = {<h2>BSR</h2>} subHeader = {<h3>MOTION DESIGN, DEVELOPMENT</h3>} />
                <MobileItem first = {true} header = {<h2>AVAILABLE FOR HIRE</h2>} subHeader = {<h3>wchatterson@gmail.com</h3>} />
            </div>
        </div>
        <div className = "arrowContainer">
            <img  className = "left"
            onClick = {()=>handleArrowClick("left")}
            src={arrow} alt=""/>
            <img  className = "right"
            onClick = {()=>handleArrowClick("right")}
            src={arrow} alt=""/>            
        </div>
    </div>)
}

export default Mobile