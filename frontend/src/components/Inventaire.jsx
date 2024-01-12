import React, { useState } from "react";
import PropTypes from "prop-types";

import valiseFermerImage from "../assets/ValiseFermer.png";
import valiseOuverteImage from "../assets/ValiseOuverte.png";
import "../styles/Inventaire.css";
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
          {items.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => handleItemClick(item)}
              className="item-button"
            >
              <img
                src={item.image}
                alt={item.nom}
                style={{ width: "50px", height: "auto" }}
              />
            </button>
          ))}
        </div>
      )}

      {selectedItem && (
        <Modal splineUrl={selectedItem.splineUrl} onClose={() => setSelectedItem(null)}/>
      )}
    </div>
  );
}

Inventaire.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      nom: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Inventaire;
