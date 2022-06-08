import { Content } from "./style";
import { Header } from "../../components/Header";
import { apiFood } from "../../Services/api";

import { useState, useEffect } from "react";

export const Home = () => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    apiFood.get("/products").then((response) => setProductsList(response.data));
  }, []);

  return (
    <Content>
      <Header />

      {productsList?.map(({ id, img, name, category, price }) => (
        <div key={id}>
          <img src={img} alt="name" />
          <h2>{name}</h2>
          <p>{category}</p>
          <span>{price}</span>
        </div>
      ))}
    </Content>
  );
};
