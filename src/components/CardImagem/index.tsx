import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "./styles";

import computImage from "../../assets/comput.jpeg";
import { useAuth } from "../../hooks/carts";

interface Props {
  setIsModalVisible: any;
}

const CardImagem: React.FC<Props> = (props) => {
  const { setCountCart } = useAuth();
  const [newObject, setWewObject] = useState<any>([]);
  const [data, setData] = useState<any>();

  const instance = axios.create({
    baseURL: "https://mks-frontend-challenge-api.herokuapp.com/api/v1",
    // timeout: 1000,
    // headers: { "X-Custom-Header": "foobar" },
  });
  useEffect(() => {
    instance
      .get("/products", {
        params: {
          page: 1,
          rows: 50,
          sortBy: "name",
          orderBy: "DESC",
        },
      })
      .then((res) => {
        setData(res.data.data.products);
        console.log(res);
      });
  }, []);

  return (
    <Container>
      {data.map((item: any) => (
        <div className="card">
          <img alt="imagem" src={item?.photo} />
          <h2>{item?.name}</h2>
          <div className="card-btn">
            <p>R${item?.price}</p>
            <button
              onClick={() => {
                let object = {
                  title: item?.name,
                  money: item?.price,
                  url: item?.photo,
                };
                setCountCart((old: any) => [...old, object]);
              }}
            >
              +
            </button>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default CardImagem;
