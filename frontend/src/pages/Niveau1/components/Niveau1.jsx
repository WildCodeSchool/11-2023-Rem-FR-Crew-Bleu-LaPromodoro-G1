import React, { useState, useEffect } from "react";
import Inventaire from "../../../components/Inventaire";
import AjoutIndice from "./AjoutIndice";
import Settings from "../../../components/Settings/Settings";
import "../styles/Niveau1.scss";
import BulleNaration from "../../BulleNaration/component/BulleNaration";
import HelpBtn from "../../../components/Help/HelpBtn";
// import SousTitres from "../../../components/SousTitres";
import SousTitres from "../../../components/SousTitres";
// import Sons from "../../../components/Sons";

function Niveau1() {
  const [inventaire, setInventaire] = useState([]);
  const [indicesAffiches, setIndicesAffiches] = useState([]);
  const [subtitles, setSubtitles] = useState("");
  const [sousTitre, setSousTitre] = useState();
  // const [AudioUrl, setAudioUrl] = useState("");

  useEffect(() => {
    const savedInventaire = localStorage.getItem("inventaire");

    let inventaireInitial = [];
    if (savedInventaire) {
      inventaireInitial = JSON.parse(savedInventaire);
      setInventaire(inventaireInitial);
    }

    fetch("http://localhost:5000/scene1")
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
    console.info(indice.sound);
    // setAudioUrl(indice.sound); // URL du son
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
          onAjouter={() => ajouterAuInventaire(indice)} // add song
        />
      ))}
      <div className="nav">
        <div className="buttons">
          <Settings sousTitre={sousTitre} setSousTitre={setSousTitre} />
          <HelpBtn />
        </div>
        {sousTitre && <SousTitres subtitles={subtitles} />}
        <Inventaire items={inventaire} onOuvrir={ouvrirSplineUrl} />
        {/* <Sons AudioUrl={AudioUrl} /> */}
      </div>
    </div>
  );
}

export default Niveau1;
