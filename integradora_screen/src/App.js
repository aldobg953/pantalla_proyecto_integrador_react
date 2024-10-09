import React from 'react';
import Header from './components/Header';
import PrincipalText from './components/PrincipalText';
import PresentationPage from './components/PresentationPage';
import Pilares from './components/Pilares';
import Caracteristica from './components/Caracteristica';
import Organizacion from './components/Organizacion';
import Footer from './components/Footer';
import './css/inicio.css';
import Dedicatoria from './components/Dedicatoria';
import Disclaimer from './components/Disclaimer';

const App = () => {
  return (
    <div>
      <center>
      <Header />
        <PrincipalText />

        <div class='presentation-page'>
        <PresentationPage />
        <Pilares />
        <Caracteristica
          title={"Diseño atractivo"} 
          description={"Olvídate de la formalidad y las aburridas páginas de las universidades. <span>PathFinder</span> te ofrece una experiencia visual fresca y dinámica."}
          imageSrc={require("./media/DesignPreview.png")}
        />

        <Organizacion/>

        <Caracteristica
          title={"Roadmap personalizado"} 
          description={"Obtén una visión más amplia de cada carrera con nuestros roadmaps interactivos. Estos mapas detallados te muestran el camino completo de tu carrera, desde las materias que cursarás hasta las habilidades que desarrollarás.<sup>3</sup>"}
          imageSrc={require("./media/RoadmapPreview.png")}
        />
        <Caracteristica
          title={"Opiniones auténticas"} 
          description={"Obtén feedback real de otros estudiantes en nuestra sección de comentarios.  ¡Conoce la verdad directamente de quienes ya han recorrido el camino que tú estás por emprender!"}
          imageSrc={require("./media/OpinionsPreview.png")}
        />

        <Dedicatoria/>

        <Disclaimer/>
      
      </div>
      </center>
      <Footer />
    </div>
  );
};

export default App;
