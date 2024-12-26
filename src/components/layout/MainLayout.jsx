import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useState } from "react";
import { darkTheme, lightTheme } from "../../utils/Themes";
import { ThemeProvider } from "styled-components";

const MainLayout = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };
  return (
    <ThemeProvider theme={theme}>
      <Navbar theme={theme} onToggle={toggleTheme} />
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </ThemeProvider>
  );
};

export default MainLayout;
