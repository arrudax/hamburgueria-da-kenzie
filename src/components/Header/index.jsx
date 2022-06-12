import { useState } from "react";
import logo from "../../assets/logo/logo.svg";
import { Conteiner, Content } from "./styles";

export const Header = ({ setFilteredProducts, products }) => {
  const [valueInput, setValueInput] = useState("");

  const searchProducts = () => {
    const filterProduct = products?.filter(
      ({ name }) => name.toLowerCase() === valueInput.toLowerCase()
    );

    setFilteredProducts(filterProduct);
  };

  return (
    <>
      <Conteiner>
        <Content>
          <img src={logo} alt="logo do restaurante" />

          <div className="conteiner__search">
            <input
              type="text"
              value={valueInput}
              placeholder="Digitar Pesquisa"
              onChange={(event) => setValueInput(event.target.value)}
            />

            <button onClick={() => searchProducts()}>Pesquisar</button>
          </div>
        </Content>
      </Conteiner>
    </>
  );
};
