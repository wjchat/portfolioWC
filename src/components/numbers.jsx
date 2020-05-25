import React,{useEffect} from "react";

import arrowImg from "../assets/images/arrow.svg"
import blackArrowImg from "../assets/images/blackArrow.svg"

import "../sass/numbers.scss";

import gsap from "gsap";


const Numbers = props =>{
    let screen
    let list
    useEffect(()=>{
        if(screen && list){
            let divHeight = list.getBoundingClientRect().height
            let tl = gsap.timeline({paused: true});
            tl.set(screen,{
                height: "0vh",
            })
            tl.to(screen, 1, {
                height: "20vh",
                ease: "linear",
            })
            tl.to(screen, 3, {
                y: divHeight * 3/4,
                ease: "linear",
            })
            tl.to(list, 3, {
                y: -1 * divHeight * 3/4,
                ease: "linear",
            }, `-=3`)
            window.addEventListener("scroll", e=>{
                tl.progress(window.pageYOffset /( document.body.offsetHeight - window.innerHeight))
            })            
            window.addEventListener("resize", e=>{
                tl.progress(window.pageYOffset /( document.body.offsetHeight - window.innerHeight))
            })
        }
    }, [screen, list])
    useEffect(()=>{
        if(screen){
            let anOb = screen
            let mouseDown = false;
            anOb.addEventListener('mousedown', function() { mouseDown = true })
            anOb.addEventListener('mouseup', function() { mouseDown = false })
            anOb.addEventListener('mouseleave', function() { mouseDown = false })
            
            anOb.addEventListener('mousemove', function(e) { 
              if (!mouseDown) {
                return;
              }
              let move = e.movementY
              window.scrollBy(0, move * 2.5)
            })
        }
    }, [screen])
    const handleEnter = () =>{
        props.updateMouseColor("#080808")
        props.updateShrink(true)
    }
    const handleLeave = () =>{
        props.updateMouseColor("#F8F8FF")
        props.updateShrink(false)
    }
    const scrollTime = (index) =>{
        let amount = window.innerHeight * index;
        gsap.set(document.getElementsByTagName("html")[0], {
            scrollBehavior: "smooth",
        })
        window.scrollTo(0, amount)
        gsap.set(document.getElementsByTagName("html")[0], {
            scrollBehavior: "auto",
        })
    }
    const arrowClick = (step) =>{
        let index = Math.floor((window.scrollY + 10) / window.innerHeight)
        index = index + step;
        scrollTime(index);
    }
    return(<div className = "numbersContainer">
        <div className = "list">
            <li
                onMouseEnter = {()=>props.updateShrink(true)}
                onMouseLeave = {()=>props.updateShrink(false)}
                onClick = {()=>scrollTime(1)}
            >01</li>
            <li
                onMouseEnter = {()=>props.updateShrink(true)}
                onMouseLeave = {()=>props.updateShrink(false)}
                onClick = {()=>scrollTime(2)}
            >02</li>
            <li
                onMouseEnter = {()=>props.updateShrink(true)}
                onMouseLeave = {()=>props.updateShrink(false)}
                onClick = {()=>scrollTime(3)}
            >03</li>
            <li                            
                onMouseEnter = {()=>props.updateShrink(true)}
                onMouseLeave = {()=>props.updateShrink(false)}
                onClick = {()=>arrowClick(1)}
                className = "img"><img src={arrowImg} alt=""/></li>
        </div>
            <div 
              onMouseEnter = {()=>handleEnter()}
              onMouseLeave = {()=>handleLeave()}
              ref = {div=>screen=div} className = "overLayWindow">
               <div ref = {div=>list=div} className = "listContainer">
                    <li
                    draggable = {false}
                    onClick = {()=>scrollTime(1)}
                   >01</li>
                    <li
                    draggable = {false}
                    onClick = {()=>scrollTime(2)}
                    >02</li>
                    <li
                    draggable = {false}
                    onClick = {()=>scrollTime(3)}
                    >03</li>
                    <li className = "img"><img 
                    draggable = {false}
                    onClick = {()=>arrowClick(-1)}
                    className = "backUp" src={blackArrowImg} alt=""/></li>
               </div>
            </div>
    </div>)
}

export default Numbers