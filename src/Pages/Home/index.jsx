import { apiFood } from "../../Services/api";

import { Conteiner, Content } from "./style";

import { Header } from "../../components/Header";
import { Showcase } from "../../components/Showcase";

import { useState, useEffect } from "react";

export const Home = () => {
  const [products, setProducts] = useState([]);
  // const [filteredProducts, setFilteredProducts] = useState([]);
  // const [currentSale, setCurrentSale] = useState([]);
  // const [cartTotal, setCartTotal] = useState(0);

  const handleClick = ({id}) => {

    console.log(id);
  };

  useEffect(() => {
    apiFood.get("/products").then((response) => setProducts(response.data));
  }, []);

  return (
    <>
      <Conteiner>
        <Header />

        <Content>
          <Showcase products={products} handleClick={handleClick} />
        </Content>
      </Conteiner>
    </>
  );
};
