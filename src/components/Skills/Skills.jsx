import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import axiosInstance from "../../axios/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import transformSkillsData from "../../utils/transformSkillData";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
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

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 500px));
  gap: 30px;
  margin-top: 30px;
  justify-items: center;
  
  & > div:last-child {
    grid-column: 1 / -1;
    justify-self: center;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: minmax(0, 500px);
    
    & > div:last-child {
      grid-column: 1;
    }
  }
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 2px solid ${({ theme }) => theme.primary};
  box-shadow: rgba(23, 92, 230, 0.1) 0px 2px 12px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Skills = () => {
  const { data: skillsData, isLoading } = useQuery({
    queryKey: ["SkillsData"],
    queryFn: async () => {
      const res = await axiosInstance("/skills");
      const data = await res.data;
      return data;
    },
  });

  const formattedSkillsData = transformSkillsData(skillsData);
  console.log(formattedSkillsData);

  useEffect(() => {
    AOS.init({ duration: "1000", delay: "500" });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <Container data-aos="fade-up" data-aos-once="true" id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>These are the Skills which I have been working for more than 1 year.</Desc>
        <div>
          <SkillsContainer>
            {formattedSkillsData?.map((skill, i) => (
              <Skill key={i}>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillList>
                  {skill.skills.map((item, i) => (
                    <SkillItem key={i}>
                      <SkillImage src={item.image} />
                      {item.name}
                    </SkillItem>
                  ))}
                </SkillList>
              </Skill>
            ))}
          </SkillsContainer>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Skills;