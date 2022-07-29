import React, { useState, useEffect } from "react";
import { Route, Link, Routes } from "react-router-dom";
import Stripe from "./pages/stripe";
import Footer from "./components/Footer";
import Nav from "./components/navvi";
import Book from "./pages/book";
import Home from "./pages/home";
import Mission from "./pages/mission";
import Programs from "./pages/programs";
import Testimonials from "./pages/testimonials";
import Tips from "./pages/tips";
import FAQs from "./pages/faqs";
import Register from "./pages/register";
import Curriculum from "./pages/curriculum";
import About from "./pages/about.js";



function App() {
  return (
    <div className="App">
      <Nav/>
      
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/book" element={<Book/>} />
        <Route exact path="/testimonials" element={<Testimonials/>} />
        <Route exact path="/mission" element={<Mission/>} />
        <Route exact path="/programs" element={<Programs/>} />
        <Route exact path="/stripe" element={<Stripe/>} />
        <Route exact path="/tips" element={<Tips/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/curriculum" element={<Curriculum/>} />
        <Route exact path="/faqs" element={<FAQs/>} />
        <Route exact path="/about" element={<About/>} activeClassName="active"/>
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
