import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const Container = styled.div`

`;

const Title = styled.div`
  color:#2874f0;

`;

const TitleName = styled.h2`
  margin: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Product = styled.div`
  border: 1px #404040 solid;
  margin: 1rem;
`;

const Image = styled.img`
  width: 100%;
  max-width: 300px;
  cursor: pointer;
`;

const ProductInfo = styled.div`
  padding: 1rem;
`;

const ProductName = styled.h3`
  
`;

const Price = styled.p`

`;


const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() =>{
    const fetchData = async () =>{
      const result = await axios.get('/api/products')
      setProducts(result.data)
    }
    fetchData();
  },[])


  return (
    <>
      <Container>
        <Title>
          <TitleName>Featured &nbsp;Products</TitleName>  
        </Title>
        <Wrapper>
          {products.map((product) => (
            <Product key={product.sku}>
    
              {/* <Image src={product.image} /> */}
              <Link to={`/product/${product.slug}`}>
                <Image src={product.image} />
              </Link>

              <ProductInfo>
                <ProductName>{product.name}</ProductName>
                <Price>{product.price}</Price>
              </ProductInfo>

            </Product>
          ))}
        </Wrapper>

      </Container>
    </>
  );
};

export default Products;


