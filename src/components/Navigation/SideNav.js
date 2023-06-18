import React, { useState } from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faLaptopCode,
  faBrain,
  faPaperPlane,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import './SideNav.css'

const FixedNav = styled.nav`
  width:10vw;
  position:fixed;
`;

const SideNav = () => {

  const [scrolling, setScrolling] = useState(false);
  const [showBurger, setShowBurger] = useState(false);

  const burgerHandler = () => {
  };
  return (
    <FixedNav
      className={showBurger ? "sidenav onsidenav" : "sidenav offsidenav"}
      id={scrolling ? "scrolling" : "not--scrolling"}>
      {/* <div className="close-button">
        <FontAwesomeIcon icon={faWindowClose} onClick={burgerHandler} />
      </div> */}
      <ul className="nav-icons">
        <li id="nav-icon">
          <a href="#about" onClick={burgerHandler}>
            <FontAwesomeIcon icon={faAddressCard} />
            <p>About</p>
          </a>
        </li>
        <li id="nav-icon">
          <a href="#project-container" onClick={burgerHandler}>
            <FontAwesomeIcon icon={faLaptopCode} />
            <p>Projects</p>
          </a>
        </li>
        <li id="nav-icon">
          <a href="#skills" onClick={burgerHandler}>
            <FontAwesomeIcon icon={faBrain} />
            <p>Skills</p>
          </a>
        </li>
        <li id="nav-icon">
          <a href="#contact" onClick={burgerHandler}>
            <FontAwesomeIcon icon={faPaperPlane} />
            <p>Contact</p>
          </a>
        </li>
      </ul>
    </FixedNav>
  );
};

export default SideNav;