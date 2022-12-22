import "./Forms.css";

import { useState } from "react";

import { BsWhatsapp } from "react-icons/bs";

const Forms = () => {
  const [name, setName] = useState("");
  const [reason, setReason] = useState("");

  return (
    <div className="forms">
      <h2 className="formsTitle">Contato</h2>
      <div className="formsDiv">
        <span className="formsSpan">
          Tem interesse em conhecer mais sobre o nosso trabalho?
          <br />
          <br />
          Entre em contato agora mesmo com os nossos corretores
        </span>
        <div className="formsRight">
          <form action="">
            <div className="container">
              <input
                type="text"
                required
                className="contInput"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span className="contSpan">Nome</span>
            </div>
            <div className="container">
              <input type="tel" required className="contInput" />
              <span className="contSpan">Celular</span>
            </div>
            <div className="container">
              <input
                type="text"
                required
                className="contInput contInputAss"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              />
              <span className="contSpan">Assunto</span>
            </div>
          </form>
          <a
            href={`https://api.whatsapp.com/send?phone=5515991828683&text=%F0%9F%8F%A0%20*Bordim%20e%20Zanolla*%20%F0%9F%8F%97%EF%B8%8F%0A%0AOl%C3%A1,%0AMeu%20nome%20%C3%A9%20${name},%20tenho%20interesse%20nesse%20assunto:%0A${reason}`}
            target={"_blank"}
            className="formsBtn"
          >
            <BsWhatsapp className="formsIcon" size={35} color={"#fff"} />
            <p>Whatsapp</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Forms;
