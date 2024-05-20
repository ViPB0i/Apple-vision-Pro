
import bg3 from "../../../src/assets/bg3.webp";
import bg4 from "../../assets/bg4.svg";
import bf5 from "../../assets/bf5.jpg";
import viewport from "../../assets/Viewport.png";
import Controll from "../../assets/Controll.svg"

import React from 'react';
import LeftBar from "../LeftBar";

const Slider = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">

      <div className="p-4">
        <div style={{ position: 'relative', zIndex: 1, left: "500px" }}>

         
          <div id="carouselExample" className="carousel slide flex justify-center">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={bg3} className="d-block w-50" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={bg4} className="d-block w-50" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={bf5} className="d-block w-50" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={viewport} className="d-block w-50" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
  
      </div>

      <div className="relative bottom-8">      <LeftBar /></div>

    </div>
  );
};

export default Slider;
