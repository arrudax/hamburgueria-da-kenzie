// import { ThemeButton } from "../ThemeButton/index.jsx";
import { Conteiner, Content } from "./style.js";

export const Cart = () => {
  return (
    <>
      <Conteiner>
        <Content>
          <div className="cart__style">
            <h3>Carrinho de compras</h3>
          </div>

          {/* <div className="cart__content--active">
            <ul className="content__list"></ul>

            <div className="contentCart__purchase">
              <div className="purchase__total">
                <span>Total</span>
                <span>R$ 40,00</span>
              </div>
              <ThemeButton className="purchase__btn">Remover todos</ThemeButton>
            </div>
          </div> */}

          <div className="cart__content--inactive">
            <h3>Sua sacola está vazia</h3>
            <p>Adicione itens</p>
          </div>
        </Content>
      </Conteiner>
    </>
  );
};
