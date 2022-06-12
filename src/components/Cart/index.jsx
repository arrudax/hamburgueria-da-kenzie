import { useEffect } from "react";
import { CartProducts } from "../CartProducts/index.jsx";

import { Conteiner, Content } from "./style.js";

export const Cart = ({
  removeItem,
  currentSale,
  cartTotal,
  setCartTotal,
  removeAllItems,
}) => {
  useEffect(() => {
    const value = currentSale?.reduce(
      (acc, currentValue) => acc + currentValue.price,
      0
    );
    setCartTotal(value);
  }, [setCartTotal, currentSale]);
  return (
    <>
      <Conteiner>
        <Content>
          <div className="cart__style">
            <h3>Carrinho de compras</h3>
          </div>
          {currentSale.length > 0 ? (
            <div className="cart__content--active">
              <ul className="content__list">
                {currentSale?.map(({ id, name, img, category }) => (
                  <CartProducts
                    key={id}
                    id={id}
                    name={name}
                    img={img}
                    category={category}
                    removeItem={removeItem}
                  />
                ))}
              </ul>

              <div className="contentCart__purchase">
                <div className="purchase__total">
                  <span>Total</span>
                  <span>
                    {cartTotal.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                </div>
                <button
                  onClick={() => removeAllItems()}
                  className="purchase__btn"
                >
                  Remover todos
                </button>
              </div>
            </div>
          ) : (
            <div className="cart__content--inactive">
              <h3>Sua sacola está vazia</h3>
              <p>Adicione itens</p>
            </div>
          )}
        </Content>
      </Conteiner>
    </>
  );
};
