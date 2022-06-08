import axios from "axios";

export const apiFood = axios.create({
  baseURL: "https://hamburgueria-kenzie-json-serve.herokuapp.com",
});
