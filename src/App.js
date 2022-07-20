import AOS from "aos";
import "aos/dist/aos.css";
import Routes from "./router/Routes";
import React, { useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  // this for animation
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color="255, 160, 1"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
      />
      <ScrollToTop />
      <Routes />
    </>
  );
};

export default App;
