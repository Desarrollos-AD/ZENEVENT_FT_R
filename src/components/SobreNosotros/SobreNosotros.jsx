import "./SobreNosotros.scss";
import img1 from "../../assets/img/img1.jpg";

function SobreNosotros() {
  return (
    <div className="contenedor">
      <section className="sobreNosotros" id="sobre-nosotros">
        <div className="sobreNosotros__img">
          <img src={img1} alt="Imagen Salon" />

          <div className="experiencia">
            <p className="texto_resaltado">10+</p>
            <p>Años</p>
          </div>
        </div>
        <div className="sobreNosotros__descripcion">
          <h2>SOBRE NOSOTROS</h2>
          <h3>
            Donde la <span className="gradiente_titulo">creatividad</span> se
            encuentra con la excelencia
          </h3>
          <p>
            En ZENEVENT transformamos ideas en experiencias memorables. Con más
            de una década de trayectoria, combinamos creatividad, tecnología y
            una logística impecable para crear eventos que superan expectativas.
          </p>
          <p>
            Desde íntimas celebraciones hasta grandes producciones, cada detalle
            importa. Nuestro equipo multidisciplinario garantiza que tu visión
            cobre vida de manera espectacular.
          </p>
          <div className="sobreNosotros__descripcion--tags">
            <div className="experiencia">
              <p className="texto_resaltado">500+</p>
              <p className="texto_pequeno">Eventos</p>
            </div>
            <div className="experiencia">
              <p className="texto_resaltado">50+</p>
              <p className="texto_pequeno">Colaboradores</p>
            </div>
            <div className="experiencia">
              <p className="texto_resaltado">100%</p>
              <p className="texto_pequeno">Pasión</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SobreNosotros;
