import React, { useState } from "react";
import "./ListeIndice.scss";
import imgBtn from "./Help/assets/btn-text.png";

function ListeIndice() {
  const [list, setList] = useState(false);
  const [checkedItems, setCheckedItems] = useState({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
  });

  const scrollingMenu = () => {
    setList(!list);
  };

  const handleCheckboxChange = (item) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [item]: !prevCheckedItems[item],
    }));
  };

  return (
    <div className="menu">
      <div className="scrollMenu">
        <p>Indices découverts (0/5)</p>
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
            <li>
              <label>
                <input
                  type="checkbox"
                  checked={checkedItems.item1}
                  onChange={() => handleCheckboxChange("item1")}
                />
                Lampe
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  checked={checkedItems.item2}
                  onChange={() => handleCheckboxChange("item2")}
                />
                Cadre
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  checked={checkedItems.item3}
                  onChange={() => handleCheckboxChange("item3")}
                />
                Poulet
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  checked={checkedItems.item4}
                  onChange={() => handleCheckboxChange("item4")}
                />
                Chat
              </label>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ListeIndice;
