import styled from "styled-components";
import { Modal } from "antd";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  /* border: 22px solid #000; */
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 16px;
  /* border: 1px solid red; */
`;

export const Content = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  /* border: 1px solid red; */
  margin-left: 140px;
  margin-top: 90px;
`;

export const Sider = styled.div`
  background: #eee;
  padding: 20px;
  border: 1px solid #ccc;

  /* input {
    width: 30vh;
    height: 3vw;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: white;
    padding: 3px;
  } */

  .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    width: 300px;
    height: 40px;
    border-radius: 4px;
    padding: 20px;
  }

  select {
    width: 100%;
    height: 40px;
    background: white;
    border-radius: 5px;
    border-radius: 1px solid #ccc;
    margin-bottom: 12px;
  }
`;
export const ModalContainer = styled(Modal)`
  .modal-resumo {
    /* border: 1px solid #ccc; */
    width: 300px;
    height: 260px;
    margin-left: 10px;
    border-radius: 6px;
    background: #efefef;
    padding: 20px;

    .produto {
      display: flex;
      justify-content: space-between;
    }
    .fret {
      display: flex;
      justify-content: space-between;
    }

    .total {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
    }
    hr {
      width: 100%;
      border: 1px solid #ccc;
    }
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
    /* border: 1px solid #000; */
  }
`;

export const Checkout = styled.div`
  width: 150%;
  /* height: 100px; */
  box-shadow: 0 2px 10px gray;
  border-radius: 8px;
  padding: 10px;
  align-items: center;
  /* margin-top: 20px; */
  /* align-items: center; */
  border: 1px solid #000;

  img {
    width: 50px;
    height: 50px;
  }

  .checkout-modal {
    width: 100%;
    display: flex;
    justify-content: space-around;

    /* gap: 200px; */
    /* border: 1px solid #000; */
  }
  .btn {
    background: white;
    color: #00bfff;
    font-size: 25px;
    gap: 10px;
    align-items: center;
    display: flex;
    justify-content: center;

    input {
      height: 20px;
      width: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  }
`;
