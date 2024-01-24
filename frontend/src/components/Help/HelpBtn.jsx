/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./HelpBtn.scss";
import imgHelp from "./assets/imgHelp.png";
import ModalHelp from "../ModalHelp";

function HelpBtn({
  niveau,
  checkedItems,
  handleIndiceClick,
  blurredIndices,
  blurredItems,
}) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="HelpBtn">
      <img
        className="img"
        src={imgHelp}
        alt="Help Button"
        onClick={openModal}
      />
      {modalOpen && (
        <ModalHelp
          onClose={closeModal}
          niveau={niveau}
          checkedItems={checkedItems}
          handleIndiceClick={handleIndiceClick}
          blurredIndices={blurredIndices}
          blurredItems={blurredItems}
        />
      )}
    </div>
  );
}

export default HelpBtn;
