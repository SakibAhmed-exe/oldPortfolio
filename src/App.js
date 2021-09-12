import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import {Tabs, Tab, AppBar} from '@material-ui/core';
import { createTheme,makeStyles } from "@material-ui/core/styles";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import About from "./components/About";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: '1%',
  },
})

function App() {
  const routes = ["/about","/resume", "/projects"];
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BrowserRouter>
        <Route 
          path="/" 
          render={(history) => (
            <AppBar position="sticky">
              <Tabs variant='fullWidth' value={history.location.pathname !== '/' ? history.location.pathname: false }> 
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
          <Route path="/about" component={About}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
