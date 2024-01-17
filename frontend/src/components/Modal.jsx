/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import "../styles/Modal.scss";
import Spline from "@splinetool/react-spline";
import Remove from "../assets/remove.png";

export default function Modal({ splineUrl, onClose }) {
  const handleContentClick = (element) => {
    element.stopPropagation();
  };

  return (
    <div className="modal">
      <div className="overlay" onClick={onClose}>
        <img
          src={Remove}
          alt="close"
          className="close-modal"
          onClick={onClose}
        />
        <div className="modal-content" onClick={handleContentClick}>
          <div className="modele3D">
            <Spline scene={splineUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}
