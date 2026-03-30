import Nav from "../Nav/Nav";
import "./Header.scss";

function Header() {
  return (
    <header className="hero">
      <div className="contenedor">
        <Nav />

        <div className="hero__contenido">
          <div className="hero__contenido--tags">
            <ul>
              <li>PRODUCCIÓN</li>
              <li>LOGÍSTICA</li>
              <li>EXPERIENCIAS</li>
            </ul>
          </div>
          <div className="hero__contenido--titulo">
            <h1>
              Creamos experiencias <br /> que se convierten en <br />
              <span className="gradiente_titulo">Recuerdos</span>
            </h1>
          </div>
          <div className="hero__contenido--subtitulo">
            <h4>
              Somos expertos en la organización, producción y logística de
              eventos <br />
              que marcan la diferencia.
            </h4>
          </div>
          <div className="hero__contenido--boton">
            <div className="btn btn__primario">
              <a href="#">Cotiza tu evento</a>
            </div>
          </div>
        </div>
        <div className="mause">
          <div className="mause__scroll"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
