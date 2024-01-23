import { React, useState } from "react";
import PropTypes from "prop-types"; // Importer PropTypes
import { useLocation } from "react-router-dom";
import PasserSalle from "../../../components/PassageDeSalle/PasserSalle";

function AjoutIndice({ indice, onAjouter }) {
  const [open, setOpen] = useState(false);

  const handleImageError = () => {
    console.error(`Erreur de chargement de l'image : ${indice.picture}`);
  };

  const openDoor = () => {
    setOpen(true);
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
          indice.name === "cadenas" ? () => openDoor() : () => onAjouter(indice)
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
