import React, { useState } from 'react';
import valiseFermerImage from '../assets/ValiseFermer.png';
import valiseOuverteImage from '../assets/ValiseOuverte.png';
import '../styles/Inventaire.css'; 

function Inventaire({ items }) {
    const [visible, setVisible] = useState(false);
    const [currentImage, setCurrentImage] = useState(valiseFermerImage);
    const [selectedItem, setSelectedItem] = useState(null);

    const toggleInventaire = () => {
        setVisible(!visible);
        setCurrentImage(currentImage === valiseFermerImage ? valiseOuverteImage : valiseFermerImage);
    };
    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    return (
        
        <div className="inventaire-container">
            <img 
                src={currentImage} 
                alt="Ouvrir l'inventaire" 
                onClick={toggleInventaire} 
                className="inventaire-image"
            />
            {visible && (
                <div className="menu-inventaire">
                        {items.map(item => (
                            <img 
                                key={item.id} 
                                src={item.image} 
                                alt={item.nom} 
                                style={{ width: '50px', height: 'auto' }} 
                                onClick={() => handleItemClick(item)}
                            />
                        ))}
                </div>
            )}
            {selectedItem && (
            <div className="overlay" onClick={() => setSelectedItem(null)}>
                <img src={selectedItem.image} alt={selectedItem.nom} className="selected-item" />
            </div>)}
        </div>
    );
}

export default Inventaire;
