import React, { useState, useEffect } from "react";
import Inventaire from "../../../components/Inventaire";
import AjoutIndice from "../../Niveau1/components/AjoutIndice";
import Settings from "../../../components/Settings/Settings";
import "../styles/Niveau3.scss";
import BulleNaration3 from "../../BulleNaration/component/BulleNaration3";
import HelpBtn from "../../../components/Help/HelpBtn";
import SousTitres from "../../../components/SousTitres";

function Niveau3() {
  const [inventaire, setInventaire] = useState([]);
  const [indicesAffiches, setIndicesAffiches] = useState([]);
  const [subtitles, setSubtitles] = useState("");
  const [sousTitre, setSousTitre] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});
  const [blurredIndices, setBlurredIndices] = useState([]);

  useEffect(() => {
    const savedInventaire = localStorage.getItem("inventaire");
    let inventaireInitial = [];
    if (savedInventaire) {
      inventaireInitial = JSON.parse(savedInventaire);
      setInventaire(inventaireInitial);
    }

    fetch("http://localhost:5000/scene3")
      .then((response) => response.json())
      .then((data) => {
        const indicesFiltres = data.filter(
          (indice) => !inventaireInitial.some((item) => item.id === indice.id)
        );
        setIndicesAffiches(indicesFiltres);

        const initialCheckedItems = {};
        data.forEach((item) => {
          if (item.indice) {
            initialCheckedItems[item.name] = false;
          }
        });
        setCheckedItems(initialCheckedItems);

        const initialBlurredIndices = data
          .filter((item) => item.indice)
          .map((item) => item.name);
        setBlurredIndices(initialBlurredIndices);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des données:", error);
      });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setBlurredIndices((prev) => {
        const updated = [...prev];
        if (updated.length > 0) updated.shift();
        return updated;
      });
    }, 60000); // 60000 ms = 1 minute

    return () => clearInterval(timer);
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

  const handleIndiceClick = (indiceName) => {
    setCheckedItems((prevItems) => ({
      ...prevItems,
      [indiceName]: true,
    }));
  };

  return (
    <div className="background-container3">
      <BulleNaration3 />
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
          <HelpBtn
            niveau={1}
            checkedItems={checkedItems}
            handleIndiceClick={handleIndiceClick}
            blurredIndices={blurredIndices}
          />
        </div>
        {sousTitre && <SousTitres subtitles={subtitles} />}
        <Inventaire items={inventaire} onOuvrir={ouvrirSplineUrl} />
      </div>
    </div>
  );
}

export default Niveau3;
