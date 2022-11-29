import "./Cards.css";

type Props = {
  title: string;
  subTitle: string;
  icon: JSX.Element;
};

const Cards = ({ title, subTitle, icon }: Props) => {
  return (
    <div className="cardValue">
      <div className="cardLeft">{icon}</div>
      <div className="cardRight">
        <h3>{title}</h3>
        <span>{subTitle}</span>
      </div>
    </div>
  );
};

export default Cards;
