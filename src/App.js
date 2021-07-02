import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Flag_weather from './pages/Flag_weather';
import NotFound from './pages/NotFound';
import Meteo from './pages/Meteo';
import Drapeaux from './pages/Drapeaux';
import Welcome from './pages/Welcome';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Welcome} />
        <Route path='/drapeauetmeteo' exact component={Flag_weather} />
        <Route path='/meteo' exact component={Meteo} />
        <Route path='/drapeaux' exact component={Drapeaux} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
