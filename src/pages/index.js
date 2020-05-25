import React, {useState} from "react"

import Cursor from "../components/cursor.jsx"
import SmoothScroll from "../components/smoothScroll.jsx"

import SEO from '../components/seo.js';
import "../assets/css/default.css"

import { 
    TweenMax,
    TimelineMax,
    AttrPlugin,
    CSSPlugin,
} from "gsap/all";

// Ensure modules don't get dropped by tree-shaking
const activated = [
    TweenMax,
    TimelineMax,
    AttrPlugin,
    CSSPlugin,
];

const IndexPage = () => {
    const [mouseColor, updateMouseColor] = useState(null)
    const [shrinkMouse, updateShrink] = useState(false)
    
    return(<div>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Questrial&display=swap" rel="stylesheet" />
        <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Expires" content="0" />
      </head>
        <SEO title = "Will Chatterson" />
          <SmoothScroll 
          updateShrink = {(bool) => updateShrink(bool)}
          updateMouseColor = {(newColor)=>updateMouseColor(newColor)}>
           </SmoothScroll>
           <Cursor 
           shrinkMouse = {shrinkMouse}
           mouseColor = {mouseColor} />
    </div>)
}

export default IndexPage 