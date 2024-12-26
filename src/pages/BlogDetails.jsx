import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../axios/axiosInstance";
import parse from "html-react-parser";

const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.bg};
  padding: 20px 0;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  transition: all 0.5s ease;
`;

const Wrapper = styled.div`
  max-width: 600px;
  width: 100%;
  border-radius: 16px;
  height: min-content;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 24px;
    margin: 6px 6px 0px 6px;
  }
`;

const Desc = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
    margin: 6px 6px;
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 12px;
  margin-top: 30px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
`;

const BlogDetails = () => {
  const { id } = useParams();

  const { data: blogData, isLoading } = useQuery({
    queryKey: ["Blog", id],
    queryFn: async () => {
      const res = await axiosInstance(`/blogs/${id}`);
      const data = await res.data;
      return data;
    },
  });

  if (isLoading) return <p>Loading...</p>;
  return (
    <Container>
      {blogData && (
        <Wrapper>
          <Image src={blogData?.data?.blogImage} />
          <Title>{blogData?.data?.title}</Title>
          <Desc>{parse(blogData?.data?.text)}</Desc>
        </Wrapper>
      )}
    </Container>
  );
};

export default BlogDetails;
