import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import About from "../About/About";
import Contact from "../Contact/Contact";
import HomeHeader from "../HomeHeader/HomeHeader";
import RepairGuide from "../RepairGuide/RepairGuide";
import Review from "../Review/Review";
import Services from "../Services/Services";
import Team from "../Team/Team";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HomeHeader></HomeHeader>
      <Services></Services>
      <About></About>
      <Team></Team>
      <Review></Review>
      <RepairGuide></RepairGuide>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
