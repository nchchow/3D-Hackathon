import React from "react";

function Preview() {
  return (
      <div className="preview">
          <ul className="preview__list">
              <li className="preview__item">
                  <img className="preview__item--img" src="" alt="" />
                  <h2 className="preview__item--title"></h2>
                  <p className="preview__item--detail"></p>
              </li>
          </ul>
      </div>;
  );
}

export default Preview;
