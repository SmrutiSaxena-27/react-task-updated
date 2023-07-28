import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import ProductShowCase from "./Components/ProductShowCase/ProductShowCase";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<ProductShowCase />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
