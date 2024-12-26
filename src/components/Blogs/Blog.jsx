import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../axios/axiosInstance";
import BlogCard from "../Cards/BlogCard";
import Loader from "../Loader/Loader";

const Container = styled.div`
  background: linear-gradient(
    343.07deg,
    rgba(132, 59, 206, 0.06) 5.71%,
    rgba(132, 59, 206, 0) 64.83%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 10px 0px 100px 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 36px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
  // display: grid;
  // grid-template-columns: repeat(3, 1fr);
  // grid-gap: 32px;
  // grid-auto-rows: minmax(100px, auto);
  // @media (max-width: 960px) {
  //     grid-template-columns: repeat(2, 1fr);
  // }
  // @media (max-width: 640px) {
  //     grid-template-columns: repeat(1, 1fr);
  // }
`;

const Blogs = () => {
  const { data: blogs, isLoading } = useQuery({
    queryKey: ["Blogs"],
    queryFn: async () => {
      const res = await axiosInstance("/blogs");
      const data = await res.data;
      return data;
    },
  });

  useEffect(() => {
    AOS.init({ duration: "1000", delay: "500" });
  }, []);

  if (isLoading) return <Loader/>;
  return (
    <Container data-aos="fade-up" data-aos-once="true" id="blogs">
      <Wrapper>
        <Title>Blogs</Title>
        <CardContainer>
          {blogs?.data?.map((blog, i) => (
            <BlogCard
              key={i}
              blog={blog}
            />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};


export default Blogs;
