import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Container, Grid} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import resumePDF from '../Resume_Sakib_Ahmed_NP.pdf';

const useStyles = makeStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    container: {
      position: "relative",
      overflow: "hidden",
      width: "100%",
      height: "100%",
      paddingTop: "56.25%",
    },
    iframe: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      width: "100%",
      height: "100%",
    },
    button: {
      marginTop: "1%",
    }
  })

  export default function ResumePage() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
          <Grid container>
            <Grid item xs={12}>
                <iframe className={classes.iframe} src={resumePDF} title='Resume' height="100%" width="100%"/>  
            </Grid>
          </Grid>               
      </div>
    );
  }

