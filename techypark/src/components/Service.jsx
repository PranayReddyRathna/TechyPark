import React from 'react'
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import item1 from "../assets/img6.jpg"
import item2 from "../assets/img7.jpg"
import item3 from "../assets/img8.jpg"
import item4 from "../assets/img9.jpg"
import item5 from "../assets/img10.jpg"
import item6 from "../assets/img11.jpg"
const Service = () => {
  return (
    <div><Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} showThumbs={false} interval={1000}>

      <div>
        <img src={item1} alt="Item1" width="400px" height="500px"/>
        <p className="legend">Fun with Tech</p>
      </div>
      <div>
        <img src={item2} alt="Item2"  width="400px" height="500px"/>
        <p className="legend">Fun with Tech</p>
      </div>
      <div>
        <img src={item3} alt="Item3"  width="400px" height="500px" />
        <p className="legend">Fun with Tech</p>
      </div>
      <div>
        <img src={item4} alt="Item4"  width="400px" height="500px"/>
        <p className="legend">Fun with Tech</p>
      </div>
      <div>
        <img src={item5} alt="Item5"  width="400px" height="500px"/>
        <p className="legend">Fun with Tech</p>
      </div>
      <div>
        <img src={item6} alt="Item6"  width="400px" height="500px"/>
        <p className="legend">Fun with Tech</p>
      </div>
      </Carousel></div>
  )
}

export default Service