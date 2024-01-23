import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // Importer PropTypes
import { useState } from "react";
import "./PasserSalle.scss";

function PasserSalle({ secretCode, setOpen, currentStage }) {
  const currentStageTab = currentStage.split("");
  const stage = currentStageTab.pop("");
  currentStageTab.push(parseInt(stage, 10) + 1);
  const nextStage = currentStageTab.join("");

  const [unlock, setUnlock] = useState(false);

  const codeRight = (code) => {
    if (parseInt(code.target.value, 10) === parseInt(secretCode, 10)) {
      setUnlock(true);
    } else {
      setUnlock(false);
    }
  };

  const setClose = () => {
    setOpen(false);
  };

  return (
    <div id="passer-salle">
      <input onChange={codeRight} type="text" />
      {unlock ? (
        <Link to={nextStage}>Ouvrir la porte</Link>
      ) : (
        <p>Ouvrir la porte</p>
      )}
      <p onClick={() => setClose()} className="close">
        X
      </p>
    </div>
  );
}

// Ajouter la validation des props
PasserSalle.propTypes = {
  secretCode: PropTypes.string.isRequired,
  setOpen: PropTypes.bool.isRequired,
  currentStage: PropTypes.string.isRequired,
};

export default PasserSalle;
