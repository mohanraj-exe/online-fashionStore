import styled from "styled-components";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #2874f0;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Error = styled.div`
  padding: 10px;
  background: #ffefef;
  border: 1px solid #e7195a;
  color: #e7195a;
  border-radius: 4px;
  margin: 20px 0;
`;

const SignUp = styled.span`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) =>{
    e.preventDefault();

    await login(email, password)
  }
  return (
    <>
    <Navbar />
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={handleSubmit}>
          <Input placeholder="Email. Eg: johndoe@gmail.com"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />

          <Input placeholder="Enter your password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />

          <Button disabled={isLoading}>LOGIN</Button>
          {error && <Error>{error}</Error>}
          {/* <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link> */}
        </Form>
        <Link to="/signup">
            <SignUp>Create New Account</SignUp>
          </Link>
      </Wrapper>
    </Container>
    </>
  );
};

export default Login;
