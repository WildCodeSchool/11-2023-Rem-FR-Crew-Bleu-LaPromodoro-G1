import "../styles/SousTitres.scss";
import PropTypes from "prop-types";

function SousTitres({ sousTitre }) {
  return (
    <div className="subtitlesContainer">
      <p> {sousTitre}</p>
    </div>
  );
}

SousTitres.propTypes = {
  sousTitre: PropTypes.string.isRequired,
};
export default SousTitres;
