import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;

  .card {
    box-shadow: 0 2px 10px gray;
    border-radius: 8px;
    padding: 10px;

    img {
      width: 217px;
      height: 200px;
    }
  }

  h2 {
    font-size: 20px;
    font-weight: 600;
    color: #2c2c2c;
  }

  .card-btn {
    width: 100%;
    display: flex;
    align-items: center;
    /* border: 2px solid #000; */
    justify-content: space-between;

    p {
      width: 90px;
      height: 30px;
      font-size: 15px;
      margin-top: 10px;
      border-radius: 5px;
      color: #ffffff;
      background: #373737;
      font-weight: 700;
      text-align: center;
    }
  }
  button {
    width: 100%;
    background: #0f52ba;
    color: white;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 600px;
    padding: 13px;
  }
`;
