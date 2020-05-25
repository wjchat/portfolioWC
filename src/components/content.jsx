import React,{useEffect, useState} from 'react'
import gsap from 'gsap';

import "../sass/content.scss"

const ContentBox = props =>{
    let animate
    useEffect(()=>{
        if(animate){
            let anOb = animate.getBoundingClientRect();
            let tl = gsap.timeline({paused: true});  
            tl.set(animate, {
                scale: 1,
                rotate: 0,
                ease: "linear",
            })
            tl.to(animate, 1, {
                scale: 1,
                rotate: 0,
                ease: "linear",
            })              
            tl.to(animate, 1, {
                scale: 1,
                rotate: 0,
                ease: "linear",
//                x: "10%",
            })            
//            tl.to(animate, .4, {
//                ease: "linear",
//                opacity: 1,
//            }, `-=1`)
//            tl.to(animate, .2,{
//                scale: 1.5,
//            })


            window.addEventListener("scroll",e=>{
                if(window.pageYOffset > anOb.y - anOb.height && window.pageYOffset < anOb.y + anOb.height){
//                    console.log((window.pageYOffset - anOb.y + anOb.height) / (anOb.height * 2))
                    tl.progress((window.pageYOffset - anOb.y + anOb.height) / (anOb.height * 2))
                }
            }, {passive: true})
        }
    }, [animate])
    return(<div ref = {div=>animate=div} className = "contentBox">
        {props.children}
    </div>)
}



const Content = props =>{
    let message
    const handleEnter= (color) =>{
        props.updateShrink(true)
        props.updateMouseColor(color)
    }
    const handleLeave= () =>{
        props.updateShrink(false)
        props.updateMouseColor("#F8F8FF")
        gsap.set(message,{
            visibility: "hidden",
        })
    }
    const handleClick = () =>{
    const el = document.createElement("textarea")
    el.value = "wchatterson@gmail.com"
    document.body.appendChild(el)
    el.select()
    document.execCommand("copy")
    document.body.removeChild(el)
    gsap.set(message,{
        visibility: "visible",
    })
    }
    return(
        <div className = "scrollContainer">
        <ContentBox>
            <div className = "titlePage">
            <h1>WILL CHATT-<br/>ERSON</h1>
            <h2>DESIGN & DEVELOPMENT</h2>
            </div>
        </ContentBox>
        <ContentBox>
            <h1
            onMouseMove = {()=>handleEnter("#D3C371")}
            onMouseLeave = {()=>handleLeave()}
            ><a href="" target = "_blank">
            MATTE <br/>PROJECTS
            </a>
            </h1>
            <h2
            >CREATIVE DIRECTION, DESIGN, DEVELOPMENT</h2>
        </ContentBox>
        <ContentBox>
            <h1
            onMouseMove = {()=>handleEnter("#71A4D3")}
            onMouseLeave = {()=>handleLeave()}
            ><a href="" target = "_blank">
            BUG B. <br/>VINTAGE
            </a>
            </h1>
            <h2>BRANDING, DESIGN, DEVELOPMENT</h2>
        </ContentBox>
        <ContentBox>
            <h1
            onMouseMove = {()=>handleEnter("#1B1B1B")}
            onMouseLeave = {()=>handleLeave()}
            >
            <a href="" target = "_blank">
            BSR
                </a> 
                </h1>
            <h2>MOTION DESIGN, DEVELOPMENT</h2>
        </ContentBox>
        <ContentBox>   
            <h1>GET IN TOUCH</h1>
            <h2>say hi :) -> <span
            onMouseMove = {()=>handleEnter("")}
            onMouseLeave = {()=>handleLeave()}
            onClick = {()=>handleClick()}
            >wchatterson@gmail.com</span></h2>
            <h2 
            style ={{visibility: "hidden"}}
            ref = {div=>message=div}>EMAIL COPIED TO CLIPBOARD</h2>
        </ContentBox>
        
        </div>
    )
}

export default Content