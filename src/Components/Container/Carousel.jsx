import React from "react";
import i1 from "../../assets/img/portfolio-1.jpeg";
// import i2 from "./assets/img/portfolio-2.jpeg";
// import i3 from "./assets/img/portfolio-3.jpeg";

function Carousel() {
  return (
    <div>
      <div className="main-bg">
        <div className="flexbox">
          {/* <img alt="img-1" src={i1} /> */}
          {/* <img alt="img-2" src={i2} />
          <img alt="img-3" src={i3} /> */}
        </div>
      </div>
      <div className="btnGroup">
        <button className="carouselBtn" />
      </div>
    </div>
  );
}

export default Carousel();
