import logo from "../../assets/logo/logo.svg";
import { ThemeButton } from "../../components/Button";
import { Conteiner, Content } from "./styles";

export const Header = () => {
  return (
    <>
      <Conteiner>
        <Content>
          <img src={logo} alt="logo do restaurante" />

          <div className="conteiner__search">
            <input type="text" placeholder="Digitar Pesquisa" />

            <ThemeButton>Pesquisar</ThemeButton>
          </div>
        </Content>
      </Conteiner>
    </>
  );
};
