import React from "react";
import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import Footer from "./components/Footer";
import FeatureProducts from "./components/FeatureProducts";

const Home = () => {
  const data ={
    name:"Thapa Ecommerce",
  }
  return (
    <>
      <HeroSection myData={data} />
      <FeatureProducts ></FeatureProducts>
      <Services></Services>
      <Trusted></Trusted>

    </>
  );
}



export default Home;
