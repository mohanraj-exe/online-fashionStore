import React from "react";
import styled from "styled-components";
import MensFashion from "../images/Mens-Fashion.jpg";
import WomensFashion from "../images/Womens-Fashion.jpg";
import KidsFashion from "../images/kids-fashion.jpg";
import Accessories from "../images/fashion-accessories.jpeg";
// import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 190px;
  display: flex;
  align-items: center;
  background-color: white;
`;

const Left = styled.span`
  width: 12%;
`;

const LeftContainer = styled.span`
  padding-left: 10px;
  color: #2874f0;
  font-size: 22px;
  font-weight: bold;
`;
const MiddleWrapper = styled.span`
  width: 74%;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
`;

const Fashion = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FashionName = styled.span`
    &:hover {
    cursor: pointer;
  }
`;

const FashionImage = styled.img`
    &:hover {
    cursor: pointer;
  }
`;

const Right = styled.span`
  width: 12%;
`;

const Categories = () => {
  return (
    <>
      <Container>
        <Left>
          <LeftContainer>Shop&nbsp;by&nbsp;Category</LeftContainer>
        </Left>
        <MiddleWrapper>
          <Fashion>

            <FashionImage src={MensFashion} height="150px" width="110px"/><br />
            {/* <Link to='/mensfashion'></Link> */}
            <FashionName>Men's Fashion</FashionName>
            {/* <Link to='/mensfashion'></Link> */}

          </Fashion>
          <Fashion>
            <FashionImage src={WomensFashion} height="150px" width="110px"/><br />
            <FashionName>Women's Fashion</FashionName>
          </Fashion>
          <Fashion>
            <FashionImage src={KidsFashion} height="150px" width="110px"/><br />
            <FashionName>Kids Fashion</FashionName>
          </Fashion>
          <Fashion>
            <FashionImage src={Accessories} height="150px" width="180px"/><br />
            <FashionName>Accessories</FashionName>
          </Fashion>
        </MiddleWrapper>
        <Right />
      </Container>
    </>
  );
};

export default Categories;
