import { React, useState } from "react";
import PropTypes from "prop-types"; // Importer PropTypes
import { useLocation } from "react-router-dom";
import PasserSalle from "../../../components/PassageDeSalle/PasserSalle";

function AjoutIndice({ indice, onAjouter }) {
  const [open, setOpen] = useState(false);
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

  const currentStage = useLocation().pathname;
  localStorage.setItem("currentStage", currentStage);

  return (
    <>
      <img
        className="ajout"
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
            : () => onAjouter(indice)
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
      ;
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
