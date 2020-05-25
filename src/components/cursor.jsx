import React,{useEffect} from "react";

import  {gsap, Power3, Back} from "gsap"

import "../sass/cursor.scss"

const Cursor = props =>{
    let cursor
    let circ
    useEffect(()=>{
        if(cursor && circ){
            let anOb = cursor
            let aCirc = circ
            window.addEventListener("mousemove", (e)=>{
                gsap.to(anOb,1,{
                    y: e.y - 1.5,
                    x: e.x - 1.5,
                    ease: Power3.easeOut,
                    opacity: 1,
                })                
                gsap.to(aCirc, .5,{
                    y: e.y - 23,
                    x: e.x - 20,
                    ease: Back.easeOut.config(.3),
                    opacity: 1,
                })
            })
        }
    }, [cursor, circ])
    useEffect(()=>{
        if(props.mouseColor && cursor && circ){
            gsap.to(cursor, .3,{
                backgroundColor: props.mouseColor,
            })
            gsap.to(circ, .3,{
                borderColor: props.mouseColor,
            })
        }
    }, [props.mouseColor, cursor, circ])
    useEffect(()=>{
        if(props.shrinkMouse != null && circ){
            if(props.shrinkMouse === true){
                gsap.to(circ, .201,{
                    scale: .5,
                    ease: Power3.easeOut,
                    delay: 0,
                    borderWidth: "8px",
                })
            }else{
                gsap.to(circ, .2, {
                    scale: 1,
                    borderWidth: "1px",
                })
            }
        }
    }, [props.shrinkMouse, circ])
    return(<div className = "cursorContainer">
        <div ref = {div=>cursor=div} className = "cursor"></div>
        <div ref = {div=>circ=div} className = "circ"></div>
    </div>)
}

export default Cursor;