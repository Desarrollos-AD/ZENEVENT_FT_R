import { useState, useEffect } from "react";
import logo from "../../assets/img/logo whiter.png";
import "./Nav.scss";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
        <div className={` navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
          <div className="navbar__container">
            <div className="navbar__logo">
              <a href="#">
                <img src={logo} alt="Logo Zenevent" />
              </a>
            </div>

            <nav className={`navbar__links ${isOpen ? "active" : ""}`}>
              <div className="navbar__links--link">
                <a href="#">Inicio</a>
              </div>
              <div className="navbar__links--link">
                <a href="#">Nosotros</a>
              </div>
              <div className="navbar__links--link">
                <a href="#">Servicios</a>
              </div>
              <div className="navbar__links--link">
                <a href="#">Galería</a>
              </div>
              <div className="navbar__links--link">
                <a href="#" className="btn btn__primario">Cotiza tu evento</a>
              </div>
            </nav>

            <div
              className={`navbar__toggle ${isOpen ? "active" : ""}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
    </>
  );
}

export default Nav;



