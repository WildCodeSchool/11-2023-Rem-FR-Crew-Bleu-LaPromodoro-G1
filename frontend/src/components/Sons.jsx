// /* eslint-disable react/prop-types */
// import React, { useEffect, useRef } from "react";
// import issou from "../assets/issou.mp3";

// function Sons({ AudioUrl }) {
//   const audioRef = useRef(null);

//   useEffect(() => {
//     if (AudioUrl) {
//       console.info("Chargement de l'audio:", issou);
//       audioRef.current = new Audio(issou);
//     }
//   }, [AudioUrl]);

//   const playSound = () => {
//     console.info("Tentative de lecture de l'audio", audioRef);
//     if (audioRef.current) {
//       audioRef.current
//         .play()
//         .then(() => {
//           console.warn("Audio en lecture");
//         })
//         .catch((e) => {
//           console.error("Erreur lors de la lecture de l'audio:", e);
//         });
//     }
//   };

//   return (
//     <div type="button" onClick={playSound}>
//       valuedqdsqsd
//     </div>
//   );
// }

// export default Sons;
