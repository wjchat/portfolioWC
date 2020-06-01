import React, { useEffect } from "react"
import "../sass/mobileNumbers.scss"
import gsap from "gsap"

const MobileNumbers = props => {
  let window
  let background
  useEffect(() => {
    if (window && background) {
      let tl = gsap.timeline({ paused: true })
      tl.to(window, 1, {
        width: "30vw",
        ease: "linear",
      })
      tl.to(window, 2, {
        x: "60vw",
        ease: "linear",
      })
      tl.to(
        background,
        2,
        {
          x: "-60vw",
          ease: "linear",
        },
        `-=2`
      )
      tl.to(window, 1, {
        x: "90vw",
        width: "0vw",
        ease: "linear",
      })
      tl.to(
        background,
        1,
        {
          x: "-90vw",
          ease: "linear",
        },
        `-=1`
      )
      let numContainer = document.body.getElementsByClassName(
        "contentContainer"
      )[0]
        numContainer.addEventListener("scroll", e=>{
            tl.progress(numContainer.scrollLeft /(document.body.offsetWidth * 4))
        })            
        numContainer.addEventListener("resize", e=>{
            tl.progress(numContainer.scrollLeft /(document.body.offsetWidth * 4))
        })     
    }
  }, [window, background])
  return (
    <div className="mobileNumbersContainer">
      <div className="foreGround">
        <li>01</li>
        <li>02</li>
        <li>03</li>
      </div>
      <div ref={div => (window = div)} className="window">
        <div ref={div => (background = div)} className="background">
          <li>01</li>
          <li>02</li>
          <li>03</li>
        </div>
      </div>
    </div>
  )
}
export default MobileNumbers
