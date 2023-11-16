import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./pages/home/Home";
import ThankYou from "./pages/thankYou/ThankYou";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/submit' element={<ThankYou />} />
    </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
