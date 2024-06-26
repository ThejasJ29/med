import './App.css'
import React from 'react';
import Navbar1 from './Components/Navbar1/Navbar1';
import Navbar2 from './Components/Navbar2/Navbar2';
import Navbar3 from './Components/Navbar3/Navbar3';
import Carousel from './Components/Carousel/Carousel';
import Buttons from './Components/Buttons/Buttons';
import Categories from './Components/Categories/Categories';
import Topoffers from './Components/Topoffers/Topoffers'
import Onetouch from './Components/Posters/Onetouch';
import Bestsellers from './Components/Topoffers/Bestsellers';
import Posters from './Components/Posters/Posters';
import Why from './Components/Why/Why';
import Healthylife from './Components/Healthylife/Healthylife';
import Dowload from './Components/Download/Dowload';
import Blank from './Components/Blank';
import Subscribe from './Components/Subscribe/Subscribe';
import Footercatagories from './Components/Footercategories/Footercatagories';
import Footer1 from './Components/Footer1/Footer1';
import Footer2 from './Components/Footer2/Footer2';




const App = () => {
  return (
    <>
      <div className="box">
        <Navbar1 />
        <Navbar2 />
        <Navbar3 />
        <div className="bg-all">
          <Carousel />
          <Buttons />
          <Categories />
          <Topoffers />
          <Onetouch />
          <Bestsellers />
          <Posters />
          <Why />
          <Healthylife />
          <Blank />
        </div>
        <div className="bg-white">
          <Dowload/>
          <Subscribe/>
          <Footercatagories/>
        </div>
        <div className="bg-all">
          <Footer1/>
        <Footer2/>
        </div>
      </div>
    </>
  );
}

export default App;
