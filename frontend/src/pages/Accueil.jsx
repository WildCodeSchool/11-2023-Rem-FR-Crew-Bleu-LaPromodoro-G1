import "./Accueil.scss";

function Accueil () {
    return (
        <section id="accueil">
            <section id="landing-page">
                <h1>Casino <span>777</span></h1>
                <a class="scroll-down" href="#home">&#8964;</a>
            </section>
            <section id="home">
                <h2>Description</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, consequatur! Repudiandae, quibusdam. Quod inventore eveniet laudantium, sapiente esse ratione fugiat sunt expedita. Non unde dicta, consequuntur harum facilis error odio.</p>
                <h2>Informations</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum modi aut atque, molestiae delectus vel ad fugiat eligendi fugit nesciunt, quod omnis quibusdam, neque repellendus quis? Omnis tempora suscipit ex.</p>
                <div className="launcher">
                    <button>Nouvelle partie</button>
                    <button>Continuer</button>
                </div>
            </section>
        </section>
    );
}

export default Accueil;