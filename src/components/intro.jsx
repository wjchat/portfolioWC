import React, {useEffect, useState} from "react"
import {gsap, Power1} from "gsap"
import "../sass/intro.scss"

const Intro = (props) =>{
    let border;
    let curtain;
    let enterSite
    const [tween, updateTween] = useState(null)
    useEffect(()=>{
        //create gsap timeline when border ref is initialized
        if(border && enterSite){
            let tl = gsap.timeline({paused: true});
            tl.to(border, .2,{
                height: "1.82vw",
            })
            tl.to(enterSite, .2,{
                y: "0vw",
            }, `-=.2`)
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
            props.updateMouseColor("#080808")
            tween.play();
        //otherwise, reset styles
        }else if (d === "leave"){
            props.updateShrink(false)
            props.updateMouseColor("#F8F8FF")
            tween.reverse();
        }
    }
    return(<div 
       ref = {div=>curtain=div}
       className = "introContainer">
        <h1>Hi, I'm Will.</h1>
        <p>I design and build websites for small & medium sized organizations. The websites I make are for brands who value creativity, indivuduality, and user-experience the most. </p>
        <p>
        <span
        onMouseOver = {()=>hover("enter")}
        onMouseLeave = {()=>hover("leave")}
        onClick = {()=>handleClick()}>
        <span
        ref = {div=>border=div}    
        className = "border"><span ref = {div=>enterSite=div}>Enter the site</span></span>
        Enter the site</span> to see a selection of past projects. </p>
    </div>)
}

export default Intro;