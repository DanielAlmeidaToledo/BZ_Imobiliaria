import Logo from "../assets/logo/logofinal.png";
import "./Default.css";
import Scroll from "react-scroll";
var scroll = Scroll.animateScroll;

const Default = () => {
  return (
    <div className="default">
      <div className="navbar">
        <img className="logo" src={Logo} alt="" />
        <ul className="navOptions">
          <li>
            <button onClick={() => scroll.scrollTo(1000)} className="servNav">
              Serviços
            </button>
          </li>
          <li>
            <button
              onClick={() => scroll.scrollTo(3370)}
              className="contactNav"
            >
              Contato
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Default;
