import "./Forms.css";
import { BsWhatsapp } from "react-icons/bs";

const Forms = () => {
  return (
    <div className="forms">
      <h2 className="formsTitle">Contato</h2>
      <div className="formsDiv">
        <span className="formsSpan">
          Tem interesse em conhecer mais sobre o nosso trabalho?
        </span>
        <div className="formsRight">
          <form action="">
            <div className="container">
              <input type="text" required className="contInput" />
              <span className="contSpan">Nome</span>
            </div>
            <div className="container">
              <input type="tel" required className="contInput" />
              <span className="contSpan">Celular</span>
            </div>
            <div className="container">
              <input type="text" required className="contInput" />
              <span className="contSpan">Assunto</span>
            </div>
          </form>
          <a
            href="https://wa.me/5515981238616"
            target={"_blank"}
            className="formsBtn"
          >
            <BsWhatsapp className="formsIcon" size={100} color={"#000"} />
            <p>Entre em contato agora mesmo com os nossos corretores</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Forms;
