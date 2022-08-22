import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  margin-top: 3px;
  background: rgba(15, 82, 186, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    width: 100%;
    color: #ffffff;
    margin-left: -4px;
    margin-top: 9px;
  }

  .cart-item {
    width: 16px;
    height: 17px;
    /* display: flex; */
    /* top: 4px; */
    /* align-items: center; */
    /* justify-content: center; */
    border-radius: 50%;
    /* position: relative; */
    /* padding: 1px; */
    background: yellow;
    /* font-size: 10px; */
    /* position: absolute; */
    /* top: 4px; */
    /* z-index: 10px; */
    /* right: 55px; */
  }
  .cart-svg {
    width: 90px;
    height: 50px;
    display: flex;
    border: 1px solid red;
  }
  svg {
    font-size: 29px;
    color: #000;
    margin-right: 190px;
    border: 1px solid red;
  }

  h1 {
    padding: 7px;
    margin-left: 52px;
    font-size: 25px;
    color: white;
  }
`;
