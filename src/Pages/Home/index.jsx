import { apiFood } from "../../Services/api";

import { Conteiner, Content } from "./style";

import { Header } from "../../components/Header";
import { Showcase } from "../../components/Showcase";

import { useState, useEffect } from "react";

import { toast } from "react-toastify";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    apiFood
      .get("/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleClick = (productId) => {
    if (
      currentSale.some((product) => {
        if (product.id === productId) {
          return toast.error(`Produto ${product.name} já está no carrinho`);
        }
      })
    ) {
    } else {
      products.filter(({ id, name, img, category, price }) => {
        //Não sei onde colocar key e não aceitou (), para o error da arrowFuc
        const item = {
          id,
          img,
          name,
          category,
          price,
        };

        if (item.id === productId) {
          setCurrentSale([...currentSale, item]);
          toast.success(`1 ${item.name} foi adicionado com sucesso`);
        }
      });
    }
  };

  const removeItem = (productId) => {
    const productRemove = currentSale.filter(
      (product) => product.id !== productId
    );
    toast.warning(`Item removido do carrinho`);
    setCurrentSale(productRemove);
  };

  const removeAllItems = () => {
    const productRemove = currentSale.filter((product) =>
      console.log(product)
    );
    toast.warning(`Todos os item foram removidos do carrinho`);

    setCurrentSale(productRemove);
  };

  return (
    <>
      <Conteiner>
        <Header
          setFilteredProducts={setFilteredProducts}
          
          products={products}
        />
        <Content>
          <Showcase
            products={products}
            handleClick={handleClick}
            currentSale={currentSale}
            cartTotal={cartTotal}
            setCartTotal={setCartTotal}
            removeItem={removeItem}
            removeAllItems={removeAllItems}
            filteredProducts={filteredProducts}
          />
        </Content>
      </Conteiner>
    </>
  );
};
