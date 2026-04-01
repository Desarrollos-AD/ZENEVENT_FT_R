import "./Galeria.scss";

import img2 from "../../assets/img/img2.jpg";
import img3 from "../../assets/img/img3.jpg";
import img4 from "../../assets/img/img4.jpg";
import img5 from "../../assets/img/img5.jpg";
import img7 from "../../assets/img/img7.jpg";
import img6 from "../../assets/img/img6.jpg";

function Galeria() {
  return (
    <div className="contenedor">
      <section className="momentos" id="galeria">
        <h2>GALLERIA</h2>
        <h3>
          Momentos que <span className="gradiente_titulo">inspiran</span>
        </h3>

        <figure>
          <div class="galeria" className="galeria">
            <div class="galeria__img galeria__img--1">
              <img src={img2} alt="Imagen galeria" loading="lazy" />
              <div className="overlay">
                <p>Eventos Sociales</p>
              </div>
            </div>
            <div class="galeria__img galeria__img--2">
              <img src={img3} alt="Imagen galeria" loading="lazy" />
              <div className="overlay">
                <p>Corporativos</p>
              </div>
            </div>
            <div class="galeria__img galeria__img--3">
              <img src={img4} alt="Imagen galeria" loading="lazy" />
              <div className="overlay">
                <p>Festivales</p>
              </div>
            </div>
            <div class="galeria__img galeria__img--4">
              <img src={img5} alt="Imagen galeria" loading="lazy" />
              <div className="overlay">
                <p>Deportivos</p>
              </div>
            </div>
            <div class="galeria__img galeria__img--6">
              <img src={img6} alt="Imagen galeria" loading="lazy" />
              <div className="overlay">
                <p>Producción</p>
              </div>
            </div>
            <div class="galeria__img galeria__img--5">
              <img src={img7} alt="Imagen galeria" loading="lazy" />
              <div className="overlay">
                <p>Cultura Mexicana </p>
              </div>
            </div>
          </div>
        </figure>
      </section>
    </div>
  );
}

export default Galeria;
