import React from "react";
import { name, city } from "../data/data.js";

const colors = {color:'firebrick'}
function Home() {
 
  // update the JSX being returned!
  return (
  <div id="home">
    
      <h1 style={colors}>{name} is a webdeveloper from {city}</h1>
    
  </div>
  );

}

export default Home;
