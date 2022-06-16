import React from "react";
import BuildingBlocks from "./components/building-blocks"
import "./css/App.css"
import "./css/building-blocks.css";

const App = () => {
  return (
    <div className="App" >
      <div className="cloudBlur"/>
      <BuildingBlocks />
      
    </div>
  );
};

export default App;
