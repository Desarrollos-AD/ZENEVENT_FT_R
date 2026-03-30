import logo from "../../assets/img/logo whiter.png";
import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="contenedor">
        <div className="footer">
          <img src={logo} alt="Logo Zenevent" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;