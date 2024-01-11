import React from "react";
import PropTypes from "prop-types"; // Importer PropTypes

function AjoutIndice({ indice, onAjouter }) {
  return (
    <img
      src={indice.image}
      alt={indice.nom}
      style={{
        position: "absolute",
        left: `${indice.x}px`, // Utiliser template literals
        top: `${indice.y}px`, // Utiliser template literals
        width: "50px",
        height: "auto",
      }}
      onClick={() => onAjouter(indice)}
    />
  );
}

// Ajouter la validation des props
AjoutIndice.propTypes = {
  indice: PropTypes.shape({
    image: PropTypes.string.isRequired,
    nom: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
  onAjouter: PropTypes.func.isRequired,
};

export default AjoutIndice;
