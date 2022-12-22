import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Alter = styled.div`
  background-color: #ff32b1;
  color: white;
  width: 100%;
  font-size: 20px;
`;

function Detail(props) {
  useEffect(() => {
    setTimeout(() => {}, 2000);
  });

  let { id } = useParams();
  const product = props.products;

  //리액트 라우터 3 : URL 파라미터로 상세페이지 100개 만들기 참고
  let checkProduct = product.find((item) => {
    return item.id == id;
  });

  return (
    <div className="container">
      <Alter>2초이내 구매시 할인</Alter>
      <div className="row">
        <div className="col-md-6">
          <img
            alt="product"
            src={
              "https://codingapple1.github.io/shop/shoes" +
              (checkProduct.id + 1) +
              ".jpg"
            }
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{checkProduct.title}</h4>
          <p>{checkProduct.content}</p>
          <p>{checkProduct.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
