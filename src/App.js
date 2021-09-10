import React from 'react';
import ReactDOM from 'react-dom';
import {Tabs, Tab, AppBar} from '@material-ui/core';
import './App.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Resume from "./components/Resume";
import Projects from "./components/Projects";

function App() {

  const routes = ["/about","/resume", "/projects"];
  return (
    <div className="App">
      <BrowserRouter>
        <Route 
          path="/" 
          render={(history) => (
            <AppBar position="sticky">
              <Tabs value={history.location.pathname !== '/' ? history.location.pathname: false }> 
                <Tab 
                  label="About" 
                  value={routes[0]} 
                  component={Link} 
                  to={routes[0]}
                  />
                <Tab 
                  label="Resume" 
                  value={routes[1]} 
                  component={Link} 
                  to={routes[1]}
                  />
                <Tab 
                  label="Projects" 
                  value={routes[2]} 
                  component={Link} 
                  to={routes[2]}
                  />
              </Tabs>
            </AppBar>
          )}
        />

        <Switch>
          <Route path="/resume" component={Resume}/>
          <Route path="/projects" component={Projects}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
