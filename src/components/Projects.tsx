import "./Projects.css";

import proj1 from "../assets/slideImg/img8-1.jpg";
import proj2 from "../assets/house/house1.jpg";
import proj3 from "../assets/house/house3.jpg";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projLeft">
        <h2 className="projTitle">Nossos projetos</h2>
        <img src={proj1} alt="Projeto" className="proj1" />
      </div>
      <div className="projRight">
        <img src={proj2} alt="Projeto" className="proj2" />
        <p className="projSpan">
          Temos vários projetos incríveis esperando por você.
        </p>
        <img src={proj3} alt="Projeto" className="proj2" />
        <p className="projSpan">
          O seu sonho tá mais perto do que você imagina.
        </p>
      </div>
    </div>
  );
};

export default Projects;
