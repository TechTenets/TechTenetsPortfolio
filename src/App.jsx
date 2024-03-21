import { useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import NewHome from "./Components/Home/NewHome/NewHome";
import Pricing from "./Components/Home/NewHome/Pricing/Pricing";
import ContacUs from "./Components/Home/NewHome/ContactUs/ContacUs";
import { Route, Routes, Navigate } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<NewHome />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact_us" element={<ContacUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
