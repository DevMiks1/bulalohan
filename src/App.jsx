// Components
import React, { useEffect, useState } from "react";
import {Header, Footer,} from "./components/HeaderFooter/compiler/index"
import { AllRoutes } from "./routes/AllRoutes"
import "./index.css"


import { BreakpointGuide } from "./components/BreakPointGuide";
import Scrollbar from "./components/State/ScrollBar";



export const App = () => {

  // Get the saved theme from local storage, or default to "light" if not present
  const savedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(savedTheme);

  useEffect(() => {
    // Update the class on the root HTML element whenever the theme changes
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Save the current theme preference to local storage
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    
    <div className="flex flex-col min-h-screen ">
      <Header />
      {/* <BreakpointGuide /> */}
      <AllRoutes />
      <Scrollbar />
      <div className="mt-auto">
        <Footer />
      </div> 
    </div>
  )
}

