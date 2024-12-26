import styled from "styled-components";
import Banner from "../components/Banner/Banner";
import Contact from "../components/Contact/Contact";
import Education from "../components/Education/Education";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import Blogs from "../components/Blogs/Blog";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  transition: background-color 0.3s ease-in-out;
`;

const Home = () => {
  return (
    <Body>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
      <Education></Education>
      <Blogs></Blogs>
      <Contact></Contact>
    </Body>
  );
};

export default Home;
