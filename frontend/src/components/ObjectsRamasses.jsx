/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import "./ObjectsRamasses.scss";
import imgBtn from "./Help/assets/btn-text.png";

function ObjectsRamasses({ niveau, blurredItems = [] }) {
  const [list, setList] = useState(false);
  const [ramassedItems, setRamassedItems] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/scene${niveau}`)
      .then((response) => response.json())
      .then((data) => {
        const newRamassedItems = {};
        data.forEach((item) => {
          if (item.inventory) {
            newRamassedItems[item.name] = false;
          }
        });
        setRamassedItems(newRamassedItems);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des données:", error);
      });
  }, [niveau]);

  const scrollingMenu = () => {
    setList(!list);
  };

  const handleCheckboxChange = (itemName) => {
    setRamassedItems((prevItems) => ({
      ...prevItems,
      [itemName]: !prevItems[itemName],
    }));
  };

  return (
    <div className="menu">
      <div className="scrollMenu">
        <p>Objet à ramassé</p>
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
            {Object.entries(ramassedItems).map(([itemName, isChecked]) => {
              const isBlurred = blurredItems.includes(itemName);
              return (
                <li key={itemName}>
                  <label>
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleCheckboxChange(itemName)}
                    />
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

export default ObjectsRamasses;
