import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import { darkTheme, lightTheme } from "./utils/Themes";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import { useState } from "react";
import Contact from "./components/Contact/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  transition: background-color 0.3s ease-in-out;
`;

function App() {
  const [theme, setTheme] = useState(lightTheme);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar theme={theme} onToggle={toggleTheme}></Navbar>
        <Body>
          <Toaster />
          <Banner></Banner>
          <Skills></Skills>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Education></Education>
          <Contact></Contact>
          <Footer></Footer>
          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
