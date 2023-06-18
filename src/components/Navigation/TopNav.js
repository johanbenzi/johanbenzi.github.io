import React, { useState } from 'react';
import styled from 'styled-components'

const StyledTopBar = styled.nav`
height: 50px;
width: 100vw;
position: fixed;
background: teal;
// background: linear-gradient(to top right, #13547a, #80d0c7);
`;

const TopNav = () => {

  return (
    <StyledTopBar>Home</StyledTopBar>
  ); 
}

export default TopNav;