import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import About from "../About/About";
import Contact from "../Contact/Contact";
import HomeHeader from "../HomeHeader/HomeHeader";
import RepairGuide from "../RepairGuide/RepairGuide";
import CustomerReview from "../CustomerReview/CustomerReview";
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
      <CustomerReview></CustomerReview>
      <RepairGuide></RepairGuide>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
