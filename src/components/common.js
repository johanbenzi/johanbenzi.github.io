import styled from 'styled-components'

export const Link = styled.a`
  &&&& {
    margin-left: 8px;
    color: #00a3ff;
    cursor: pointer;
  }
`;

export const AppContainer = styled.div`
  // min-height: 100vh;
  padding: 0;
`;

export const MainContainer = styled.div`
  min-height: 650px;
`;

export const SectionContainer = styled.section`
margin: 0;

  height: 100vh;
  width: 100%vh;
  background: linear-gradient(to bottom right, #13547a, #80d0c7);
  // background: #FFFFFF;
  overflow: hidden;
`;

export const MainContainerTitle = styled.h1`
  &&& {
    font-size: 24px;
    font-weight: 400;
  }
`;
export const Header = styled.div`
  display: flex;
  width:100%;
`;

export const TitleContainer = styled.div`
padding: 10px 0px;
`;

export const Title = styled.h1`
  &&& {
    float:left;
    font-size: 36px;
    font-weight: 400;
  }
`;

export const TitleH2 = styled.h2`
  &&& {
    font-size: 24px;
    font-weight: 400;
  }
`;

export const ButtonContainer = styled.div`
  display:flex;
  flex-grow:1;
  justify-content: flex-end;
  border-top: 1px solid #d9d9d9;
`;

export const EventDetailsForm = styled.form`
`;