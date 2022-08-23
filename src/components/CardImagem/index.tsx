import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "./styles";

import { RiShoppingBag3Line } from "react-icons/ri";

import computImage from "../../assets/comput.jpeg";
import { useAuth } from "../../hooks/carts";

interface Props {
  setIsModalVisible: (isModalVisible: boolean) => void;
}

interface ICardImagem {
  id: number;
  name: string;
  description: string;
  photo: string;
  price: number;
}

const CardImagem: React.FC<Props> = (props) => {
  const { setCountCart } = useAuth();
  const [data, setData] = useState<any[]>([]);

  const instance = axios.create({
    baseURL: "https://mks-frontend-challenge-api.herokuapp.com/api/v1",
    timeout: 1000,
    headers: { "X-Custom-Header": "foobar" },
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
        setData(res.data.products);
      });
  }, []);

  return (
    <Container>
      {data.map((item: ICardImagem) => (
        <div className="card">
          <img alt="imagem" src={item?.photo} />

          <div className="card-btn">
            <h2>{item?.name}</h2>
            <p>
              {Intl.NumberFormat("pt-br", {
                style: "currency",
                currency: "BRL",
              }).format(item.price)}
            </p>
          </div>
          <p>{item.description}</p>

          <button
            onClick={() => {
              let object = {
                name: item?.name,
                price: item?.price,
                photo: item?.photo,
              };
              setCountCart((old: any) => [...old, object]);
            }}
          >
            <RiShoppingBag3Line />
            COMPRAR
          </button>
        </div>
      ))}
    </Container>
  );
};

export default CardImagem;
