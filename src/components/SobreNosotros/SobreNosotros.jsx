import "./SobreNosotros.scss";
import img1 from "../../assets/img/img1.jpg";

const objetivos = [
  {
    objetivo: "Crear experiencias memorables",
    descripcion:
      "Desarrollar eventos que generen impacto, conexión emocional y satisfacción en cada cliente y asistente.",
  },
  {
    objetivo: "Garantizar excelencia operativa",
    descripcion:
      "Mantener altos estándares de organización, logística y ejecución en cada proyecto.",
  },
  {
    objetivo: "Ofrecer soluciones integrales",
    descripcion:
      "Brindar todos los servicios necesarios en un solo lugar, desde la planeación hasta la realización del evento.",
  },
  {
    objetivo: "Innovar constantemente",
    descripcion:
      "Incorporar nuevas tendencias, tecnologías y conceptos creativos en cada evento..",
  },
  {
    objetivo: "Fortalecer relaciones a largo plazo",
    descripcion:
      "Construir confianza con nuestros clientes a través de resultados consistentes y atención personalizada.",
  },
  {
    objetivo: "Posicionar la marca ZENEVENT",
    descripcion:
      "Consolidar presencia en el mercado como una empresa confiable, moderna y creativa en el sector de eventos.",
  },
];

function SobreNosotros() {
  return (
    <div className="contenedor">
      <section className="" id="nosotros">
        <div className="sobreNosotros">
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
              En ZENEVENT transformamos ideas en experiencias memorables. Con
              más de una década de trayectoria, combinamos creatividad,
              tecnología y una logística impecable para crear eventos que
              superan expectativas.
            </p>
            <p>
              Desde íntimas celebraciones hasta grandes producciones, cada
              detalle importa. Nuestro equipo multidisciplinario garantiza que
              tu visión cobre vida de manera espectacular.
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
        </div>

        <div className="valores">
          <div className="mision card">
            <h2>Misión</h2>
            <p>
              Diseñar, organizar y producir eventos integrales que combinen
              creatividad, planeación estratégica y ejecución profesional,
              brindando experiencias memorables que conecten con las emociones
              de cada cliente.
            </p>
            <p>
              En <span className="gradiente_titulo"> ZENEVENT </span>trabajamos
              para transformar ideas en eventos únicos, cuidando cada detalle,
              optimizando recursos y garantizando resultados que superen
              expectativas.
            </p>
          </div>
          <div className="vision card">
            <h2>Visión</h2>
            <p>
              Consolidarnos como una empresa líder en la organización y
              producción de eventos a nivel regional y nacional, reconocida por
              nuestra innovación, calidad y capacidad de crear experiencias
              impactantes.
            </p>
            <p>
              Aspiramos a ser el aliado estratégico de empresas, marcas y
              particulares que buscan eventos bien estructurados, modernos y con
              un alto valor emocional.
            </p>
          </div>

          <div className="objetivos card">
            <h2>Objetivos</h2>

            <div className="objetivos__objetivo">
              {objetivos.map((item) => {
                return (
                  <div className="card">
                    <div className="objetivos__objetivo--titulo ">
                      <h4>{item.objetivo}</h4>
                    </div>
                    <div className="objetivos__objetivo--descripcion">
                      <p>{item.descripcion}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SobreNosotros;
