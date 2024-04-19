import { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import GlobalStyle from "./GlobalStyle";
import { Outlet } from "react-router";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleVisible = () => {
    if (window.pageYOffset > 450) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <>
      <Navbar />
      <Outlet />
      {isVisible && <ScrollToTop />}
      <GlobalStyle />
    </>
  );
};

export default App;
