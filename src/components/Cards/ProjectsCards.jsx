import styled from "styled-components";
import PropTypes from "prop-types";
import { format } from "date-fns";
import { ArrowForward } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: "";
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text_black};
  font-size: 14px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.8s ease-in-out;
`;
const Card = styled.div`
  width: 330px;
  height: 420px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 20px 4px rgba(0, 0, 0, 0.6);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({ theme }) => theme.card};
`;

const ProjectCards = ({ project }) => {
  return (
    <Card>
      <Image src={project.image} />

      <Details>
        <Title>{project.title}</Title>
        <Date>{format(project.date, "PPP")}</Date>
        <Description>{project.description}</Description>
      </Details>
      <Members>
        {project.member?.map((member, i) => (
          <Avatar key={i} src={member.img} />
        ))}
      </Members>
      <Link style={{ textDecoration: "none" }} to={`/project/${project._id}`}>
        <Button>
          See Details <ArrowForward />
        </Button>
      </Link>
    </Card>
  );
};

ProjectCards.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectCards;
