import { useState } from "react";
import "./Settings.scss";

function Settings() {
  const [active, setActive] = useState(false);
  const [subtitles, setSubtitles] = useState(true);
  const [muted, setMuted] = useState(false);
  const toggleActive = () => (active ? setActive(false) : setActive(true));
  const toggleSubtitles = () =>
    subtitles ? setSubtitles(false) : setSubtitles(true);
  const toggleMuted = () => (muted ? setMuted(false) : setMuted(true));

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
            onClick={toggleSubtitles}
            id="subtitles"
            src={
              !subtitles
                ? "src/components/Settings/assets/sous-titres.png"
                : "src/components/Settings/assets/sous-titres-off.png"
            }
            alt="avtiver / desactiver les sous-titres"
          />
        </div>
      )}
    </div>
  );
}
export default Settings;
