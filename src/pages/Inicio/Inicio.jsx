import "./Inicio.scss";
import Header from "../../components/Header/Header";
import Servicios from "../../components/Servicios/Servicios";
import SobreNosotros from "../../components/SobreNosotros/SobreNosotros";
import Galeria from "../../components/Galeria/Galeria";
import Separador from "../../components/Separador/Separador";
import Footer from "../../components/Footer/Footer";
import Elegirnos from "../../components/Elegirnos/Elegirnos";

const Inicio = () => {
  return (
    <>
      <main>
        <Header></Header>
        <Servicios></Servicios>
        <SobreNosotros></SobreNosotros>
      </main>

      <Galeria></Galeria>
      <Separador></Separador>
      <Elegirnos></Elegirnos>
      
      <Footer></Footer>
    </>
  );
};

export default Inicio;
