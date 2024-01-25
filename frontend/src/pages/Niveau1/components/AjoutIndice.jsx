import { useRef, useState } from "react";
import PropTypes from "prop-types"; // Importer PropTypes
import { useLocation } from "react-router-dom";
import PasserSalle from "../../../components/PassageDeSalle/PasserSalle";
import issou from "../../../assets/issou.mp3";

function AjoutIndice({ indice, onAjouter }) {
  // recup song
  const [open, setOpen] = useState(false);
  const audioRef = useRef(null);
  const [nePassePas, setnePassePas] = useState(false);

  const handleImageError = () => {
    console.error(`Erreur de chargement de l'image : ${indice.picture}`);
  };

  const openDoor = () => {
    switch (localStorage.getItem("currentStage")) {
      case "/niveau1":
        if (JSON.parse(localStorage.getItem("inventaire"))[0].id === 1) {
          setOpen(true);
        } else {
          setnePassePas(true);
          setTimeout(() => {
            setnePassePas(false);
          }, 5000);
        }
        break;

      case "/niveau2":
        if (JSON.parse(localStorage.getItem("inventaire"))[0].id === 100) {
          setOpen(true);
        } else {
          setnePassePas(true);
          setTimeout(() => {
            setnePassePas(false);
          }, 5000);
        }
        break;

      case "/niveau3":
        if (JSON.parse(localStorage.getItem("inventaire"))[0].id === 200) {
          setOpen(true);
        } else {
          setnePassePas(true);
          setTimeout(() => {
            setnePassePas(false);
          }, 5000);
        }
        break;

      case "/niveau4":
        if (JSON.parse(localStorage.getItem("inventaire"))[0].id === 300) {
          setOpen(true);
        } else {
          setnePassePas(true);
          setTimeout(() => {
            setnePassePas(false);
          }, 5000);
        }
        break;

      case "/niveau5":
        if (JSON.parse(localStorage.getItem("inventaire"))[0].id === 400) {
          setOpen(true);
        } else {
          setnePassePas(true);
          setTimeout(() => {
            setnePassePas(false);
          }, 5000);
        }
        break;

      default:
        console.error("Error 404");
        break;
    }
  };
  const playSound = () => {
    console.info(
      "Tentative de lecture de l'audio",
      // eslint-disable-next-line react/prop-types
      `http://localhost:5000${indice.sound}`
    );
    // eslint-disable-next-line react/prop-types
    audioRef.current = new Audio(`http://localhost:5000/${indice.sound}`);

    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          console.warn("Audio en lecture");
        })
        .catch((e) => {
          console.error("Erreur lors de la lecture de l'audio:", e);
        });
    }
  };
  const currentStage = useLocation().pathname;
  localStorage.setItem("currentStage", currentStage);

  return (
    <>
      <img
        className="ajout"
        ref={audioRef}
        src={`http://localhost:5000${indice.picture}`}
        alt={indice.name}
        style={{
          position: "absolute",
          left: `${indice.x}%`,
          top: `${indice.y}%`,
          rotationDegree: `${indice.rotation}%`,
          width: `${indice.largeur}px`,
          height: "auto",
        }}
        onClick={
          indice.name === "cadenas"
            ? () => {
                openDoor();
                if (nePassePas) {
                  onAjouter(indice);
                }
              }
            : () => {
                onAjouter(indice);
                if (JSON.parse(localStorage.getItem("muted"))) {
                  playSound(issou);
                }
              }
        }
        onError={handleImageError}
      />
      {open && (
        <PasserSalle
          secretCode={indice.code}
          setOpen={setOpen}
          currentStage={currentStage}
        />
      )}
    </>
  );
}

// Ajouter la validation des props
AjoutIndice.propTypes = {
  indice: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    rotation: PropTypes.number.isRequired,
    largeur: PropTypes.number.isRequired,
    code: PropTypes.number.isRequired,
  }).isRequired,
  onAjouter: PropTypes.func.isRequired,
};

export default AjoutIndice;
