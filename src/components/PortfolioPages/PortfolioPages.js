import React, { useContext } from "react";
import { AppContext } from "../../App";
import Home from '../Home/Home';
import Skills from '../Skills/Skills'
import SideNav from '../Navigation/SideNav'
import TopNav from '../Navigation/TopNav'
import RightNav from '../Navigation/RightNav'

function PortfolioPages() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div>
      <TopNav />
      <SideNav />
      <RightNav />
      <Home />
      <Skills />
    </div>
  );
}
export default PortfolioPages;