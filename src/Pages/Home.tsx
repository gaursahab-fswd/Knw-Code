import React from "react";
import Navigation from "../Components/Navigation";
import Header from "../Components/Header";
import About from "../Components/About";
import Choose from "../Components/Choose";
import Footer from "../Components/Footer";
import LogIn from "./LogIn";

const Home = () => {
  return (
    <>
      <Navigation />
      <Header />
      <About />
      <Choose />
      <Footer />
      <LogIn/>
    </>
  );
};

export default Home;
