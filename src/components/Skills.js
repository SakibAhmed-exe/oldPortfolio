import React from 'react';
import {Tooltip, Button, Grid, withStyles,makeStyles, Zoom} from '@material-ui/core';
import {DiReact, DiGit, DiJavascript1, DiJava, DiVisualstudio, DiCss3, DiPython} from "react-icons/di";
import {SiRedux} from "react-icons/si";
import {AiFillHtml5} from "react-icons/ai";

const useStyles = makeStyles((theme) => ({
      grid: {
        padding: '3%',
        marginTop: '3%',
        margin: 'auto',
        background: "#fffff",
        boxShadow: "0px 10px 35px 5px rgba( 155, 164, 193, .8 )",
        borderRadius: "40px",
        justifyContent: 'center',
        alignItems: 'center',
        position: 'center',
        width: '90%',
      },
      button: {
          borderRadius: '15px',
          minHeight: '75px',
      },
      typography: {
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
      background: 'linear-gradient( 170deg, #76d275 35%, #736EFE 100%)',
      boxShadow: "0px 10px 25px 3px rgba( 155, 164, 193, .8 )",
      color: 'black',
      borderRadius: '40px',
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
            <Grid item xs='auto' style={{paddingLeft: '5%', paddingRight: '5%'}}>
              <LightTooltip TransitionComponent={Zoom} TransitionProps={{timeout: 400}} title="Java" enterDelay={400} leaveDelay={200}> 
                <Button className={classes.button}> 
                    <DiJava size={'75px'}>
                    </DiJava>
                </Button>
              </LightTooltip> 
            </Grid>
            <Grid item xs='auto' style={{paddingRight: '5%', paddingLeft: '5%'}}>
              <LightTooltip TransitionComponent={Zoom} TransitionProps={{timeout: 400}} title="Python" enterDelay={400} leaveDelay={200}> 
                <Button className={classes.button}> 
                    <DiPython size={'75px'}>
                    </DiPython>
                </Button>
              </LightTooltip> 
            </Grid>
            <Grid item xs='auto' style={{paddingRight: '5%', paddingLeft: '5%'}}>
             <LightTooltip TransitionComponent={Zoom} TransitionProps={{timeout: 400}} title="React" enterDelay={400} leaveDelay={200}>  
                <Button className={classes.button}> 
                    <DiReact size={'75px'}>
                    </DiReact>
                </Button>
              </LightTooltip> 
            </Grid>
            <Grid item xs='auto' style={{paddingRight: '5%', paddingLeft: '5%'}}>
             <LightTooltip TransitionComponent={Zoom} TransitionProps={{timeout: 400}} title="Redux" enterDelay={400} leaveDelay={200}> 
                <Button className={classes.button}> 
                    <SiRedux size={'65px'}>
                    </SiRedux>
                </Button>
              </LightTooltip> 
            </Grid>
            <Grid item xs='auto' style={{paddingRight: '5%', paddingLeft: '5%'}}>
             <LightTooltip TransitionComponent={Zoom} TransitionProps={{timeout: 400}} title="JavaScript" enterDelay={400} leaveDelay={200}>
                <Button className={classes.button}> 
                    <DiJavascript1 size={'75px'}>
                    </DiJavascript1>
                </Button>
              </LightTooltip> 
            </Grid>
            <Grid item xs='auto' style={{paddingRight: '5%', paddingLeft: '5%'}}>
            <LightTooltip TransitionComponent={Zoom} TransitionProps={{timeout: 400}} title="HTML" enterDelay={400} leaveDelay={200}>
                <Button className={classes.button}> 
                    <AiFillHtml5 size={'75px'}>
                    </AiFillHtml5>
                </Button>
              </LightTooltip>
            </Grid>
            <Grid item xs='auto' style={{paddingRight: '5%', paddingLeft: '5%'}}>
            <LightTooltip TransitionComponent={Zoom} TransitionProps={{timeout: 400}} title="CSS" enterDelay={400} leaveDelay={250}> 
                <Button className={classes.button}> 
                    <DiCss3 size={'75px'}>
                    </DiCss3>
                </Button>
              </LightTooltip>
            </Grid>
            <Grid item xs='auto' style={{paddingRight: '5%', paddingLeft: '5%'}}>
            <LightTooltip TransitionComponent={Zoom} TransitionProps={{timeout: 400}} title="Git" enterDelay={400} leaveDelay={200}>
                <Button className={classes.button}> 
                    <DiGit size={'75px'}>
                    </DiGit>
                </Button>
              </LightTooltip>
            </Grid>
            <Grid item xs='auto' style={{paddingRight: '5%', paddingLeft: '5%'}}>
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

