import { useState } from "react";
import PropTypes from "prop-types";
import "./Settings.scss";

function Settings({ sousTitre, setSousTitre }) {
  const [active, setActive] = useState(false);
  const [muted, setMuted] = useState(false);
  const toggleActive = () => (active ? setActive(false) : setActive(true));
  const toggleSousTitre = () => setSousTitre(!sousTitre);
  const toggleMuted = () => (muted ? setMuted(false) : setMuted(true));
  console.warn("sousTitre:", sousTitre, "setSousTitre:", setSousTitre);

  return (
    <div id="parametres">
      <img
        id="param"
        onClick={toggleActive}
        src="src/components/Settings/assets/Parametre.png"
        alt="settings"
      />
      {active && (
        <div id="para-open">
          <img
            src="src/components/Settings/assets/High.png"
            alt="volume fort"
          />
          <input type="range" name="volume" id="volume" />
          <img
            src="src/components/Settings/assets/Low.png"
            alt="volume faible"
          />
          <img
            onClick={toggleMuted}
            id="mute"
            src={
              !muted
                ? "src/components/Settings/assets/unMute.png"
                : "src/components/Settings/assets/Mute.png"
            }
            alt="couper le son"
          />
          <img
            onClick={toggleSousTitre}
            id="subtitles"
            src={
              sousTitre
                ? "src/components/Settings/assets/sous-titres.png"
                : "src/components/Settings/assets/sous-titres-off.png"
            }
            alt="activer / desactiver les sous-titres"
          />
        </div>
      )}
    </div>
  );
}
Settings.propTypes = {
  sousTitre: PropTypes.bool.isRequired,
  setSousTitre: PropTypes.func.isRequired,
};
export default Settings;
