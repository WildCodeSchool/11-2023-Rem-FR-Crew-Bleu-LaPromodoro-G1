import React, { useState } from "react";
import "../styles/Modal.scss";
import Spline from '@splinetool/react-spline';
import Remove from '../assets/remove.png';

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        OPEN
      </button>

      {modal && (
        <div className="modal">
          <div className="overlay">
          <img src={Remove} alt="close" className="close-modal" onClick={toggleModal}/>
            <div className="modal-content">
            <div className="modele3D">
              <Spline scene="https://prod.spline.design/be8BmFnRYQfM04Ba/scene.splinecode" />
            </div>
          </div>
          </div>
        </div>
      )}
    </>
  );
}
