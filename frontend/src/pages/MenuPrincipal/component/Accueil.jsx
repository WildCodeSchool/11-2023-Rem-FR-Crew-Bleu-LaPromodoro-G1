import { Link } from "react-router-dom";
import "../styles/Accueil.scss";
import github from "../assets/icons8-github-50.png";
import linkedin from "../assets/icons8-linkedin-50.png";

function Accueil() {
  return (
    <section id="accueil">
      <section id="landing-page">
        <h1>
          Casino
          <span className="seven-to-six">
            <span className="seven">777</span>
            <span className="to-six">666</span>
          </span>
        </h1>
        <a className="scroll-down" href="#buttonForScroll">
          <img
            src="src\pages\MenuPrincipal\assets\Scroll_bas.png"
            alt="scroll-button"
          />
        </a>
      </section>
      <section id="home">
        <div className="para">
          <h2>DESCRIPTION</h2>
          <p>
            Embarquez dans une aventure solo unique avec le jeu d'évasion en
            ligne "Casino777". Plus qu'un simple jeu, c'est un voyage dans un
            monde énigmatique où chaque indice et chaque énigme résolue vous
            rapproche de la sortie de ce casino mystérieux. Ici, les jeux de
            hasard se transforment en défis intellectuels captivants, où chaque
            pièce révèle un fragment caché de l'histoire de Gerad Hadd, notre
            protagoniste principal.
            <br />
            <br />
            Dans cette quête solitaire, la ligne entre réalité et fiction
            s'estompe, vous immergeant dans une expérience où vos émotions
            oscillent entre le réel et l'imaginaire. Faites appel à votre
            ingéniosité et votre perspicacité pour déjouer les énigmes du
            "Casino777" et découvrir les secrets de son passé.
            <br />
            <br />
            Ce n'est pas seulement un escape game, c'est une exploration
            personnelle où les enjeux sont bien plus profonds qu'une simple
            évasion. Êtes-vous prêt à relever le défi, à jouer avec le destin et
            à découvrir les vérités cachées dans ce labyrinthe d'énigmes ?<br />
            Votre aventure commence maintenant dans le "Casino777", où chaque
            décision compte et chaque indice est une porte vers des révélations
            plus intrigantes les unes que les autres.
          </p>
        </div>
        <div className="para">
          <h2>INFORMATIONS</h2>
          <p>
            Nous sommes une équipe d'étudiants enthousiastes de la Wild Code
            School, et nous voulons partager avec vous notre aventure
            passionnante dans le développement de "Casino777", notre projet de
            fin d'études.
            <br />
            <br />
            Le processus de développement a été un véritable parcours
            d'apprentissage. Chacun d'entre nous apportait des compétences et
            des perspectives uniques, allant du codage à la conception
            graphique, en passant par le storytelling. Nous avons été guidés par
            nos mentors à la Wild Code School, dont l'expertise et les conseils
            ont été cruciaux pour transformer notre vision en réalité.
            <br />
            <br />
            Nous avons rencontré des défis, notamment en matière de conception
            d'énigmes qui soient à la fois intrigantes et faisables, et en
            assurant que l'interface utilisateur soit intuitive mais engageante.
            Chaque obstacle a été une opportunité d'apprendre et de grandir en
            tant que développeurs et concepteurs.
            <br />
            <br />
            "Casino777" est plus qu'un simple jeu pour nous. C'est le résultat
            de notre passion, de notre travail d'équipe et de notre engagement à
            créer quelque chose de vraiment spécial. Nous sommes fiers de ce que
            nous avons accompli et sommes impatients de voir comment les joueurs
            vont interagir avec notre création.
            <br />
            <br />
            Nous tenons à remercier la Wild Code School pour l'opportunité et le
            soutien, ainsi que tous ceux qui ont joué, testé et donné des
            retours sur "Casino777". Mention spéciale à notre mentor Abdou, qui
            s'est porté volontaire pour apporter sa voix dans les doublages de
            Gerard Hadd. Votre enthousiasme et vos critiques constructives ont
            été essentiels pour affiner notre jeu.
            <br />
            <br />
            En tant que jeunes développeurs, ce projet a été une étape
            significative dans notre parcours. Nous sommes excités de continuer
            à apprendre, à créer et à innover dans le domaine du développement
            de jeux. Nous espérons que vous apprécierez "Casino777" autant que
            nous avons aimé le créer. <br />
            <br />
            Bon jeu à tous ! <br />
            <br /> Cordialement, <br />
            <br /> L'Équipe des Développeur.
          </p>
          {/* ALL DEVS LINKS */}
          <div className="allLinks">
            <div className="linksContainer">
              {/* MATTEO LINKS */}
              <div className="links">
                {/* GITHUB */}
                <a
                  href="https://github.com/mdonatelli1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={github} alt="github-logo" />
                </a>
                {/* LINKEDIN */}
                <a
                  href="https://www.linkedin.com/in/matteodonatelli/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkedin} alt="linkedin-logo" />
                </a>
              </div>
              <p>Mattéo</p>
            </div>
            {/* HAMIDOU LINKS */}
            <div className="linksContainer">
              <div className="links">
                {/* GITHUB */}
                <a
                  href="https://github.com/HamIIdou"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={github} alt="github-logo" />
                </a>
                {/* LINKEDIN */}
                <a
                  href="https://www.linkedin.com/in/hamidou-sall-mamadou-390b4118b/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkedin} alt="linkedin-logo" />
                </a>
              </div>
              <p>Hamidou</p>
            </div>
            {/* MAEVA LINKS */}
            <div className="linksContainer">
              <div className="links">
                {/* GITHUB */}
                <a
                  href="https://github.com/maevafauvel"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={github} alt="github-logo" />
                </a>
                {/* LINKEDIN */}
                <a
                  href="https://www.linkedin.com/in/maevafauvel/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkedin} alt="linkedin-logo" />
                </a>
              </div>
              <p>Maë</p>
            </div>
            {/* BEGOT LINKS */}
            <div className="linksContainer">
              <div className="links">
                {/* GITHUB */}
                <a
                  href="https://github.com/Gwenaelbegot"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={github} alt="github-logo" />
                </a>
                {/* LINKEDIN */}
                <a
                  href="https://www.linkedin.com/in/begot-gwenael-04aba82a4/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkedin} alt="linkedin-logo" />
                </a>
              </div>
              <p>Gwena</p>
            </div>
            {/* OCEANE LINKS */}
            <div className="linksContainer">
              <div className="links">
                {/* GITHUB */}
                <a
                  href="https://github.com/ThisIsHowVillainsAreMade"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={github} alt="github-logo" />
                </a>
                {/* LINKEDIN */}
                <a
                  href="https://www.linkedin.com/in/oaiw/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkedin} alt="linkedin-logo" />
                </a>
              </div>
              <p>Océane</p>
            </div>
          </div>
          {/* LINKS END */}
        </div>
        <div id="launcher">
          <Link to="/niveau1">
            <button
              id="buttonForScroll"
              type="button"
              onClick={() => {
                localStorage.clear();
                localStorage.setItem("muted", true);
                localStorage.setItem(
                  "inventaire",
                  JSON.stringify([
                    {
                      id: 0,
                    },
                  ])
                );
              }}
            >
              Nouvelle partie
            </button>
          </Link>
          <Link
            to={
              localStorage.getItem("currentStage")
                ? `${localStorage.getItem("currentStage")}`
                : "/niveau1"
            }
          >
            <button type="button">Continuer</button>
          </Link>
          {/* <img src="/src/assets/github.png" alt="logoGit" /> */}
        </div>
      </section>
    </section>
  );
}

export default Accueil;
