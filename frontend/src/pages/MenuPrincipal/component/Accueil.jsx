import { Link } from "react-router-dom";
import "../styles/Accueil.scss";

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
        <a className="scroll-down" href="#home">
          <img
            src="src\pages\MenuPrincipal\assets\Scroll_bas.png"
            alt="scroll-button"
          />
        </a>
      </section>
      <section id="home">
        <div className="para">
          <h2>Description</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            consequatur! Repudiandae, quibusdam. Quod inventore eveniet
            laudantium, sapiente esse ratione fugiat sunt expedita. Non unde
            dicta, consequuntur harum facilis error odio.
          </p>
        </div>
        <div className="para">
          <h2>Informations</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            modi aut atque, molestiae delectus vel ad fugiat eligendi fugit
            nesciunt, quod omnis quibusdam, neque repellendus quis? Omnis
            tempora suscipit ex.
          </p>
        </div>
        <div id="launcher">
          <Link to="/niveau1">
            <button type="button">Nouvelle partie</button>
          </Link>
          <Link to="/">
            {" "}
            <button type="button">Continuer</button>
          </Link>
        </div>
      </section>
    </section>
  );
}

export default Accueil;
