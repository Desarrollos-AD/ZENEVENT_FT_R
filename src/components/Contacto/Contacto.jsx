import { useState } from "react";
import "./Contacto.scss";

const formasContacto = [
  {
    texto: "EMAIL",
    dato: "organizadoradeeventoszenevent@gmail.com",
    icono: (
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
        class="lucide lucide-mail w-6 h-6 text-primary"
      >
        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
      </svg>
    ),
  },
  {
    texto: "TELÉFONO",
    dato: "2293 331 0631",
    icono: (
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
        class="lucide lucide-phone w-6 h-6 text-primary"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    ),
  },
  {
    texto: "UBICACIÓN",
    dato: "Av. Amparo de la torre #217",
    icono: (
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
        class="lucide lucide-map-pin w-6 h-6 text-primary"
      >
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    ),
  },
];

function Contacto() {
  const [error, setError] = useState("");
  const [enviado, setEnviado] = useState(false);

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    evento: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.nombre ||
      !formData.email ||
      !formData.evento ||
      !formData.mensaje
    ) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Por favor, ingresa un email válido.");
      return;
    }

    setError("");
    setEnviado(true);

    setFormData({
      nombre: "",
      email: "",
      evento: "",
      mensaje: "",
    });
  };

  return (
    <div className="contenedor">
      <section>
        <h2>Contacto</h2>
        <h3>
          Hablemos de tu
          <span className="gradiente_titulo"> próximo evento</span>
        </h3>

        {enviado && (
          <p className="exito">
            ¡Gracias por contactarnos! Hemos recibido tu mensaje y nos pondremos
            en contacto contigo en breve.
          </p>
        )}

        {error && <p className="error">{error}</p>}

        <div className="contacto">
          <div className="contenedor contacto__formulario">
            <form className="contenedor form" onSubmit={handleSubmit} noValidate>
              <div className="form__row">
                <div className="form__group">
                  <input
                    className="form__input"
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Nombre"
                  />
                </div>

                <div className="form__group">
                  <input
                    className="form__input"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="form__group">
                <input
                  className="form__input"
                  type="text"
                  name="evento"
                  value={formData.evento}
                  onChange={handleChange}
                  placeholder="Tipo de evento"
                />
              </div>

              <div className="form__group form__group--textarea">
                <textarea
                  className="form__textarea"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Escribe tu mensaje..."
                  rows="5"
                />
              </div>

              <button type="submit" className="btn__secundario">
                Enviar Mensaje
              </button>
            </form>
          </div>
          <div className="contacto__medios">
            {formasContacto.map((medio, index) => (
              <div key={index} className="media">
                <div className="media__icono">{medio.icono}</div>
                <div className="media__info">
                  <h4>{medio.texto}</h4>
                  <p>{medio.dato}</p>
                </div>
              </div>
            ))}

            <div className="card card--mensaje">
              <p>Responderemos tu mensaje en menos de 24 horas...</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contacto;
