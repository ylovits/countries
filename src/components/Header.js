import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  position:fixed;
  top:0;
  left:0;
  width:100%;
  background:#2c3e50;
`;

const MainNav = styled.nav`
  margin: 25px auto;
  position: relative;
  width: 590px;
  max-width:85%;
  background-color: #34495e;
  border-radius: 8px;
  font-size: 0;
`;

const StyledLink = styled(Link)`
  line-height: 50px;
  height: 100%;
  font-size: 15px;
  display: inline-block;
  position: relative;
  z-index: 1;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  color: white;
  cursor: pointer;
  width:50%;
`;

const AnimationDiv = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  z-index: 0;
  transition: all .5s ease 0s;
  border-radius: 8px;
`;

const Header = (props) => {
  return (
    <NavContainer>
      <MainNav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/countries">Countries</StyledLink>
        <AnimationDiv className={`animation ${props.activelink}`}></AnimationDiv>
      </MainNav>
    </NavContainer>
  )
}

export default Header;