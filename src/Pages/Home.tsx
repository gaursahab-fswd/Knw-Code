import React from "react";
import Navigation from "../Components/Navigation";
import Header from "../Components/Header";
import About from "../Components/About";
import Choose from "../Components/Choose";

const Home = () => {
  return (
    <>
      <Navigation />
      <Header />
      <About/>
      <Choose/>
    </>
  );
};

export default Home;
