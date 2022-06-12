import { Conteiner, Content } from "./style.js";
export const CartProducts = ({ id ,name, img, category, removeItem }) => {

  
  return (
    <Conteiner>
      <Content>
        <div className="cartProducts__styleImg">
          <img src={img} alt={name} />
        </div>
        <div className="cartProducts__styleText">
          <h4>{name.charAt(10) ? name.substring(0, 9) + '...' : name}</h4>
          <p>{category}</p>
        </div>
        <button onClick={() => removeItem(id)} className="cartProducts__remove">Remove</button>
      </Content>
    </Conteiner>
  );
};
