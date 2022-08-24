import styled from "styled-components";
import { Modal } from "antd";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 1.6rem;
  /* border: 2px solid red; */
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 80%;
  height: 100%;

  /* display: flex; */
  align-items: center;
  /* margin-left: 140px; */
  /* margin-top: 90px; */

  /* margin-left: 7.4rem; */
  margin-top: 9rem;
  /* border: 2px solid red; */
`;

export const ModalContainer = styled(Modal)`
  margin-left: 930px;
  position: fixed;
  margin-top: -9.7rem;
  /* border: 2px solid red; */

  .modal-resumo {
    width: 300px;
    margin-left: 10px;
    border-radius: 6px;
    padding: 20px;

    button {
      width: 100%;
      background: #00bfff;
      color: white;
      border-radius: 5px;
      font-size: 20px;
      display: flex;
      margin-top: 9px;
      justify-content: center;
    }
  }

  .chekout-title {
    display: flex;
    justify-content: space-around;
    gap: 100px;
  }
  .total {
    display: flex;
    justify-content: space-between;
    margin-top: 1.1rem;
    color: white;
    h1 {
      color: white;
    }
  }
  .btn-compra {
    width: 100%;
    background: #000000;
    color: white;
    border-radius: 5px;
    font-size: 20px;
    display: flex;
    justify-content: center;
  }
`;

export const Checkout = styled.div`
  width: 150%;
  box-shadow: 0 2px 10px gray;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 20px;
  background: #ffffff;
  margin-left: 2rem;

  img {
    width: 5rem;
    height: 5rem;
  }

  .checkout-modal {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #ffffff;
  }
  .btn {
    background: white;
    color: #00bfff;
    font-size: 2rem;
    gap: 0.01rem;
    align-items: center;
    display: flex;
    justify-content: center;

    input {
      height: 2rem;
      width: 1.8rem;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  }
`;
