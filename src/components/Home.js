import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  return <div id="home">
    <h1 styles={{ color: "firebrick" }}>
      {name} is a web Developer {city}
    </h1>
  </div>;
}

export default Home;
