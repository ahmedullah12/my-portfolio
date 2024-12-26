import styled, {keyframes} from "styled-components"
import { Bio } from "../../data/constants";
import bannerImg from '../../assets/bannerImg.jpg';
import { FaDownload } from "react-icons/fa";
import resume from "../../assets/AhmedUllah-Resume.pdf"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const BannerContainer = styled.div`
    background-color: ${({theme}) => theme.card_light};
    display: flex;
    justify-content: center;
    position: relative;
    padding: 80px 30px;
    transition: background-color 0.3s ease-in-out;
    @media screen and (max-width: 960px){
        padding: 66px 16px;
    };
    @media screen and (max-width: 640px){
        padding: 32px 16px;
    }
    z-index: 1;
`;


const BannerInnerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1100px;

    @media screen and (max-width: 960px){
        flex-direction: column;
    };
`;

const BannerLeftContainer = styled.div`
    width: 100%;
    order: 1;
    @media screen and (max-width: 960px){
        order: 2;
        margin-bottom: 32px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    @media screen and (max-width: 640px){
        order: 2;
        margin-bottom: 32px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`;
const BannerRightContainer = styled.div`
    width: 100%;
    order: 2;
    display: flex;
    justify-content: end;
    gap: 12px;

    @media screen and (max-width: 960px){
        order: 1;
        justify-content: center;
        align-items: center;
        margin-bottom: 80px;
    }
    @media screen and (max-width: 640px){
        order: 1;
        margin-bottom: 30px;
        justify-content: center;
    }
`;

const Title = styled.div`
    font-size: 50px;
    font-weight: 700;
    color: ${({theme}) => theme.text_primary};
    line-height: 68px;

    @media screen and (max-width: 960px){
        text-align: center;
    }

    @media screen and (max-width: 640px){
        font-size: 32px;
        line-height: 48px;
        margin-bottom: 8px;
    }
`;

const WorkTittle = styled.div`
    font-size: 26px;
    font-weight: 600;
    color: ${({theme}) => theme.text_primary};
    display: flex;
    gap: 12px;
    line-height: 68px;

    @media screen and (max-width: 960px){
        text-align: center;
    }

    @media screen and (max-width: 640px){
        font-size: 18px;
        line-height: 48px;
        margin-bottom: 16px;
    }
`;



const Subtittle = styled.div`
    font-size: 18px;
    color: ${({theme}) => theme.text_primary + 95};
    line-height: 32px;
    margin-bottom: 42px;

    @media screen and (max-width: 960px){
        text-align: center;
    }

    @media screen and (max-width: 640px){
        font-size: 14px;
        line-height: 32px;
    }
`;

const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    background-color: ${({theme}) => theme.button};
    text-align: center;
    padding: 15px 30px;
    color:${({ theme }) => theme.btntextcolor};
    border-radius: 20px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    
    &:hover {
        transform: scale(1.05);
        transition: all 0.4s ease-in-out;
        filter: brightness(1);
    }

`;



const profile__animate = keyframes`
    0% {
        // border-radius: 60% 40% 30% 70%/60% 30% 40% 70%; 
        border-radius: 30% 60% 70% 40%/50% 60% 30% 60%; 
    }
    50% {
         
        border-radius: 60% 50% 30% 70%/60% 50% 40% 70%;
    }
    100% {
        // border-radius: 60% 40% 30% 70%/60% 30% 40% 70%;
        border-radius: 30% 60% 70% 40%/50% 60% 30% 60%; 
    }
`;



const BannerImg = styled.div`
    background-image: url(${bannerImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 350px;
    width: 350px;
    margin-right: 40px;
    border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
    box-shadow: inset 0 0 0 7px rgb(255 255 255 / 30%);
    animation: ${profile__animate} 8s ease-in-out infinite 1s;
    @media screen and (max-width: 640px){
        width: 300px;
        height: 300px;
        margin: 0 auto;
    }
`;


const Banner = () => {
    useEffect(() => {
        AOS.init({duration: "500", delay: "500"})
    },[])
    return (
        <div id="about">
            <BannerContainer>
                <BannerInnerContainer>
                    <BannerLeftContainer data-aos="fade-right">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <WorkTittle>
                            Front End Web Developer
                        </WorkTittle>
                        <Subtittle>
                            {Bio.description}
                        </Subtittle>
                        <ResumeButton download='' href={resume}>Resume <FaDownload /></ResumeButton>
                    </BannerLeftContainer>
                    <BannerRightContainer>
                            <BannerImg></BannerImg>
                    </BannerRightContainer>
                </BannerInnerContainer>
            </BannerContainer>
        </div>
    );
};

export default Banner;