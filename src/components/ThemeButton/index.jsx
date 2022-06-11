import { Conteiner } from "./style";

export const ThemeButton = ({ children, handleClick, id}) => {
  return <Conteiner onClick={() => handleClick(id)}>{children}</Conteiner>;
};
