import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.2rem;

  & {
    @media screen and (max-width: 500px) {
      gap: 2rem;
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .card {
    box-shadow: 0 2px 10px gray;
    border-radius: 8px;
    padding: 1rem;

    img {
      width: 15rem;
      height: 23vh;
    }
  }

  h2 {
    font-size: 1.3rem;
    font-weight: 600;
    color: #2c2c2c;
  }

  .card-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      width: 9rem;
      height: 2.5rem;
      font-size: 1.2rem;
      margin-top: 1rem;
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
    font-size: 1.4rem;
    font-weight: 600px;
    padding: 1rem;
    svg {
      font-size: 1.6rem;
    }
  }
`;
