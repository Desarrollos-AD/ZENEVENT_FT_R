import "./SeparadorContacto.scss";

function SeparadorContacto() {
  return (
    <section className="contenedor">
      <div className="separadorContacto">
        <h5>
          Haz de tu evento algo <br />
          <span className="gradiente_titulo"> inolvidable</span>
        </h5>
        <p>
          Platícanos tu idea y juntos la convertimos en realidad. Sin
          compromiso.
        </p>

        <div className="btn btn__primario">
          <a href="#">Contáctanos</a>
        </div>
      </div>
    </section>
  );
}

export default SeparadorContacto;
