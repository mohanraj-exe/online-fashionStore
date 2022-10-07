import React from "react";
import styled from "styled-components";
import search from "../images/search-interface-symbol.png";
import { Link } from "react-router-dom";

import ShoppingCart from "./CartComponent";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

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
  width: 70px;
  cursor: pointer;
  font-size: 13px;
  background-color: white;
  border-radius: 1px;
`;

const Logout = styled.button`
  width: 70px;
  cursor: pointer;
  font-size: 13px;
  background-color: #fb641b;
  color: white;
  border-radius: 1px;
  border: none;
`;

const SignUp = styled.button`
  color: #2874f0;
  border: #2874f0;
  width: 70px;
  cursor: pointer;
  font-size: 13px;
  background-color: white;
  border-radius: 1px;
`;

const UserName = styled.span`
  color: white
`;

const Admin = styled.span`
  &:hover {
    cursor: pointer;
  }
  color: white;
`;

const Right = styled.span`
  width: 15%;
`;

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <>
      <Container>
        <Left />

        <MiddleWrapper>
          <Link to="/">
            <Logo>Fashion-Store</Logo>
          </Link>

          <Search>
            <SearchInput placeholder="Search for products,brands and more"></SearchInput>
            <SearchIcon src={search} height="20px" width="20px"></SearchIcon>
          </Search>

          {user && (
            <div>
              <UserName>{user.email}</UserName> &nbsp;
              <Logout onClick={handleClick}>Log out</Logout>
            </div>
          )}

          {!user && (
            <div>
              <Link to="/login">
                <Login>Login</Login>
              </Link>
              &nbsp; &nbsp;
              <Link to="/signup">
                <SignUp>Sign up</SignUp>
              </Link>
            </div>
          )}

          <ShoppingCart />
          <Admin>Admin</Admin>
        </MiddleWrapper>

        <Right />
      </Container>
    </>
  );
};

export default Navbar;
