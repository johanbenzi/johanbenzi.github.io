import React, { useContext } from "react";
import { AppContext } from "../../App";
import {SectionContainer} from '../common'

function Home() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <SectionContainer>
      <h1>Skills</h1>
    </SectionContainer>
  );
}
export default Home;
