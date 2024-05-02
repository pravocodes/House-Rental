import React from "react";
import Navbar from "../component/Navbar";
import Slide from "../component/Slide";
import Categories from "../component/Categories";
import Listings from "../component/Listings";
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Slide />
      <Categories />
      <Listings />
    </div>
  );
};

export default HomePage;
