import { ThemeButton } from "../ThemeButton";
import { Content } from "./style";

export const Card = ({ id, img, name, category, price, handleClick }) => {
  return (
    <Content>
      <div className="card__img">
        <img src={img} alt="name" />
      </div>
      <div className="card__content">
        <h3>{name}</h3>
        <p>{category}</p>
        <span>
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>

        <ThemeButton id={id} handleClick={handleClick}>Adicionar</ThemeButton>
      </div>
    </Content>
  );
};
