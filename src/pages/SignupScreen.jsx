import React, { useState } from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar";
import { useSignup } from "../hooks/useSignup";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  margin: 5px;
  padding: 15px 20px;
  background-color: #2874f0;
  color: white;
  cursor: pointer;
`;

const Error = styled.div`
  padding: 10px;
  background: #ffefef;
  border: 1px solid #e7195a;
  color: #e7195a;
  border-radius: 4px;
  margin: 20px 0;
`;

const PasswordNotMatchError = styled.div`
  padding: 10px;
  background: #ffefef;
  border: 1px solid #e7195a;
  color: #e7195a;
  border-radius: 4px;
  margin: 20px 0;
`;

// const SignupSuccess = styled.div`
//   padding: 10px;
//   background: #ffefef;
//   border: 1px solid #308d46;
//   color: white;
//   border-radius: 4px;
//   margin: 20px 0;
// `;

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const {signup, error, isLoading} = useSignup()
  const [pwdNotMatch, setPwdMatch] = useState(false)

  const handleSubmit = async (e) =>{
    e.preventDefault();
    
    if(password !== confirmPassword){
      setPwdMatch(!pwdNotMatch)
      return
    }
    await signup(name, email, password)
  }

  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form onSubmit={handleSubmit}>
            <Input placeholder="name" 
            type="text"
            value={name} 
            onChange={(e) => setName(e.target.value)}/>

            <Input placeholder="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />

            <Input placeholder="password" 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>

            <Input placeholder="confirm password" 
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <Button disabled={isLoading}>SIGN UP</Button>
            {pwdNotMatch && <PasswordNotMatchError>Password is not matching</PasswordNotMatchError>}
            {error && <Error>{error}</Error>}
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Signup;
