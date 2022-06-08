import { apiFood } from "../../Services/api";

import { Content } from "./style";

import { Header } from "../../components/Header";
import { Showcase } from "../../components/Showcase";

import { useState, useEffect } from "react";

export const Home = () => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    apiFood.get("/products").then((response) => setProductsList(response.data));
  }, []);

  return (
    <Content>
      <Header />

      <Showcase productsList={productsList} />
    </Content>
  );
};
