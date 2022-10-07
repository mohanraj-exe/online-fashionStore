import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Screens
import HomeScreen from "./pages/HomeScreen";
import Login from "./pages/LoginScreen";
import Signup from "./pages/SignupScreen";
import ProductScreen from "./pages/ProductScreen";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:slug" element={<ProductScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
