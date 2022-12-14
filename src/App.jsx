import React from "react";
import Image from "./components/Image";
import Info from "./components/Info";
import Buttons from "./components/Buttons";
import About from "./components/About";
import Description from "./components/Description";
import Footer from "./components/Footer";

const App = () => {
  return(
    <div className="card-container">      
        <Image />
        <Info />
        <Buttons />
        <Description />
        <Footer />
    </div>
  )
}

export default App;