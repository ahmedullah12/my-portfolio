import styled, { useTheme } from "styled-components";
import PropTypes from 'prop-types';
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { darkTheme } from "../../utils/Themes";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Nav = styled.div`
    background-color: ${({theme}) => theme.card_light};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 100;
    transition: background-color 0.3s ease-in-out;
    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    };
`;

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 60px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1200px;
`;

const NavLogo = styled.a`

    width: 80%;
    font-size: 1.6rem;
    font-weight: 500;
    padding: 0 6px 0 25px;
    display: flex;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    align-items: center;
    color: ${({ theme }) => theme.text_primary}; // Adjust the color based on your theme

    transition: color 0.3s ease-in-out;

    &:hover {
        color: ${({ theme }) => theme.text_secondary}; // Darker color on hover
    }

    @media screen and (max-width: 640px){
        padding: 0 10px; // Adjusted padding for smaller screens
    }
`;

const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 780px){
        display: block;
        position: absolute;
        top: 7%;
        right: 0;
        transform: translate(-100%, 50%);
        font-size: 1.5rem;
        cursor: pointer;
        color: ${({theme}) => theme.text_primary}
    }
`;

const NavItems = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    list-style: none;
    @media screen and (max-width: 768px){
        display: none;
    }
`;

const NavLink = styled.a`
    color: ${({theme}) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    &:hover{
        color: ${({theme}) => theme.primary}
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 80%;
    height: 100%;
    padding: 0 6px;
    @media screen and (max-width: 768px){
        display: none;
    }
`;

const GithubButton = styled.a`
    background-color: transparent;
    color: ${({theme}) => theme.text_secondary};
    border: 1.8px solid ${({theme}) => theme.button};
    text-decoration: none;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    height: 70%;
    &:hover{
        background-color:  ${({theme}) => theme.button};
        color: #ffffff;
        border: 1.8px solid ${({theme}) => theme.button};
    };
    @media screen and (max-width: 640px){
        font-size: 0.8rem;
    }
`;

const ThemeToggleContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const StyledIcon = styled.div`
    font-size: 1.5rem;
    color: ${({theme}) => theme.text_primary};
    margin-right: 10px;

    transition: color 0.3s ease-in-out;

    &:hover {
        color: ${({theme}) => theme.primary};
    }
`;

const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({theme}) => theme.card_light + 99};
    transition: all 0.3s ease-in-out;
    transform: ${({open}) => (open ? "translateX(0)" : "translateX(100%)")};
    border-radius: 0 0 20 20px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    opacity: ${({open}) => open ? "1" : "0"}
    z-index: ${({open}) => open ? "1" : "-1"}

`;

const MobileMenuLinks = styled.a`
    color: ${({theme}) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    &:hover{
        color: ${({theme}) => theme.primary};
    }

`;

const Navbar = ({onToggle, theme}) => {
    const [open, setOpen] = useState(false);
    const currentTheme = useTheme();
    
    const isDarkTheme = theme === darkTheme;

    return (
        <Nav>
            <NavContainer>
                <NavLogo href='/'>Ahmed.dev</NavLogo>
                <MobileIcon>
                    <FaBars onClick={() => setOpen(!open)}/>
                </MobileIcon>
                <NavItems>
                    <NavLink href='#about'>About</NavLink>
                    <NavLink href='#skills'>Skills</NavLink>
                    <NavLink href='#projects'>Projects</NavLink>
                    <NavLink href='#education'>Education</NavLink>
                    <NavLink href='#contact'>Contact</NavLink>
                </NavItems>
                <ButtonContainer>
                    <ThemeToggleContainer onClick={onToggle}>
                        {/* You can use a ternary operator to display the sun or moon based on the theme */}
                        {isDarkTheme ? 
                            <StyledIcon as={MdOutlineWbSunny} /> : 
                            <StyledIcon as={IoMoonOutline} />
                        }
                    </ThemeToggleContainer>
                    <GithubButton target="_blank" href="https://github.com/ahmedullah12">Github Profile</GithubButton>
                </ButtonContainer>
            </NavContainer>
            {
                open && (
                    <MobileMenu open={open }>
                        <MobileMenuLinks
                        href="#about"
                        onClick={() => setOpen(!open)}
                        >
                            About
                        </MobileMenuLinks>
                        <MobileMenuLinks
                        href="#skills"
                        onClick={() => setOpen(!open)}
                        >
                            Skills
                        </MobileMenuLinks>
                
                        <MobileMenuLinks
                        href="#projects"
                        onClick={() => setOpen(!open)}
                        >
                            Projects
                        </MobileMenuLinks>
                        <MobileMenuLinks
                        href="#education"
                        onClick={() => setOpen(!open)}
                        >
                            Education
                        </MobileMenuLinks>
                        <MobileMenuLinks
                        href="#contact"
                        onClick={() => setOpen(!open)}
                        >
                            Contact
                        </MobileMenuLinks>
                        <ThemeToggleContainer onClick={onToggle}>
                        {/* You can use a ternary operator to display the sun or moon based on the theme */}
                        {isDarkTheme ? 
                            <StyledIcon onClick={() => setOpen(!open)} as={MdOutlineWbSunny} /> : 
                            <StyledIcon onClick={() => setOpen(!open)} as={IoMoonOutline} />
                        }
                        </ThemeToggleContainer>
                        <GithubButton
                        style={{
                            padding: "10px 16px",
                            background: `${currentTheme.primary}`,
                            color: "white",
                            width: "max-content"
                        }}
                        href="https://github.com/ahmedullah12"
                        target="_blank"
                        >
                            Github Profile
                        </GithubButton>
                    </MobileMenu>
                )
            }
        </Nav>
    );
};

Navbar.propTypes = {
    onToggle: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired,
};

export default Navbar;