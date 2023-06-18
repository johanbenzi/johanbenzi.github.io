import React, { useState } from 'react';
import styled from 'styled-components'
import './RightNav.css'

const StyledSideBar = styled.nav`
width: 50px;
height: 100vh;
position: fixed;
background: none;
float: right;
right: 0;
transition: width 400ms ease-in, background-color 400ms ease-in;
`;

const RightNav = () => {

  return (
    <StyledSideBar className='right-nav'></StyledSideBar>
  ); 
}

export default RightNav;