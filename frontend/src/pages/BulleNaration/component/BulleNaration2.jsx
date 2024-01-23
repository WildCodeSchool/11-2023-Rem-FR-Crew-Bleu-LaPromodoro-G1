import React, { useState, useEffect } from "react";
import "./BulleNaration.scss";
import "./BulleNaration2.scss";
import closeIcon from "../assets/btn-text.png";
import "../../../App.scss";

function BulleNaration() {
  const [modalNar, setModalNar] = useState(true);
  const [currentText, setCurrentText] = useState(1);

  const toggleModal = () => {
    setModalNar((prevModalNar) => !prevModalNar);
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
      {modalNar && (
        <div className="modal-div">
          <div className="overlayNar">
            <div className="modalNar-content">
              <h2>GERARD HADD :</h2>
              <img
                className="close-modalNar"
                src={closeIcon}
                alt="Close"
                onClick={toggleModal}
              />
              {currentText === 1 && (
                <p className={`text${currentText}`}>
                  “Encore une salle … :soupire:”
                </p>
              )}
              {currentText === 2 && (
                <p className={`text${currentText}`}>
                  “Toutes ces roulettes me font tourner la tête !”
                </p>
              )}
              {currentText === 3 && (
                <p className={`text${currentText}`}>
                  “Ah, j'aperçois une autre porte, verrouillée celle-ci aussi…”
                </p>
              )}
              {currentText === 4 && (
                <p className={`text${currentText}`}>
                  “Je vais devoir encore me débrouiller pour la dévérouiller.”
                </p>
              )}
              {currentText === 5 && (
                <p className={`text${currentText}`}>“Raaaah”</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BulleNaration;
