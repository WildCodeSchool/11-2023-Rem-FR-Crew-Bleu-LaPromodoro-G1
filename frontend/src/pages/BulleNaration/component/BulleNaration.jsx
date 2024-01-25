/* eslint-disable dot-notation */
/* eslint-disable prefer-template */
/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect, useRef } from "react";
import "./BulleNaration.scss";
import closeIcon from "../assets/btn-text.png";
import "../../../App.scss";

function BulleNaration() {
  const [modalNar, setModalNar] = useState(true);
  const [narration, setNarration] = useState([]);
  const audioRef = useRef(null);

  const [currentText, setCurrentText] = useState(1);

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
      `http://localhost:5000/${narration[0]?.[urlSound]}`
    );
    // eslint-disable-next-line react/prop-types
    audioRef.current = new Audio(
      `http://localhost:5000/${narration[0]?.[urlSound]}`
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
  // const playSound = () => {
  //   // let songCurent = narration[0]?.sound1;
  //   // let urlsong = `http://localhost:5000/${songCurent}`;
  //   console.info(
  //     "Tentative de lecture de l'audio"
  //     // eslint-disable-next-line react/prop-types
  //     // `http://localhost:5000/${narration[0]?.sound`${currentText}`}
  //     // urlsong
  //   );
  //   // eslint-disable-next-line react/prop-types
  //   let audioSong = new Audio("http://localhost:5000/static/audios/naraS1.mp3");

  //   if (audioSong) {
  //     if (JSON.parse(localStorage.getItem("muted"))) {
  //       audioSong
  //         .play()
  //         .then(() => {
  //           console.warn("Audio en lecture");
  //         })
  //         .catch((e) => {
  //           console.error("Erreur lors de la lecture de l'audio:", e);
  //         });
  //     }
  //   }
  // };

  useEffect(() => {
    console.log("poulet");
    getData();
  }, []);

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
                <>
                  {playSound()}
                  <p ref={audioRef} className={`text${currentText}`}>
                    "Aie.. Ma tête… Mais.. ?! Où je suis là ?"
                  </p>
                </>
              )}
              {currentText === 2 && (
                <>
                  {playSound()}
                  <p ref={audioRef} className={`text${currentText}`}>
                    "Je ne me rappelle de rien."
                  </p>
                </>
              )}
              {currentText === 3 && (
                <>
                  {playSound()}
                  <p ref={audioRef} className={`text${currentText}`}>
                    "Pourquoi je suis dans un casino ?"
                  </p>
                </>
              )}
              {currentText === 4 && (
                <>
                  {playSound()}
                  <p ref={audioRef} className={`text${currentText}`}>
                    "La salle me semble étrange, je n'y vois qu'une seule
                    porte."
                  </p>
                </>
              )}
              {currentText === 5 && (
                <>
                  {playSound()}
                  <p ref={audioRef} className={`text${currentText}`}>
                    "Hmm, elle semble verrouillée... Je vais devoir trouver un
                    moyen de sortir de cette salle."
                  </p>
                </>
              )}
              {currentText === 6 && (
                <>
                  {playSound()}
                  <p ref={audioRef} className={`text${currentText}`}>
                    "Dans quelle galère je me suis fourré..."
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
