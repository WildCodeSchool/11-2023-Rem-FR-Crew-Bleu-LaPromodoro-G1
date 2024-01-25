import React, { useState, useEffect } from "react";
import "./BulleNaration.scss";
import "./BulleNaration5.scss";
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
                  "'Oooh la jolie salle !'"
                </p>
              )}
              {currentText === 2 && (
                <p className={`text${currentText}`}>
                  "'Non elle me fait peur :effrayé:'"
                </p>
              )}
              {currentText === 3 && (
                <p className={`text${currentText}`}>"'J entends des voix"</p>
              )}
              {currentText === 4 && (
                <p className={`text${currentText}`}>"':pleure:'"</p>
              )}
              {currentText === 5 && (
                <p className={`text${currentText}`}>"':rire:'"</p>
              )}
              {currentText === 6 && (
                <p className={`text${currentText}`}>
                  "'A l aiiiiiiiiiide :cri:!'"
                </p>
              )}
              {currentText === 7 && (
                <p className={`text${currentText}`}>
                  "'Libérez moi :supplice:'"
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
