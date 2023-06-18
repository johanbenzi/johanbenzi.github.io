import React, { useContext } from "react";
import { AppContext } from "../../App";
import {SectionContainer} from '../common'
import { faHandMiddleFinger } from "@fortawesome/free-solid-svg-icons";

const imageStyle = {
  width: '30%',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '10vh',
  marginBottom: 'auto'
}
function Home() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <SectionContainer>
      <div>
        <img src={require('../../images/coder.png')} style={imageStyle}/>
      </div>
    </SectionContainer>
  );
}
export default Home;