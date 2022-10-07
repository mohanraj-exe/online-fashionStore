import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Badge from "react-bootstrap/Badge";

// components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// StoreContext
import { useStoreContext } from "../hooks/useStoreContext";

const Container = styled.div``;

const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
`;

const Left = styled.div`
  border: 2px lightgrey dotted;
`;

const Image = styled.img`
  width: 100%;
  max-width: 500px;
`;
const Middle = styled.div`
  margin-left: -20px;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;
const ProductName = styled.h2`
  font-size: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const ProductBrand = styled.span`
  font-size: 20px;
`;

const ProductPrice = styled.span``;

const ProductDesc = styled.div``;

const Right = styled.div`
  max-width: 120px;
`;

const Button = styled.button`
  color: white;
  border-radius: 10px;
  border: none;
  background-color: #2874f0;
  letter-spacing: 1.2;
  cursor: pointer;
`;

const ProductScreen = () => {
  const params = useParams();
  const { slug } = params;

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/api/products/slug/${slug}`);
      setProduct(result.data);
    };
    fetchData();
  }, [slug]);

  const { dispatch } = useStoreContext();
  const { state } = useStoreContext();
  const { cart } = state;

  const handleAddToCart = async () => {
    const existItem = cart.cartItems.find((x) => x._id === product._id)
    const quantity = existItem ? existItem.quantity + 1 : 1
    const { data } = await axios.get(`/api/products/${product._id}`)

    if(data.countInStock < quantity){
      window.alert('Sorry Product is out of Stock')
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
  };

  return (
    <>
      <Container>
        <Navbar />
        <Wrapper>
          <Left>
            <Image src={product.image} alt={product.name} />
          </Left>

          <Middle>
            <ProductInfo>
              <ProductName>{product.name}</ProductName>

              <ProductBrand>Brand: {product.brand}</ProductBrand>

              <ProductPrice>
                Price: <strong>{product.price}</strong>
              </ProductPrice>

              <ProductDesc>
                <i style={{ fontStyle: "italic", color: "grey" }}>
                  Product Description:{" "}
                </i>
                {product.description}
              </ProductDesc>
            </ProductInfo>
          </Middle>

          <Right>
            <ProductPrice>
              Price: <strong>{product.price}</strong>
            </ProductPrice>
            <br />
            <span>
              Status:{" "}
              {product.countInStock > 0 ? (
                <Badge bg="success">In-Stock</Badge>
              ) : (
                <Badge bg="danger">Out of Stock</Badge>
              )}
            </span>
            <Button onClick={handleAddToCart}>ADD TO CART</Button>
          </Right>
        </Wrapper>

        <Footer />
      </Container>

      {/* {console.log(product)} */}
    </>
  );
};

export default ProductScreen;
