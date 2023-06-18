
import "./App.css";
import {AppContainer} from './components/common';
import React, { useReducer } from "react";
import PortfolioPages from './components/PortfolioPages/PortfolioPages'

import { appInitialState, appReducer } from "./reducer/appReducer";

export const AppContext = React.createContext({});

function App() {
  const [state, dispatch] = useReducer(appReducer, appInitialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <AppContainer>
        <PortfolioPages />
      </AppContainer>
    </AppContext.Provider>
  );
}

export default App;