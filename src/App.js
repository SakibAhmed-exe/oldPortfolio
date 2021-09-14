import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import {Tabs, Tab, AppBar} from '@material-ui/core';
import { createTheme,makeStyles, withStyles } from "@material-ui/core/styles";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import About from "./components/About";

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 80,
      width: '100%',
      backgroundColor: 'white',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: 'white',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />); 

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '1%',
  },
  appbar: {
    marginTop: '1%',
    background: 'linear-gradient(179deg,#614385 10%, #516395 90%)',
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    borderRadius: "20px",
  },
}));

function App() {
  const routes = ["/about","/resume", "/projects"];
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BrowserRouter>
        <Route 
          path="/" 
          render={(history) => (
            <AppBar position="sticky" className={classes.appbar}>
              <StyledTabs className={classes.tabs} variant='fullWidth' value={history.location.pathname !== '/' ? history.location.pathname: false }> 
                <StyledTab 
                  label="About" 
                  value={routes[0]} 
                  component={Link} 
                  to={routes[0]}
                  />
                <StyledTab 
                  label="Resume" 
                  value={routes[1]} 
                  component={Link} 
                  to={routes[1]}
                  />
                <StyledTab 
                  label="Projects" 
                  value={routes[2]} 
                  component={Link} 
                  to={routes[2]}
                  />
              </StyledTabs>
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
