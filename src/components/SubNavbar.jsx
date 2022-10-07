import React from "react";
import styled from "styled-components";
import search from "../images/search-interface-symbol.png";
// import shoppingCart from "../images/shopping-cart(1).png";
import ShoppingCart from "./CartComponent";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 50px;
  background-color: #2874f0;
  display: flex;
  position: sticky;
  top: 0;
`;

const Left = styled.span`
  width: 15%;
`;

const MiddleWrapper = styled.span`
  width: 70%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.span`
  &:hover {
    cursor: pointer;
  }
  color: white;
  font-size: 22px;
  font-style: italic;
  text-decoration: underline;
`;

const Search = styled.span`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 350px;
  height: 25px;
`;

const SearchIcon = styled.img`
  &:hover {
    cursor: pointer;
  }
  margin-left: 5px;
`;

const Login = styled.button`
  color: #2874f0;
  border: #2874f0;
  width: 100px;
  cursor: pointer;
  font-size: 15px;
  background-color: white;
`;

const SignUp = styled.button`
  color: #2874f0;
  border: #2874f0;
  width: 100px;
  cursor: pointer;
  font-size: 15px;
  background-color: white;
`;

// const Admin = styled.span`
//   &:hover {
//     cursor: pointer;
//   }
//   color: white;
// `;

// const Cart = styled.img`
//   &:hover {
//     cursor: pointer;
//   }
// `;

const Right = styled.span`
  width: 15%;
`;

const SubNavbar = () => {
  return (
    <>
      <Container>
        <Left />

        <MiddleWrapper>
          
          <Link to='/'>
          <Logo>Fashion-Store</Logo>
          </Link>
            
          <Search>
            <SearchInput placeholder="Search for products,brands and more"></SearchInput>
            <SearchIcon src={search} height="20px" width="20px"></SearchIcon>
          </Search>

          <Link to="/login">
          <Login>Login</Login>
          </Link>

          <Link to="/signup">
          <SignUp>Sign up</SignUp>
          </Link>

          <ShoppingCart />
          {/* <Admin>Admin</Admin> */}
        </MiddleWrapper>

        <Right />
      </Container>
    </>
  );
};

export default SubNavbar;
