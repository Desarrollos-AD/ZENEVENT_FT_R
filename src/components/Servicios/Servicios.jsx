import "./Servicios.scss";

function Servicios() {
  return (
    <>
      <div className="contenedor">
        <section className="servicios">
          <h2>NUESTROS SERVICIOS</h2>
          <h3>
            Todo lo que necesitas para un evento
            <span className="gradiente_titulo"> extraordinario</span>
          </h3>

          <div className="servicios__cards">
            <div className="servicios__cards--card">
              <div className="card__icono">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-party-popper w-7 h-7 text-primary"
                >
                  <path d="M5.8 11.3 2 22l10.7-3.79"></path>
                  <path d="M4 3h.01"></path>
                  <path d="M22 8h.01"></path>
                  <path d="M15 2h.01"></path>
                  <path d="M22 20h.01"></path>
                  <path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"></path>
                  <path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"></path>
                  <path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"></path>
                  <path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"></path>
                </svg>
              </div>
              <div className="card__titulo">
                <h4>Eventos Sociales</h4>
              </div>
              <div className="card__contenido">
                <p>Fiestas, XV años, bodas e infantiles con toques únicos.</p>
              </div>
            </div>

            <div className="servicios__cards--card">
              <div className="card__icono">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-music w-7 h-7 text-primary"
                >
                  <path d="M9 18V5l12-2v13"></path>
                  <circle cx="6" cy="18" r="3"></circle>
                  <circle cx="18" cy="16" r="3"></circle>
                </svg>
              </div>
              <div className="card__titulo">
                <h4>Eventos Culturales</h4>
              </div>
              <div className="card__contenido">
                <p>
                  Espectáculos, festivales y celebraciones con raíces mexicanas.
                </p>
              </div>
            </div>

            <div className="servicios__cards--card">
              <div className="card__icono">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-trophy w-7 h-7 text-primary"
                >
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                  <path d="M4 22h16"></path>
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                </svg>
              </div>
              <div className="card__titulo">
                <h4>Eventos Deportivos</h4>
              </div>
              <div className="card__contenido">
                <p>Conferencias, lanzamientos y team buildings memorables.</p>
              </div>
            </div>

            <div className="servicios__cards--card">
              <div className="card__icono">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-video w-7 h-7 text-primary"
                >
                  <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                  <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                </svg>
              </div>
              <div className="card__titulo">
                <h4>Producción Audiovisual</h4>
              </div>
              <div className="card__contenido">
                <p>Iluminación, sonido, video y efectos especiales.</p>
              </div>
            </div>

            <div className="servicios__cards--card">
              <div className="card__icono">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-building2 w-7 h-7 text-primary"
                >
                  <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                  <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                  <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                  <path d="M10 6h4"></path>
                  <path d="M10 10h4"></path>
                  <path d="M10 14h4"></path>
                  <path d="M10 18h4"></path>
                </svg>
              </div>
              <div className="card__titulo">
                <h4>Eventos Corporativos</h4>
              </div>
              <div className="card__contenido">
                <p>Conferencias, lanzamientos y team buildings memorables. </p>
              </div>
            </div>

            <div className="servicios__cards--card">
              <div className="card__icono">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-sofa w-7 h-7 text-primary"
                >
                  <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"></path>
                  <path d="M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"></path>
                  <path d="M4 18v2"></path>
                  <path d="M20 18v2"></path>
                  <path d="M12 4v9"></path>
                </svg>
              </div>
              <div className="card__titulo">
                <h4>Renta de Mobiliario</h4>
              </div>
              <div className="card__contenido">
                <p> Equipo, mobiliario y montajes para cualquier escala.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Servicios;
