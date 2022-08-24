import React from "react";
import { Container } from "./styles";

import { FiShoppingCart } from "react-icons/fi";
import { useAuth } from "../../hooks/carts";

interface Props {
  setIsModalVisible: (boolean: boolean) => void;
}

const Menu: React.FC<Props> = ({ setIsModalVisible }) => {
  const { setCountCart, countCart } = useAuth();
  return (
    <Container>
      <h1>MKS</h1>
      <p>Sistemas</p>
      <div
        style={{
          cursor: "pointer",
          display: "flex",
          padding: "1rem",
          borderRadius: "5px",
          position: "relative",
          left: "-9rem",
          alignItems: "center",
          background: "#fff",
          gap: 10,
        }}
        onClick={() => {
          setIsModalVisible(true);
        }}
      >
        <FiShoppingCart />
        <div className="cart-item">{countCart?.length}</div>
      </div>
    </Container>
  );
};

export default Menu;
