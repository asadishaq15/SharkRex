import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { navlinks } from './navlinks';
import { Link, useNavigate } from 'react-router-dom';
import LogoWeb from "../../assets/SharkImage.webp";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.bodyBg};
    color: ${({ theme }) => theme.textColor};
  }
`;

const themes = {
  light: {
    bodyBg: '#fff',
    textColor: '#333',
  },
  dark: {
    bodyBg: '#333',
    textColor: '#fff',
  },
};

const HeaderContainer = styled.header`
  position: relative;
  z-index: 10;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 1rem;

  @media (max-width: 639px) {
    justify-content: space-between;
  }
`;

const Logo = styled.img`
  height: 50px;
  width: auto; /* Maintain aspect ratio */

  @media (max-width: 639px) {
    height: auto; /* Adjust height automatically */
    width: 160px; 
  }
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 639px) {
    justify-content: flex-end;
  }
`;

const BurgerWrapper = styled.div`
  height: 24px;
  width: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  margin-left: auto;

  @media (min-width: 640px) {
    display: none;
  }
`;

const BurgerBar = styled.div`
  width: 24px;
  height: 3px;
  background-color: #333;

  &:nth-child(2) {
    width: 60%;
    align-self: flex-end;
  }
`;

const NavLinks = styled.nav`
  display: none;

  @media (min-width: 640px) {
    display: flex;
    align-items: center;
    margin-left: auto;
  }
`;

const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  margin-left: 1rem;
  font-size: 1rem;
  font-weight: 500;
  text-transform: capitalize;

  &:hover {
    color: #666;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 2px -2px #ccc;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.5s ease;
  max-height: ${({ isOpen }) => (isOpen ? '200px' : '0')};
  padding: ${({ isOpen }) => (isOpen ? '10px 0' : '0')};

  @media (min-width: 640px) {
    display: none;
  }
`;

const DropdownLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  text-transform: capitalize;
  text-align: center;
  padding: 0.5rem 0;

  &:hover {
    color: #666;
  }
`;

const Navbar222 = ({ handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event) => {
    if (!event.target.closest('header')) {
      setIsOpen(false);
    }
  };

  const handleScroll = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <GlobalStyle theme={themes[theme]} />
      <HeaderContainer>
        <Link to="/">
          <Logo src={LogoWeb} alt="Logo" />
        </Link>
        <NavWrapper>
          <NavLinks>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/status">Status</NavLink>
            <button onClick={handleLogout} style={{ marginLeft: "20px" }}>
              Logout
            </button>
          </NavLinks>
          <BurgerWrapper onClick={toggleMenu}>
            <BurgerBar />
            <BurgerBar />
            <BurgerBar />
          </BurgerWrapper>
        </NavWrapper>
        <DropdownMenu isOpen={isOpen}>
          {navlinks.map((link) => (
            <DropdownLink
              key={link.id}
              onClick={() => {
                setIsOpen(false);
                navigate(link.url);
              }}
            >
              {link.text}
            </DropdownLink>
          ))}
          <DropdownLink onClick={handleLogout}>Logout</DropdownLink>
        </DropdownMenu>
      </HeaderContainer>
    </>
  );
};
export default Navbar222;