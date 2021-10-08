import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import HomeScreen from './HomeScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      

      <Router>
        <Switch>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
    </Router>



    </div>
  );
}

export default App;
