import React from "react";
import "./slider.css";
import Image1 from "../../assets/banner_mental_health.png";
import Image2 from "../../assets/banner_mental_health_1.png";
import Image3 from "../../assets/banner_mental_health2.png";
import Image4 from "../../assets/banner_mental_health3.png";

function Slider() {
  return (
    <div>
      <div className="carousel">
        <ul className="slides">
          <input type="radio" name="radio-buttons" id="img-1" defaultChecked />
          <li className="slide-container">
            <div className="slide-image">
              <img alt="img1" src={Image1} />
            </div>
            <div className="carousel-controls">
              <label htmlFor="img-4" className="prev-slide">
                <span>‹</span>
              </label>
              <label htmlFor="img-2" className="next-slide">
                <span>›</span>
              </label>
            </div>
          </li>
          <input type="radio" name="radio-buttons" id="img-2" />
          <li className="slide-container">
            <div className="slide-image">
              <img alt="img2" src={Image2} />
            </div>
            <div className="carousel-controls">
              <label htmlFor="img-2" className="prev-slide">
                <span>‹</span>
              </label>
              <label htmlFor="img-3" className="next-slide">
                <span>›</span>
              </label>
            </div>
          </li>
          <input type="radio" name="radio-buttons" id="img-3" />
          <li className="slide-container">
            <div className="slide-image">
              <img alt="img3" src={Image3} />
            </div>
            <div className="carousel-controls">
              <label htmlFor="img-3" className="prev-slide">
                <span>‹</span>
              </label>
              <label htmlFor="img-4" className="next-slide">
                <span>›</span>
              </label>
            </div>
          </li>
          <input type="radio" name="radio-buttons" id="img-4" />
          <li className="slide-container">
            <div className="slide-image">
              <img alt="img4" src={Image4} />
            </div>
            <div className="carousel-controls">
              <label htmlFor="img-4" className="prev-slide">
                <span>‹</span>
              </label>
              <label htmlFor="img-1" className="next-slide">
                <span>›</span>
              </label>
            </div>
          </li>
          <div className="carousel-dots">
            <label htmlFor="img-1" className="carousel-dot" id="img-dot-1" />
            <label htmlFor="img-2" className="carousel-dot" id="img-dot-2" />
            <label htmlFor="img-3" className="carousel-dot" id="img-dot-3" />
            <label htmlFor="img-4" className="carousel-dot" id="img-dot-4" />
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Slider;
