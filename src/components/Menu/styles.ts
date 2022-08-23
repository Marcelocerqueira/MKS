import styled from "styled-components";

export const Container = styled.div`
  width: 1500px;
  height: 101px;
  /* margin-top: 3px; */
  background: rgba(15, 82, 186, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid red; */

  p {
    width: 100%;
    color: #ffffff;
    margin-left: -4px;
    margin-top: 9px;
  }

  .card-icon {
    width: 50px;
    /* left: -50px; */
    height: 50px;
    display: flex;
    background: #ffffff;
    border: 1px solid red;

    .cart-item {
      display: flex;
      width: 16px;
      height: 17px;
    }
  }
  svg {
    display: flex;
    font-size: 35px;
    color: #000;
    border: 1px solid red;
  }

  h1 {
    padding: 7px;
    margin-left: 52px;
    font-size: 25px;
    color: white;
  }
`;
