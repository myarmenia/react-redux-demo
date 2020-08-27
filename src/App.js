import React from "react"
import { Provider } from "react-redux"

import "./App.css"
import CarComponent from "./components/carComponent"
import MotoComponent from "./components/motoComponent"

import store from "./redux/store";
import HooksCarContainer from './components/HooksCarContainer'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CarComponent />
        <MotoComponent />
        <HooksCarContainer />
      </Provider>
    </div>
  );
}

export default App;
