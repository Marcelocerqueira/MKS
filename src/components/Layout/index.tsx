import React, { useEffect, useState } from "react";
import HeaderMenu from "../Menu";
import CardImagem from "../CardImagem";

import {
  Container,
  Wrapper,
  Content,
  Checkout,
  ModalContainer,
} from "./styles";

import { useAuth } from "../../hooks/carts";

const LayoutCompeent: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [total, setTotal] = useState<any>(0);
  const { countCart } = useAuth();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const totalCheckout = () => {
    let total: any = 0;
    countCart.map((item: any) => {
      total += Number(item.price);
    });
    setTotal(total);
    return total;
  };

  useEffect(() => {
    totalCheckout();
  }, [countCart]);
  return (
    <Container>
      <HeaderMenu setIsModalVisible={setIsModalVisible} />
      <Wrapper>
        <Content>
          <ModalContainer
            title="Carrinho de compras"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            width={590}
            cancelText
            okText
            bodyStyle={{ background: "#0F52BA" }}
          >
            <div
              style={{
                display: "flex",
                height: "70vh",
              }}
            >
              <div>
                {countCart.map((item: any) => {
                  return (
                    <>
                      <Checkout key={item.id}>
                        <div className="checkout-modal">
                          <div>
                            <img src={item.photo} alt="" />
                          </div>
                          <div>{item.name}</div>
                          <div className="btn">
                            - <input type="text" />+
                          </div>
                          <div>
                            {Intl.NumberFormat("pt-br", {
                              style: "currency",
                              currency: "BRL",
                            }).format(item.price)}
                          </div>
                        </div>
                      </Checkout>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="total">
              <h1>Total</h1> R${total}
            </div>
            <button className="btn-compra">Finaliza Compra</button>
          </ModalContainer>
          <div
            style={{
              padding: 10,
            }}
          >
            <CardImagem setIsModalVisible={setIsModalVisible} />
          </div>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default LayoutCompeent;
