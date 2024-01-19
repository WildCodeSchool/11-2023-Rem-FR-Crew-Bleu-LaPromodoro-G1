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
        <p>Objets ramassés (0/1)</p>
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
          </ul>
        </div>
      )}
    </div>
  );
}

export default ListeIndice;
