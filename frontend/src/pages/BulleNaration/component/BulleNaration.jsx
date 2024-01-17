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
        <div className="modal-div">
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
                  "Aie.. Ma tête… Mais.. ?! Où je suis là ?"
                </p>
              )}
              {currentText === 2 && (
                <p className={`text${currentText}`}>
                  "Je ne me rappelle de rien."
                </p>
              )}
              {currentText === 3 && (
                <p className={`text${currentText}`}>
                  "Pourquoi je suis dans un casino ?"
                </p>
              )}
              {currentText === 4 && (
                <p className={`text${currentText}`}>
                  "La salle me semble étrange, je n'y vois qu'une seule porte."
                </p>
              )}
              {currentText === 5 && (
                <p className={`text${currentText}`}>
                  "Hmm, elle semble verrouillée... Je vais devoir trouver un
                  moyen de sortir de cette salle."
                </p>
              )}
              {currentText === 6 && (
                <p className={`text${currentText}`}>
                  "Dans quelle galère je me suis fourré..."
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BulleNaration;
