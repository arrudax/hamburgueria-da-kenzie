import { Conteiner } from "./style";

export const ThemeButton = ({ children, handleClick, id, removeAllItems }) => {


  return <Conteiner onClick={() => handleClick(id)}>{children}</Conteiner>;
};
