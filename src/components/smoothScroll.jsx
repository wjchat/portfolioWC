import React from "react";
import { gsap, Power4 } from "gsap";
import Content from './content.jsx';
import SideNav from './sideNav.jsx'

import "../sass/smoothScroll.scss";

export default class SmoothScroll extends React.Component {
  state = {
    height: null
  };

  componentDidMount() {
    this.setState({
        height: window.innerHeight
    })
      let ro = new ResizeObserver(elements => {
        for (let elem of elements) {
          const crx = elem.contentRect;
          this.setState({
            height: crx.height,
            windowHeight: window.innerHeight,
          });
        }
      });
    window.addEventListener("scroll", this.onScroll);
    ro.observe(this.viewport);
  }

  onScroll = () => {
    gsap.to(this.viewport, 1, {
      y: -window.pageYOffset,
      ease: Power4.easeOut
    });
  };

  render() {
    return (
      <>
        <div className = "nav">{<SideNav
        updateShrink = {(bool) => this.props.updateShrink(bool)}
        updateMouseColor = {(newColor)=>this.props.updateMouseColor(newColor)} 
        windowHeight = {this.state.windowHeight}
        height = {this.state.height} />}</div>
        <div className="viewport" ref={ref => (this.viewport = ref)}>
          <Content
          updateShrink = {(bool) => this.props.updateShrink(bool)}
        updateMouseColor = {(newColor)=>this.props.updateMouseColor(newColor)} 
            />
        </div>
        <div
          ref={ref => (this.fake = ref)}
          style={{
            height: this.state.height
          }}
        />
      </>
    );
  }
}