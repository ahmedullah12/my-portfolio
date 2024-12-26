import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../axios/axiosInstance";
import { format } from "date-fns";
import parse from "html-react-parser";
import Loader from "../components/Loader/Loader";

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

const Date = styled.div`
  font-size: 16px;
  margin: 2px 6px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
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

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0px;
  @media only screen and (max-width: 600px) {
    margin: 4px 0px;
  }
`;

const Tag = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  margin: 4px;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary + 20};
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 12px 0px;
  gap: 12px;
`;

const Button = styled.a`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.btntextcolor};
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.button};
  ${({ dull, theme }) =>
    dull &&
    `
        background-color: ${theme.bgLight};
        color: ${theme.text_secondary};
        &:hover {
            background-color: ${({ theme }) => theme.bg + 99};
        }
    `}
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s ease;
  &:hover {
    background-color: ${({ theme }) => theme.primary + 99};
  }
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const ProjectDetails = () => {
  const { id } = useParams();

  const { data: projectData, isLoading } = useQuery({
    queryKey: ["ProjectsData", id],
    queryFn: async () => {
      const res = await axiosInstance(`/projects/${id}`);
      const data = await res.data;
      return data;
    },
  });

  if (isLoading) return <Loader/>;
  return (
    <Container>
      {
        projectData && (
          <Wrapper>
        <Image src={projectData?.data?.image} />
        <Title>{projectData?.data?.title}</Title>
        <Date>{format(projectData?.data?.date, "PPP")}</Date>
        <Tags>
          {projectData?.data?.tags.map((tag, i) => (
            <Tag key={i}>{tag}</Tag>
          ))}
        </Tags>
        <Desc>{parse(projectData?.data?.description)}</Desc>
        <ButtonGroup>
          <Button dull href={projectData?.data?.github} target="new">
            View Code
          </Button>
          <Button href={projectData?.data?.live} target="new">
            View Live App
          </Button>
        </ButtonGroup>
      </Wrapper>
        )
      }
    </Container>
  );
};

export default ProjectDetails;
