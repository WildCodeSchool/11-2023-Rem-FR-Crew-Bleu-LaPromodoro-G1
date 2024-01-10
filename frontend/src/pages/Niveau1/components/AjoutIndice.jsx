
import React from 'react';

function AjoutIndice({ indice, onAjouter }) {
    return (
        <img
            src={indice.image}
            alt={indice.nom}
            style={{ 
                position: 'absolute', 
                left: indice.x + 'px', 
                top: indice.y + 'px',
                width: '50px',  
                height: 'auto'    
            }}
            onClick={() => onAjouter(indice)}
        />
    );
}


export default AjoutIndice;
