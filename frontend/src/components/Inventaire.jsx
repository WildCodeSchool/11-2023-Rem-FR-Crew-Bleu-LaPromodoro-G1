import React, { useState } from 'react';
import valiseFermerImage from '../assets/ValiseFermer.png';
import valiseOuverteImage from '../assets/ValiseOuverte.png';
import '../styles/Inventaire.css'; 

function Inventaire() {
    const [visible, setVisible] = useState(false);
    const [currentImage, setCurrentImage] = useState(valiseFermerImage);

    const toggleInventaire = () => {
        setVisible(!visible);
        setCurrentImage(currentImage === valiseFermerImage ? valiseOuverteImage : valiseFermerImage);
    };

    return (
        <div>
            <img 
                src={currentImage} 
                alt="Ouvrir l'inventaire" 
                onClick={toggleInventaire} 
                className="inventaire-image"
            />
            {visible && (
                <div className="menu-inventaire">
                </div>
            )}
        </div>
    );
}

export default Inventaire;
