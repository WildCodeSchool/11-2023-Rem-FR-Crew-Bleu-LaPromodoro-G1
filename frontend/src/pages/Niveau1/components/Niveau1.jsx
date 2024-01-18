import React, { useState, useEffect } from "react";
import Inventaire from "../../../components/Inventaire";
import AjoutIndice from "./AjoutIndice";
import Settings from "../../../components/Settings/Settings";
import "../styles/Niveau1.scss";
import BulleNaration from "../../BulleNaration/component/BulleNaration";
import HelpBtn from "../../../components/Help/HelpBtn";
// import SousTitres from "../../../components/SousTitres";
import SousTitres from "../../../components/SousTitres";

function Niveau1() {
  const [inventaire, setInventaire] = useState([]);
  const [indicesAffiches, setIndicesAffiches] = useState([]);
  const [subtitles, setSubtitles] = useState("");
  const [sousTitre, setSousTitre] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/scene1")
      .then((response) => response.json())
      .then((data) => {
        setIndicesAffiches(data);
      })
      .catch((error) =>
        console.error("Erreur lors du chargement des données:", error)
      );
  }, []);

  const ajouterAuInventaire = (indice) => {
    if (indice.inventory) {
      if (!inventaire.find((item) => item.id === indice.id)) {
        setInventaire([...inventaire, indice]);
      }
      setIndicesAffiches(
        indicesAffiches.filter((item) => item.id !== indice.id)
      );
    }
    setSubtitles(indice.subtitles);
    setTimeout(() => {
      setSubtitles("");
    }, 5000);
  };
  const ouvrirSplineUrl = (item) => {
    if (item.splineUrl) {
      window.open(item.splineUrl, "_blank");
    }
  };

  return (
    <div className="background-container">
      <BulleNaration />
      {indicesAffiches.map((indice) => (
        <AjoutIndice
          key={indice.id}
          indice={indice}
          onAjouter={() => ajouterAuInventaire(indice)}
        />
      ))}
      <Settings sousTitre={sousTitre} setSousTitre={setSousTitre} />
      <HelpBtn />
      {sousTitre && <SousTitres subtitles={subtitles} />}
      <Inventaire items={inventaire} onOuvrir={ouvrirSplineUrl} />
    </div>
  );
}

export default Niveau1;
