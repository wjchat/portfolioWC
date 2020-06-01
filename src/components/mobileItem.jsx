import React from "react"

import "../sass/mobileItem.scss"

const MobileItem = props =>{
    return(<div className = "mobileItemContainer">
        {props.header}
        {props.subHeader}
        {props.first ? "" : <h3 className = "link">VISIT WEBSITE</h3>}
    </div>)
}

export default MobileItem