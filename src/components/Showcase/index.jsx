import { Card } from "../Card";
import { Cart } from "../Cart";
import { Conteiner, Content } from "./style";

export const Showcase = ({
  products,
  handleClick,
  currentSale,
  cartTotal,
  setCartTotal,
  removeItem,
  removeAllItems,
  filteredProducts,
}) => {
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
      <Cart
        currentSale={currentSale}
        cartTotal={cartTotal}
        setCartTotal={setCartTotal}
        removeItem={removeItem}
        removeAllItems={removeAllItems}
      />
    </Conteiner>
  );
};
