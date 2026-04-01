import logo from "../../assets/img/logo whiter.png";
import "./Footer.scss";
import aviso from '../../../public/docs/Aviso de privacidad - ZENEVENT.pdf';

function Footer() {

  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="contenedor">
        <div className="footer">
          <img src={logo} alt="Logo Zenevent" />

          <div className="">
            <p>
              &copy; {year} Zenevent. - <a href={aviso} target="_blank"> Aviso de privacidad</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;