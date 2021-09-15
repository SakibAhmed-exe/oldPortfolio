import React from 'react';
import {Tooltip, Button, Grid, withStyles,makeStyles, Zoom, Typography} from '@material-ui/core';
import profilepic from '../portfolioavatar.png';
import javapic from '../javalogo.png';
import {DiReact, DiGit, DiJavascript1, DiJava, DiVisualstudio} from "react-icons/di";
import {SiRedux, SiJavascript} from "react-icons/si";

const useStyles = makeStyles((theme) => ({
    grid: {
        paddingLeft: '5%',
        padding: '6%',
        marginTop: '3%',
        background: "#fffff",
        boxShadow: "0px 10px 35px 5px rgba( 155, 164, 193, .8 )",
        borderRadius: "40px",
        justifyContent: 'space-evenly',
        alignItems: 'stretch',
      },
      button: {
          borderRadius: '15px',
          minHeight: '75px',
      },
      typography: {
        marginBottom: '0%',
        textAlign: 'center',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
          ].join(','),
      },
}));

const LightTooltip = withStyles((theme) => ({
    tooltip: {
      background: 'linear-gradient( 135deg, #81FBB8 10%, #28C76F 100%)',
      boxShadow: "0px 10px 25px 3px rgba( 155, 164, 193, .8 )",
      color: 'black',
      borderRadius: '20px',
      fontSize: '1.4em',
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
      ].join(','),
      padding: '12px',
    },
  }))(Tooltip);

export default function Skills() {
    const classes = useStyles();
    return (
        <Grid container className={classes.grid}>
            <Grid item xs={12}>
              <Typography className={classes.typography} variant='h4'> Technical Skills </Typography>
            </Grid>
            <Grid item xs={1} s={1} md={1}>
              <LightTooltip TransitionComponent={Zoom} TransitionProps={{timeout: 400}} title="Java" enterDelay={400} leaveDelay={200}> 
                <Button className={classes.button}> 
                    <DiJava size={'75px'}>
                    </DiJava>
                </Button>
              </LightTooltip> 
            </Grid>
            <Grid item xs={1} s={1} md={1}>
             <LightTooltip TransitionComponent={Zoom} TransitionProps={{timeout: 400}} title="React" enterDelay={400} leaveDelay={200}>  
                <Button className={classes.button}> 
                    <DiReact size={'75px'}>
                    </DiReact>
                </Button>
              </LightTooltip> 
            </Grid>
            <Grid item xs={1} s={1} md={1}>
             <LightTooltip TransitionComponent={Zoom} TransitionProps={{timeout: 400}} title="Redux" enterDelay={400} leaveDelay={200}> 
                <Button className={classes.button}> 
                    <SiRedux size={'75px'}>
                    </SiRedux>
                </Button>
              </LightTooltip> 
            </Grid>
            <Grid item xs={1} s={1} md={1}>
             <LightTooltip TransitionComponent={Zoom} TransitionProps={{timeout: 400}} title="JavaScript" enterDelay={400} leaveDelay={200}>
                <Button className={classes.button}> 
                    <DiJavascript1 size={'75px'}>
                    </DiJavascript1>
                </Button>
              </LightTooltip> 
            </Grid>
            <Grid item xs={1} s={1} md={1}>
            <LightTooltip TransitionComponent={Zoom} TransitionProps={{timeout: 400}} title="Git" enterDelay={400} leaveDelay={200}>
                <Button className={classes.button}> 
                    <DiGit size={'75px'}>
                    </DiGit>
                </Button>
              </LightTooltip>
            </Grid>
            <Grid item xs={1} s={1} md={1}>
            <LightTooltip TransitionComponent={Zoom} TransitionProps={{timeout: 400}} title="Visual Studio Code" enterDelay={400} leaveDelay={250}> 
                <Button className={classes.button}> 
                    <DiVisualstudio size={'75px'}>
                    </DiVisualstudio>
                </Button>
              </LightTooltip>
            </Grid>
        </Grid>
    );
}

