import React, { useState, useEffect } from "react";
import Inventaire from "../../../components/Inventaire";
import AjoutIndice from "../../Niveau1/components/AjoutIndice";
import Settings from "../../../components/Settings/Settings";
import "../styles/Niveau5.scss";
import BulleNaration5 from "../../BulleNaration/component/BulleNaration5";
import HelpBtn from "../../../components/Help/HelpBtn";
// import SousTitres from "../../../components/SousTitres";
import SousTitres from "../../../components/SousTitres";

function Niveau5() {
  const [inventaire, setInventaire] = useState([]);
  const [indicesAffiches, setIndicesAffiches] = useState([]);
  const [subtitles, setSubtitles] = useState("");
  const [sousTitre, setSousTitre] = useState();

  useEffect(() => {
    const savedInventaire = localStorage.getItem("inventaire");

    let inventaireInitial = [];
    if (savedInventaire) {
      inventaireInitial = JSON.parse(savedInventaire);
      setInventaire(inventaireInitial);
    }

    fetch("http://localhost:5000/scene5")
      .then((response) => response.json())
      .then((data) => {
        const indicesFiltres = data.filter(
          (indice) => !inventaireInitial.some((item) => item.id === indice.id)
        );
        setIndicesAffiches(indicesFiltres);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des données:", error);
      });
  }, []);

  const ajouterAuInventaire = (indice) => {
    if (indice.inventory && !inventaire.find((item) => item.id === indice.id)) {
      const nouvelInventaire = [...inventaire, indice];
      const nouveauxIndicesAffiches = indicesAffiches.filter(
        (item) => item.id !== indice.id
      );

      setInventaire(nouvelInventaire);
      setIndicesAffiches(nouveauxIndicesAffiches);

      localStorage.setItem("inventaire", JSON.stringify(nouvelInventaire));
      localStorage.setItem(
        "indicesAffiches",
        JSON.stringify(nouveauxIndicesAffiches)
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
    <div className="background-container5">
      <BulleNaration5 />
      {indicesAffiches.map((indice) => (
        <AjoutIndice
          key={indice.id}
          indice={indice}
          onAjouter={() => ajouterAuInventaire(indice)}
        />
      ))}
      <div className="nav">
        <div className="buttons">
          <Settings sousTitre={sousTitre} setSousTitre={setSousTitre} />
          <HelpBtn />
        </div>
        {sousTitre && <SousTitres subtitles={subtitles} />}
        <Inventaire items={inventaire} onOuvrir={ouvrirSplineUrl} />
      </div>
    </div>
  );
}

export default Niveau5;
