/* eslint-disable dot-notation */
/* eslint-disable prefer-template */
/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect, useRef } from "react";
import "./BulleNaration.scss";
import "./BulleNaration2.scss";
import closeIcon from "../assets/btn-text.png";
import "../../../App.scss";

function BulleNaration() {
  const [modalNar, setModalNar] = useState(true);
  const [narration, setNarration] = useState([]);

  const [currentText, setCurrentText] = useState(1);
  const audioRef = useRef(null);
  const toggleModal = () => {
    setModalNar((prevModalNar) => !prevModalNar);
  };

  const getData = () => {
    fetch("http://localhost:5000/narration/")
      .then((res) => res.json())
      .then((data) => console.log(data) || setNarration(data));
  };
  const playSound = () => {
    const urlSound = "sound" + currentText;
    console.info(
      "Tentative de lecture de l'audio",
      // eslint-disable-next-line react/prop-types
      narration[0]?.["sound1"],
      `http://localhost:5000/${narration[1]?.[urlSound]}`
    );
    // eslint-disable-next-line react/prop-types
    audioRef.current = new Audio(
      `http://localhost:5000/${narration[1]?.[urlSound]}`
    );

    if (audioRef.current) {
      if (JSON.parse(localStorage.getItem("muted"))) {
        console.log("yolo");
        audioRef.current
          .play()
          .then(() => {
            console.warn("Audio en lecture");
          })
          .catch((e) => {
            console.error("Erreur lors de la lecture de l'audio:", e);
          });
      }
    }
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

  useEffect(() => {
    console.log("poulet");
    getData();
  }, []);

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
                <>
                  {playSound()}
                  <p ref={audioRef} className={`text${currentText}`}>
                    “Encore une salle … :soupire:”
                  </p>
                </>
              )}
              {currentText === 2 && (
                <>
                  {playSound()}
                  <p ref={audioRef} className={`text${currentText}`}>
                    “Toutes ces roulettes me font tourner la tête !”
                  </p>
                </>
              )}
              {currentText === 3 && (
                <>
                  {playSound()}
                  <p ref={audioRef} className={`text${currentText}`}>
                    “Ah, j'aperçois une autre porte, verrouillée celle-ci
                    aussi…”
                  </p>
                </>
              )}
              {currentText === 4 && (
                <>
                  {playSound()}
                  <p ref={audioRef} className={`text${currentText}`}>
                    “Je vais devoir encore me débrouiller pour la dévérouiller.”
                  </p>
                </>
              )}
              {currentText === 5 && (
                <>
                  {playSound()}
                  <p ref={audioRef} className={`text${currentText}`}>
                    “Raaaah”
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BulleNaration;
