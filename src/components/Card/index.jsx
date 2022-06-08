import { ThemeButton } from "../Button";
import { Content } from "./style";

export const Card = ({ img, name, category, price }) => {
  return (
    <Content>
      <div className="card__img">
        <img src={img} alt="name" />
      </div>
      <div className="card__content">
        <h3>{name}</h3>
        <p>{category}</p>
        <span>{price}</span>
        <ThemeButton>Adicionar</ThemeButton>
      </div>
    </Content>
  );
};
