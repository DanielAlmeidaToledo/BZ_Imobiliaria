import "./Value.css";
import Cards from './Cards'
import { FcIdea, FcSurvey, FcLibrary, FcTodoList } from "react-icons/fc";
import BgValue from "/Background.png";

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
            title="Projetos Arquitetônicos"
            subTitle="Criação de um documento que especifica as características da casa, incluindo design, layout, materiais e outros detalhes construtivos."
            icon={<FcIdea size={100} />}
          />
          <Cards
            title="Construção"
            subTitle="Realizamos o processo de projetar e construir uma estrutura que seja apropriada para uso residencial. É um trabalho que exige planejamento, recursos e habilidades específicas."
            icon={<FcLibrary size={100} />}
          />
          <Cards
            title="Gerenciamento de Obras"
            subTitle="Criação de um documento que especifica as características da casa, incluindo design, layout, materiais e outros detalhes construtivos."
            icon={<FcSurvey size={100} />}
          />
          <Cards
            title="Projetos Arquitetônicos"
            subTitle="Criação de um documento que especifica as características da casa, incluindo design, layout, materiais e outros detalhes construtivos."
            icon={<FcTodoList size={100} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Value;
