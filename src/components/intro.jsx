import React, {useEffect, useState} from "react"
import {gsap, Power1} from "gsap"
import "../sass/intro.scss"

const Intro = (props) =>{
    let border;
    let curtain;
    const [tween, updateTween] = useState(null)
    useEffect(()=>{
        //create gsap timeline when border ref is initialized
        if(border){
            let tl = gsap.timeline({paused: true});
            tl.set(border,{
                right: "inherit",
                left: 0,
            })
            tl.to(border, .2,{
                width: "0%",
                ease: Power1.easeIn,
            }) 
            tl.set(border, {
                right: 0,
                left: "inherit",
            })
            tl.to(border, .2, {
                width: "100%",
                ease: Power1.easeOut,
            })
            updateTween(tl)
        }
    }, [border])

    const handleClick = () =>{
        //pull up if desktop
        if(window.innerWidth > 420){
            gsap.to(curtain, .4, {
                y: "-100vh",
                ease: "easeInOut",
            })
            window.scrollTo(0,0)
        //pull to the side if mobile
        }else{
            gsap.to(curtain, .4, {
                x: "-100vw",
                ease: "easeInOut",
            })
        }
    }
    const hover = (d) =>{
        if(window.innerWidth < 420){
            return
        }
        //if mouse is over, shrink cursor and move border
        if(d === "enter"){
            props.updateShrink(true)
            tween.play();
        //otherwise, reset styles
        }else if (d === "leave"){
            props.updateShrink(false)
            tween.reverse();
        }
    }
    return(<div 
       ref = {div=>curtain=div}
       className = "introContainer">
        <h1>Hi, I'm Will.</h1>
        <p>I design and build websites for small & medium sized organizations. The websites I make are for brands to whom creativity, indivuduality, and user-experience are paramount. </p>
        <p><span
        onMouseOver = {()=>hover("enter")}
        onMouseLeave = {()=>hover("leave")}
        onClick = {()=>handleClick()}>
        <span
        ref = {div=>border=div}    
        className = "border"></span>Enter the site</span> to see a selection of past projects. </p>
    </div>)
}

export default Intro;