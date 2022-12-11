import React from "react";
import Image from "./components/Image";
import Info from "./components/Info";
import Buttons from "./components/Buttons";

const App = () => {
  return(
    <div className="card-container">      
        <Image />
        <Info />
        <Buttons />    
    </div>
  )
}

export default App;