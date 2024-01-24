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
  const [password, setPassword] = useState("");

  const codeRight = (code) => {
    if (localStorage.getItem("currentStage") === "/niveau1") {
      if (code.target.value.length === 15 || code.target.value.length === 18) {
        if (
          code.target.value.replaceAll(" - ", "") === secretCode.toString(10)
        ) {
          setUnlock(true);
        } else {
          setUnlock(false);
        }
      }
      if (code.target.value.length > 18 || code.target.value.includes()) {
        setPassword(password);
      } else {
        switch (code.target.value.length) {
          case 4:
            setPassword(`${password} - ${code.target.value.charAt(3)}`);
            break;
          case 5:
            setPassword(
              code.target.value.slice(0, code.target.value.length - 2)
            );
            break;
          case 9:
            setPassword(`${password} - ${code.target.value.charAt(8)}`);
            break;
          case 10:
            setPassword(
              code.target.value.slice(0, code.target.value.length - 2)
            );
            break;
          case 15:
            setPassword(`${password} - ${code.target.value.charAt(14)}`);
            break;
          case 16:
            setPassword(
              code.target.value.slice(0, code.target.value.length - 2)
            );
            break;
          case 19:
            setPassword(`${password} - ${code.target.value.charAt(18)}`);
            break;
          default:
            setPassword(code.target.value);
            break;
        }
      }
    } else if (localStorage.getItem("currentStage") === "/niveau2") {
      if (code.target.value.length === 18 || code.target.value.length === 19) {
        if (code.target.value === secretCode) {
          setUnlock(true);
        } else {
          setUnlock(false);
        }
      }

      if (code.target.value.length > 19) {
        setPassword(password);
      } else {
        setPassword(code.target.value);
      }
    } else if (localStorage.getItem("currentStage") === "/niveau3") {
      if (code.target.value.length === 10 || code.target.value.length === 11) {
        if (code.target.value === secretCode) {
          setUnlock(true);
        } else {
          setUnlock(false);
        }
      }

      if (code.target.value.length > 11) {
        setPassword(password);
      } else {
        setPassword(code.target.value);
      }
    } else if (localStorage.getItem("currentStage") === "/niveau4") {
      if (code.target.value.length === 18 || code.target.value.length === 19) {
        if (code.target.value.toUpperCase() === secretCode) {
          setUnlock(true);
        } else {
          setUnlock(false);
        }
      }

      if (code.target.value.length > 19) {
        setPassword(password);
      } else {
        setPassword(code.target.value.toUpperCase());
      }
    }
  };

  const setClose = () => {
    setOpen(false);
  };

  return (
    <div id="passer-salle">
      <input onChange={codeRight} type="text" value={password} />
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
