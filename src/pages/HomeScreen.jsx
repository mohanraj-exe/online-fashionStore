import React from "react";
import styled from "styled-components";

// components
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import Products from "../components/Products";
import Footer from "../components/Footer";

const Container = styled.div`
  height: 100vh;
`;

const HomeScreen = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Categories />
        <Carousel />
        <Products />
        <Footer />
      </Container>
    </>
  );
};

export default HomeScreen;
