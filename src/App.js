import React from "react";
import "./App.css";
import {AppContainer} from './components/common';
import React, { useReducer } from "react";
import "./css/bootstrap-iso.css";

import { appInitialState, appReducer } from "./reducers/appReducer";

export const AppContext = React.createContext({});

function App() {
  const [state, dispatch] = useReducer(appReducer, appInitialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <AppContainer>
        <GlobalStyle />
      </AppContainer>
    </AppContext.Provider>
  );
}

export default App;