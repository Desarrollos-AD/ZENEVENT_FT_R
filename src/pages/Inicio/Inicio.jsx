import "./Inicio.scss";
import Header from "../../components/Header/Header";
import Servicios from "../../components/Servicios/Servicios";
import SobreNosotros from "../../components/SobreNosotros/SobreNosotros";
import Galeria from "../../components/Galeria/Galeria";

const Inicio = () => {
  return (
    <>
      <main>
        <Header></Header>

        <Servicios></Servicios>

        <SobreNosotros></SobreNosotros>

        <Galeria></Galeria>
      </main>
    </>
  );
};

export default Inicio;
