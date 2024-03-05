import { useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
