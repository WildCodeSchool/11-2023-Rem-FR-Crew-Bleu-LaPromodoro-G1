import "../styles/SousTitres.scss";
import PropTypes from "prop-types";

function SousTitres({ subtitles }) {
  return (
    <div className="subtitlesContainer">
      <p> {subtitles}</p>
    </div>
  );
}

SousTitres.propTypes = {
  subtitles: PropTypes.string.isRequired,
};
export default SousTitres;
