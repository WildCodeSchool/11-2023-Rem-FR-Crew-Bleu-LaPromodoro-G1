import React from "react";
import PropTypes from "prop-types"; // Importer PropTypes

function AjoutIndice({ indice, onAjouter }) {
  const handleImageError = () => {
    console.error(`Erreur de chargement de l'image : ${indice.picture}`);
  };

  return (
    <img
      className="ajout"
      src={`http://localhost:5000${indice.picture}`}
      alt={indice.name}
      style={{
        position: "absolute",
        left: `${indice.x}%`,
        top: `${indice.y}%`,
        width: `${indice.largeur}px`,
        height: "auto",
      }}
      onClick={() => onAjouter(indice)}
      onError={handleImageError}
    />
  );
}

// Ajouter la validation des props
AjoutIndice.propTypes = {
  indice: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    largeur: PropTypes.number.isRequired,
  }).isRequired,
  onAjouter: PropTypes.func.isRequired,
};

export default AjoutIndice;
