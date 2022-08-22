import React from "react";
import { Container } from "./styles";

import { FiShoppingCart } from "react-icons/fi";
import { useAuth } from "../../hooks/carts";

interface Props {
  setIsModalVisible: (boolean: boolean) => void;
}

const Menu: React.FC<Props> = ({ setIsModalVisible }) => {
  const { setCountCart, countCart } = useAuth();
  // console.log("teste", countCart);
  return (
    <Container>
      <h1>MKS</h1>
      <p>Sistemas</p>

      {countCart?.length > 0 ? (
        <div
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            setIsModalVisible(true);
          }}
        >
          <div className="cart-item1">
            <div className="cart-item">{countCart?.length}</div>
            <FiShoppingCart />
          </div>
        </div>
      ) : (
        <div className="cart-svg">
          <FiShoppingCart />
        </div>
      )}
    </Container>
  );
};

export default Menu;
