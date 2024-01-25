/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./ListeIndice.scss";
import imgBtn from "./Help/assets/btn-text.png";

function ListeIndice({ checkedItems, handleIndiceClick, blurredIndices }) {
  const [list, setList] = useState(false);

  const scrollingMenu = () => {
    setList(!list);
  };

  return (
    <div className="menu">
      <div className="scrollMenu">
        <p>Indices découverts</p>
        <img
          src={imgBtn}
          className="imgBtn"
          alt="btn"
          onClick={scrollingMenu}
        />
      </div>
      {list && (
        <div className="listClues">
          <ul>
            {Object.entries(checkedItems).map(([itemName, isChecked]) => {
              const isBlurred = blurredIndices.includes(itemName);
              return (
                <li key={itemName} onClick={() => handleIndiceClick(itemName)}>
                  <label>
                    <input type="checkbox" checked={isChecked} readOnly />
                    <span className={isBlurred ? "blurred" : ""}>
                      {itemName}
                    </span>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ListeIndice;
