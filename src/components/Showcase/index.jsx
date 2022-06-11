import { Card } from "../Card";
import { Cart } from "../Cart";
import { Conteiner, Content } from "./style";

export const Showcase = ({ products, handleClick, currentSale }) => {
  return (
    <Conteiner>
      <Content>
        <ul>
          {products?.map(({ id, img, name, category, price }) => (
            <Card
              key={id}
              id={id}
              img={img}
              name={name}
              category={category}
              price={price}
              handleClick={handleClick}
            />
          ))}
        </ul>
      </Content>
      <Cart currentSale={currentSale} />
    </Conteiner>
  );
};
