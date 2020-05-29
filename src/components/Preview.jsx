import React from "react";
import dinner1 from "../assets/images/dinner1.png";
import dinner2 from "../assets/images/dinner2.png";
import dinner3 from "../assets/images/dinner3.png";
import dinner4 from "../assets/images/dinner4.png";
import dinner5 from "../assets/images/dinner5.png";
import dinner6 from "../assets/images/dinner6.png";

function Preview() {
  return (
    <>
      <button className="back-btn"> </button>
      <div className="preview">
        <ul className="preview__list">
          <li className="preview__item">
            <img className="preview__item--img" src={dinner1} alt="dinner" />
            <h2 className="preview__item--title">Pasta Dinner</h2>
            <p className="preview__item--detail">The Lakeview</p>
          </li>
          <li className="preview__item">
            <img className="preview__item--img" src={dinner2} alt="dinner" />
            <h2 className="preview__item--title">Surf'n Turf Dinner</h2>
            <p className="preview__item--detail">Le Banane</p>
          </li>
          <li className="preview__item">
            <img className="preview__item--img" src={dinner3} alt="dinner" />
            <h2 className="preview__item--title">Indian Feast</h2>
            <p className="preview__item--detail">Bell Brewery</p>
          </li>
          <li className="preview__item">
            <img className="preview__item--img" src={dinner4} alt="dinner" />
            <h2 className="preview__item--title">Curry Dinner</h2>
            <p className="preview__item--detail">Band Bang</p>
          </li>
          <li className="preview__item">
            <img
              className="preview__item--img-style"
              src={dinner5}
              alt="dinner"
            />
            <h2 className="preview__item--title"></h2>
            <p className="preview__item--detail"></p>
          </li>
          <li className="preview__item">
            <img
              className="preview__item--img-style"
              src={dinner6}
              alt="dinner"
            />
            <h2 className="preview__item--title"></h2>
            <p className="preview__item--detail"></p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Preview;
