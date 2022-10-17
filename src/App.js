import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Delivery from "./components/Delivery/Delivery";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Delivery" element={<Delivery />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
