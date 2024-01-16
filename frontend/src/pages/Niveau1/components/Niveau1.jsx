import React, { useState } from "react";
import Inventaire from "../../../components/Inventaire";
import AjoutIndice from "./AjoutIndice";
import Settings from "../../../components/Settings/Settings";
import "../styles/Niveau1.css";
import BulleNaration from "../../BulleNaration/component/BulleNaration";
// import SousTitres from "../../../components/SousTitres";

function Niveau1() {
  const [inventaire, setInventaire] = useState([]);
  const [indicesAffiches, setIndicesAffiches] = useState([
    {
      id: 1,
      nom: "Indice1",
      image: "src/pages/Niveau1/assets/Tableau.png",
      x: 175,
      y: 250,
    },
  ]);

  const ajouterAuInventaire = (indice) => {
    if (!inventaire.find((item) => item.id === indice.id)) {
      setInventaire([...inventaire, indice]);
      setIndicesAffiches(
        indicesAffiches.filter((item) => item.id !== indice.id)
      );
    }
  };

  return (
    <div className="background">
      <BulleNaration />
      {/* <SousTitres /> */}
      {indicesAffiches.map((indice) => (
        <AjoutIndice
          key={indice.id}
          indice={indice}
          onAjouter={ajouterAuInventaire}
        />
      ))}
      <Inventaire items={inventaire} />
      <Settings />
    </div>
  );
}

export default Niveau1;
