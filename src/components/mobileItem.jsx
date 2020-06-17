import React from "react"

import "../sass/mobileItem.scss"

const MobileItem = props =>{
    return(<div className = "mobileItemContainer">
        {props.header}
        {props.subHeader}
        {props.first ? "" : <h3 className = "link"><a href={props.link} target = "_blank">VISIT WEBSITE.</a></h3>}
        {props.comingSoon ? <h3>COMING SOON.</h3> : ''}
    </div>)
}

export default MobileItem