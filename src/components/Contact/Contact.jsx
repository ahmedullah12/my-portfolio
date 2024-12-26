import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { IoIosMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import toast from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ContactSection = styled.div`
    background-color: ${({theme}) => theme.card_light};
    margin-bottom: 30px;
`;

const ContactHead = styled.div`
    padding-top: 30px;
    text-align: center;
`;

const ContactTitle = styled.p`
font-size: 36px;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
      margin-bottom: 25px;
  }

`;

const ContactText = styled.p`
    font-size: 18px;
    padding-bottom: 20px;
    display: block;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 960px) {
        display: none;
    }
`;

const ContactContainer = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 800px;
    gap: 20px;
    margin: 0 auto;
    @media screen and (max-width: 960px){
        flex-direction: column;
    };
`;

const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;

`;
const ContactFormDiv = styled.div`

`;

const ContactInfoHead = styled.p`
    font-size: 20px;
    color: ${({theme}) => theme.text_secondary};
    margin-bottom: 15px;
    text-align: center;

`;

const InfoCard = styled.div`
    background-color: ${({theme}) => theme.card};
    padding: 30px 50px;
    text-align: center;
    margin-bottom: 1rem;
    box-shadow: 12px 12px 12px ${({theme}) => theme.shadowColor};
    border-radius: 6px;
    cursor: pointer;

    @media screen and (max-width: 960px){
        width: 60%;
        margin: 20px auto;
        padding: 50px 50px;
    }

    @media screen and (max-width: 640px){
        width: 90%;
        margin: 10px auto;
    }
`;

const InfoIcon = styled.a`
    font-size: 30px;
    color: ${({theme}) => theme.text_primary}
`

const InfoText = styled.p`
    font-size: 16px;
    color: ${({theme}) => theme.text_primary};
`;

const FormHead = styled.p`
    text-align: center;
    font-size: 22px;
    color: ${({theme}) => theme.text_secondary};
    margin-bottom: 15px;
`;

const ContactForm = styled.form`
    
    display: flex;
    flex-direction: column;

`;

const FormControl = styled.div`
    position: relative;
    height: 4rem;
    width: 320px;
    margin: 0 auto 30px;
`;
const FormTextareaControl = styled.div`
    position: relative;
    height: 11rem;
    width: 320px;
    margin: 0 auto 30px;
`;



const FormInput = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid ${({theme}) => theme.text_secondary};
    background: none;
    color: ${({theme}) => theme.text_secondary};
    outline: none;
    border-radius: 0.75rem;
    padding: 1rem;
    z-index: 1;

    &:focus, &:active {
        background-color: transparent; /* Override styles for focus and active states */
    }

    &:-webkit-autofill {
        -webkit-text-fill-color: ${({theme}) => theme.text_secondary};
        transition: background-color 5000s ease-in-out 0s; /* Ensure the styles apply on autofill */
    }
`;

const FormLabel = styled.label`
    position: absolute;
    top: -25%;
    left: 1.25rem;
    font-size: 16px;
    padding: 0.25rem;
    color: ${({theme}) => theme.text_secondary};
    background-color: ${({theme}) => theme.bg};
    z-index: 10;
`;

const FormTextareaLabel = styled.label`
    position: absolute;
    top: -9%;
    left: 1.25rem;
    font-size: 16px;
    padding: 0.25rem;
    color: ${({theme}) => theme.text_secondary};
    background-color: ${({theme}) => theme.bg};
    z-index: 10;
`;

const FormTextarea = styled.textarea`
resize: none;
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 200px;
border: 2px solid ${({theme}) => theme.text_secondary};
background: none;
color: ${({theme}) => theme.text_secondary};
outline: none;
border-radius: 0.75rem;
padding: 1rem;
z-index: 1;
`;

const SubmitBtn = styled.button`
    background-color: ${({theme}) => theme.button};
    width: 50%;
    padding: 15px 20px;
    margin: 10px auto;
    color: ${({theme}) => theme.btntextcolor};
    border: none;
    border-radius: 10px;
    text-align: center;
`;
const Contact = () => {
    const form = useRef();

    const sendMail = () => {
        window.location.href = 'mailto:ahmed.webdev22@gmail.com';
    }
    const sendWhatsapp = () => {
        window.open('https://wa.me/+8801733800472', '_blank');
    }
    const sendMessenger = () => {
        window.open('https://m.me/122ahmed.184881', '_blank');
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2ia1wvd', 'template_r1raygm', form.current, '3h0ftAg8hE0QLm7YK')
        .then((result) => {
            if(result.text === "OK"){
                toast.success("Message Sent");
                form.current.reset();
            }
        }, (error) => {
            console.log(error.text);
        });
    };

    useEffect(() => {
        AOS.init({duration: "1000", delay: "500"})
      }, []);
    return (
        <div data-aos="fade-up" data-aos-once="true" id="contact">
           <ContactSection>
           <ContactHead>
                <ContactTitle>
                    Get in Touch
                </ContactTitle>
                <ContactText>
                    Contact me here.
                </ContactText>
            </ContactHead>
            <ContactContainer>
                <ContactInfo>
                
                    <ContactInfoHead>Connect With me</ContactInfoHead>
                    <InfoCard onClick={sendMail}>
                        <InfoIcon>
                            <IoIosMail/>
                        </InfoIcon>
                        <InfoText>ahmed.webdev22@gmail.com</InfoText>
                    </InfoCard>
                    <InfoCard onClick={sendWhatsapp}>
                        <InfoIcon>
                           <FaWhatsapp/>
                        </InfoIcon>
                        <InfoText>+8801733800472</InfoText>
                    </InfoCard>
                    <InfoCard onClick={sendMessenger}>
                        <InfoIcon>
                            <FaFacebookMessenger/>
                        </InfoIcon>
                        <InfoText>Ahmed Ullah</InfoText>
                    </InfoCard>
                </ContactInfo>
                <ContactFormDiv>
                    <FormHead>
                        Send Me a Message.
                    </FormHead>
                    <ContactForm ref={form} onSubmit={sendEmail}>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <FormInput name="name" placeholder='Your Name'></FormInput>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <FormInput name='email' placeholder='Your Email'></FormInput>
                        </FormControl>
                        <FormTextareaControl>
                            <FormTextareaLabel>Message</FormTextareaLabel>
                                <FormTextarea name='message' placeholder='Write Your Message'></FormTextarea>
                            </FormTextareaControl>
                        <SubmitBtn type='submit'>Send Message</SubmitBtn>
                    </ContactForm>
                </ContactFormDiv>
            </ContactContainer>
           </ContactSection>
        </div>
    );
};

export default Contact;