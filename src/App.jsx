import React from "react";
import Image from "./components/Image";
import Info from "./components/Info";

const App = () => {
  return(
    <div className="card-container">
      <div className="card-sub-container">
        <Image />
        <Info />
      </div>
    </div>
  )
}

export default App;