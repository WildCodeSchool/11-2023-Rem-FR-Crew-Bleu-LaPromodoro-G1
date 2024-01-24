/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import PropTypes from "prop-types";

import valiseFermerImage from "../assets/ValiseFermer.png";
import valiseOuverteImage from "../assets/ValiseOuverte.png";
import "../styles/Inventaire.scss";
import Modal from "./Modal";

function Inventaire({ items }) {
  const [visible, setVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(valiseFermerImage);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleInventaire = () => {
    setVisible(!visible);
    setCurrentImage(
      currentImage === valiseFermerImage
        ? valiseOuverteImage
        : valiseFermerImage
    );
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleKeyDown = (event, action) => {
    if (event.key === "Enter" || event.key === " ") {
      action();
    }
  };

  return (
    <div className="inventaire-container">
      <button
        type="button"
        onClick={toggleInventaire}
        onKeyDown={(event) => handleKeyDown(event, toggleInventaire)}
        className="inventaire-button"
      >
        <img
          src={currentImage}
          alt="Ouvrir inventaire"
          className="inventaire-image"
        />
      </button>
      {visible && (
        <div
          className="menu-inventaire"
          role="menu"
          tabIndex={0}
          onKeyDown={(event) => handleKeyDown(event, () => {})}
        >
          {items.map((item) => {
            if(item.id !== 0) {
              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  className="item-button"
                >
                  <img
                    src={`http://localhost:5000${item.picture}`}
                    alt={item.name}
                    style={{ width: "50px", height: "auto" }}
                  />
                </button>
              );
            }
            return undefined;
          })}
        </div>
      )}

      {selectedItem && (
        <Modal
          splineUrl={selectedItem.splineUrl}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
}

Inventaire.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string,
    })
  ).isRequired,
};

export default Inventaire;
