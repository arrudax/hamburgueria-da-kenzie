import { Card } from "../Card";
import { Conteiner, Content } from "./style";

export const Showcase = ({ productsList }) => {
  return (
    <Conteiner>
      <Content>
        <ul>
          {productsList?.map(({ id, img, name, category, price }) => (
            <Card
              key={id}
              img={img}
              name={name}
              category={category}
              price={price}
            />
          ))}
        </ul>
      </Content>
    </Conteiner>
  );
};
