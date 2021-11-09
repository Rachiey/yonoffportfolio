import React from 'react';
import { Header } from './layout';
import { Switch, Route } from 'react-router-dom';
import * as Pages from './pages';


const App = () => {
    return (
    <>
       
        <Switch>
        <Route exact path='/'>
            
          <Pages.Home />
        
        </Route>

        <Route path='/about'>
          <Pages.About />
          <Header />
        </Route>

        <Route path='/experience'>
          <Pages.Experience />
          <Header />
        </Route>

        <Route path='/projects'>
          <Pages.Projects />
          <Header />
        </Route>

        <Route path='/skills'>
          <Pages.Skills />
          <Header />
        </Route>

        </Switch>
        
  
    </>
    )
};

export default App;