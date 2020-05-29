import React from "react";

function Preview() {
  return (
    <>
      <button className="back-btn"></button>
      <div className="preview">
        <ul className="preview__list">
          <li className="preview__item">
            <img className="preview__item--img" src="" alt="" />
            <h2 className="preview__item--title">Pasta Dinner</h2>
            <p className="preview__item--detail">The Lakeview</p>
          </li>
          <li className="preview__item">
            <img className="preview__item--img" src="" alt="" />
            <h2 className="preview__item--title">Surf'n Turf Dinner</h2>
            <p className="preview__item--detail">Le Banane</p>
          </li>
          <li className="preview__item">
            <img className="preview__item--img" src="" alt="" />
            <h2 className="preview__item--title">Indian Feast</h2>
            <p className="preview__item--detail">Bell Brewery</p>
          </li>
          <li className="preview__item">
            <img className="preview__item--img" src="" alt="" />
            <h2 className="preview__item--title">Curry Dinner</h2>
            <p className="preview__item--detail">Band Bang</p>
          </li>
        </ul>
      </div>
      ;
    </>
  );
}

export default Preview;
