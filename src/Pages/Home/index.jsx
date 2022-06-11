import { apiFood } from "../../Services/api";

import { Conteiner, Content } from "./style";

import { Header } from "../../components/Header";
import { Showcase } from "../../components/Showcase";

import { useState, useEffect } from "react";

export const Home = () => {
  const [products, setProducts] = useState([]);
  // const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  // const [cartTotal, setCartTotal] = useState(0);

  const handleClick = (productId) => {
    if (currentSale.some((product) => product.id === productId)) {
      return console.log("item já add"); //err
    } else {
      products.filter(({ id, name, img, category, price }) => { //Não sei onde colocar key e não aceitou ()
        const item = {
          id,
          img,
          name,
          category,
          price,
        };

        if (item.id === productId) {
          setCurrentSale([...currentSale, item]);
          //success
        }
      });
    }
  };

  // const showProducts = () => {};

  useEffect(() => {
    apiFood.get("/products").then((response) => setProducts(response.data));
  }, []);

  return (
    <>
      <Conteiner>
        <Header />

        <Content>
          <Showcase
            products={products}
            handleClick={handleClick}
            currentSale={currentSale}
          />
        </Content>
      </Conteiner>
    </>
  );
};
