import "./Sperador.scss";

function Separador() {
  return (
    <div className="separador">
      <div className="contenedor">
        <div className="contenido">
          <div className="contenido__left">
            <h2>PRODUCCIÓN & ESPECTÁCULOS</h2>
            <h3>
              Tecnología de <span className="gradiente_titulo">vanguardia </span>
              para tus eventos
            </h3>
            <p>
              Contamos con equipo de última generación y un equipo técnico
              especializado para crear atmósferas que cautivan los sentidos y
              transforman cualquier espacio.
            </p>
          </div>
          <div className="contenido__right">
            <div className="contenido__right--card">
              <div className="icono">
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
                  class="lucide lucide-lightbulb w-6 h-6 text-secondary"
                >
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                  <path d="M9 18h6"></path>
                  <path d="M10 22h4"></path>
                </svg>
              </div>
              <p>Iluminación profesional</p>
            </div>
            <div className="contenido__right--card">
              <div className="icono">
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
                  class="lucide lucide-speaker w-6 h-6 text-secondary"
                >
                  <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                  <path d="M12 6h.01"></path>
                  <circle cx="12" cy="14" r="4"></circle>
                  <path d="M12 14h.01"></path>
                </svg>
              </div>
              <p>Sonido de alta fidelidad</p>
            </div>
            <div className="contenido__right--card">
              <div className="icono">
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
                  class="lucide lucide-tv w-6 h-6 text-secondary"
                >
                  <rect width="20" height="15" x="2" y="7" rx="2" ry="2"></rect>
                  <polyline points="17 2 12 7 7 2"></polyline>
                </svg>
              </div>
              <p>Pantallas LED y video</p>
            </div>
            <div className="contenido__right--card">
              <div className="icono">
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
                  class="lucide lucide-sparkles w-6 h-6 text-secondary"
                >
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                  <path d="M20 3v4"></path>
                  <path d="M22 5h-4"></path>
                  <path d="M4 17v2"></path>
                  <path d="M5 18H3"></path>
                </svg>
              </div>
              <p>Efectos especiales</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Separador;
