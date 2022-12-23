import "./Value.css";
import Cards from './Cards'
import { FcIdea, FcSurvey, FcLibrary, FcHome } from "react-icons/fc";
import BgValue from "../assets/Background.png";

const Value = () => {
  return (
    <div className="value">
      <div className="infoFaixa">
        <img className="bgValue" src={BgValue} alt="" />
      </div>
      <div className="cardsValue">
        <div className="floatLeft">
          <h1 className="valueTitle">Encontre o que você está procurando</h1>
        </div>
        <div className="floatRight">
          <Cards
            title="Casas e Terrenos"
            subTitle="Aqui na nossa imobiliária temos uma grande variedade de casas e terrenos à venda. Temos casas em todos os tamanhos e em todas as localizações, desde apartamentos modernos em zonas residenciais a casas de campo localizadas em áreas rurais."
            icon={<FcHome size={100} />}
          />
          <Cards
            title="Projetos Arquitetônicos"
            subTitle="Projetos elaborados por profissionais qualificados para projetar e construir uma casa exclusiva. Estes projetos incluem a criação de fluxos de trabalho, desenho de plantas, criação de orçamentos, seleção de materiais e execução de construção."
            icon={<FcIdea size={100} />}
          />
          <Cards
            title="Construção"
            subTitle="Processo de projetar e construir uma casa, desde a fase de planejamento até a conclusão do projeto. O processo inclui a localização adequada, a seleção de materiais e a seleção de métodos de construção, bem como a escolha de fornecedores e contratados."
            icon={<FcLibrary size={100} />}
          />
          <Cards
            title="Regularização de Obras"
            subTitle="Processo de regularização das obras realizadas em uma residência, a fim de garantir que todos os trabalhos e serviços realizados sejam de acordo com as leis vigentes, bem como que não coloquem em risco a segurança, integridade e saúde das pessoas que frequentam o imóvel."
            icon={<FcSurvey size={100} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Value;
