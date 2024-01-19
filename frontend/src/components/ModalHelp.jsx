/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import "../styles/ModalHelp.scss";
import Remove from "../assets/remove.png";
import ListeIndice from "./ListeIndice";
import ObjectsRamasses from "./ObjectsRamasses";

export default function Modal({ onClose }) {
  const handleContentClick = (element) => {
    element.stopPropagation();
  };

  return (
    <div className="modal-help">
      <div className="overlay-help" onClick={onClose}>
        <img
          src={Remove}
          alt="close-help"
          className="close-modal-help"
          onClick={onClose}
        />
        <div className="modal-content-help" onClick={handleContentClick}>
          <ListeIndice />
          <ObjectsRamasses />
        </div>
      </div>
    </div>
  );
}