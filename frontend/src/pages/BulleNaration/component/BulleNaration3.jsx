import React, { useState, useEffect } from "react";
import "./BulleNaration.scss";
import closeIcon from "../assets/btn-text.png";
import "../../../App.scss";

function BulleNaration() {
  const [modal, setModal] = useState(true);
  const [currentText, setCurrentText] = useState(1);

  const toggleModal = () => {
    setModal((prevModal) => !prevModal);
  };

  useEffect(() => {
    const onAnimationEnd = () => {
      setCurrentText((prevText) => prevText + 1);
    };

    const textElement = document.querySelector(`.text${currentText}`);
    if (textElement) {
      textElement.addEventListener("animationend", onAnimationEnd);
    }

    return () => {
      if (textElement) {
        textElement.removeEventListener("animationend", onAnimationEnd);
      }
    };
  }, [currentText]);

  return (
    <div>
      {modal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <h2>GERARD HADD :</h2>
              <img
                className="close-modal"
                src={closeIcon}
                alt="Close"
                onClick={toggleModal}
              />
              {currentText === 1 && (
                <p className={`text${currentText}`}>
                  “Mais ce n'est pas possible !!”
                </p>
              )}
              {currentText === 2 && (
                <p className={`text${currentText}`}>
                  “Il y en a combien de ces foutues salles-là ?!”
                </p>
              )}
              {currentText === 3 && (
                <p className={`text${currentText}`}>
                  “Et j’imagine qu’elle est verrouillée”
                </p>
              )}
              {currentText === 4 && (
                <p className={`text${currentText}`}>
                  “:souffle: En plus, elle est lugubre celle-ci”
                </p>
              )}
              {currentText === 5 && (
                <p className={`text${currentText}`}>"Aller, courage Gégé !"</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BulleNaration;
