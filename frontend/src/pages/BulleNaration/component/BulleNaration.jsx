import React, { useState } from "react";
import "./BulleNaration.scss";
import closeIcon from "../assets/btn-text.png";
import "../../../App.scss";

function BulleNaration() {
  const [modal, setModal] = useState(true);

  const toggleModal = () => {
    setModal((prevModal) => !prevModal);
  };

  return (
    <div>
      {modal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <img
                className="close-modal"
                src={closeIcon}
                alt="Close"
                onClick={toggleModal}
              />
              <h2>Hello Modal</h2>
              <p className="text1">
                “Aie.. Ma tête… Mais.. ?! Où je suis là ? Je ne me rappelle de
                rien.”
              </p>
              <p className="text2">Pourquoi je suis dans un casino ?</p>
              <p className="text3">
                La salle me semble étrange, je n'y vois qu'une seule porte.
              </p>
              <p className="text4">
                Hmm, elle semble verrouillée... Je vais devoir trouver un moyen
                de sortir de cette salle.
              </p>
              <p className="text5">
                La salle me semble étrange, je n'y vois qu'une seule porte.
              </p>
              <p className="text6">Dans quelle galère je me suis fourré...</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BulleNaration;
