import React, {useState, useEffect} from "react";
import TabNav from "./components/TabNav";
import WelcomePage from "./components/WelcomePage";

function App () {
  return (
    <div>
      <WelcomePage />
      <TabNav />
    </div>
  )
  };

export default App;
