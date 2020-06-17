import React, { useEffect, useState } from "react"
import Numbers from "./numbers.jsx"

import gsap from "gsap"

import "../sass/sideNav.scss"

const Hire = props => {
  let message
  const [show, updateShow] = useState(false)
  useEffect(()=>{
      if(message){
          if(show){
              gsap.set(message, {
                  display: "block",
              })
          }else{
              gsap.set(message, {
                  display: "none",
              })
          }
      }
  }, [message, show])
  const handleClick = () => {
    const el = document.createElement("textarea")
    el.value = "will@willchatterson.com"
    document.body.appendChild(el)
    el.select()
    document.execCommand("copy")
    document.body.removeChild(el)
    updateShow(true);
  }
  const handleLeave = () =>{
      props.updateShrink(false)
      updateShow(false)
  }
  return (
    <div className="hire">
      <div
        onMouseEnter={() => props.updateShrink(true)}
        onMouseLeave={() => handleLeave()}
        onClick={() => handleClick()}
      >
        <h1>AVAILABLE FOR HIRE</h1>
        <h1>will@willchatterson.com</h1>
        <h1 style={{ display: "none" }} ref={div => (message = div)}>
          EMAIL COPIED TO CLIPBOARD
        </h1>
      </div>
    </div>
  )
}
const SideNav = props => {
  return (
    <div className="sideNav">
      <Hire updateShrink={bool => props.updateShrink(bool)} />
      <Numbers
        updateShrink={bool => props.updateShrink(bool)}
        updateMouseColor={newColor => props.updateMouseColor(newColor)}
      />
    </div>
  )
}

export default SideNav
