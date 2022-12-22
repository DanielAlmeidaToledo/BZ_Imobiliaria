import "./Footer.css";

import Logo from "../assets/logo/logo.png";
import Whats from "../assets/animations/whats.png";
import Insta from "../assets/animations/insta.png";
import Face from "../assets/animations/face.png";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="fSociais">
        <img src={Logo} alt="Logo" className="fLogo" />
        <div className="fRedes">
          <a href="https://wa.me/5515981238616" target={"_blank"}>
            <img src={Whats} alt="Whatsapp" />
          </a>
          <a
            target={"_blank"}
            href="https://www.instagram.com/bordimezanolla_imobiliaria/"
          >
            <img src={Insta} alt="Whatsapp" />
          </a>
          <a
            target={"_blank"}
            href="https://www.facebook.com/bordimezanollaimobiliaria/"
          >
            <img src={Face} alt="Whatsapp" />
          </a>
        </div>
      </div>
      <div className="fPlace">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14659.534844069962!2d-47.6767253!3d-23.2836748!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x36ce392b740c9c0c!2sBORDIM%20E%20ZANOLLA%20IMOBILIARIA%20E%20ENGENHARIA!5e0!3m2!1spt-BR!2sbr!4v1671737693372!5m2!1spt-BR!2sbr"
          width="400"
          height="300"
          loading="lazy"
          className="fMap"
        ></iframe>
        <div className="fInfos">
          <h3>Contatos</h3>
          <span>Whatsapp: (15) 98123-8616</span>
          <span>Telefone: (15) 3363-3388</span>
          <span>
            Endereço: R. Conselheiro Antônio Prado, 164 - Centro, Boituva - SP,
            18550-001
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
