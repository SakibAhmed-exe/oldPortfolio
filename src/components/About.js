import React from 'react';
import {Card, CardActions, CardContent, Grid, Avatar, CardMedia, Button, TextField, Typography, Tooltip} from '@material-ui/core';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import profilepic from '../portfolioavatar.png';
import javapic from '../javalogo.png';
import {DiReact, DiGit, DiJavascript1, DiJava, DiVisualstudio} from "react-icons/di";
import {SiRedux} from "react-icons/si";
import Skills from './Skills';

const useStyles = makeStyles((theme) => ({
      grid: {
        paddingTop: '40px',
        paddingBottom: '60px',
        padding: '20px',
        marginTop: '3%',
        background: "#fffff",
        boxShadow: "0px 10px 35px 5px rgba( 155, 164, 193, .8 )",
        borderRadius: "40px",   
      },
      cardmedia: {
        borderRadius: "200px",
        marginTop: '8%',
        marginBottom: '8%',
        marginLeft: '0%',
        width: "100%",
		    maxHeight: 300,
        minWidth: 250, 
        boxShadow: "0px 10px 35px 5px rgba( 155, 164, 193, .8 )",
      },
      card: {
          alignItems: 'center',
          background: 'linear-gradient( 135deg, #CE9FFC 10%, #7367F0 100%)',
          borderRadius: '20px',
          boxShadow: "0px 10px 35px 5px rgba( 155, 164, 193, .8 )",
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      typography: {
        marginTop: '5px',
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

export default function() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
      <>
        <Grid container className={classes.grid} justifyContent="center" alignItems="center">
            <Grid item xs={6} s={3} md={3}>
                <CardMedia title="login" className={classes.cardmedia} image={profilepic} component="img" />
            </Grid>
            <Grid item xs={6} s={7} md={8}> 
                <Card style={{marginLeft: '17%',}} className={classes.card}> 
                    <CardContent>
                        <Typography className={classes.typography} variant='h3'> Hi, I'm Sakib Ahmed </Typography> 
                        <Typography style={{color: '#424242',}} className={classes.typography} variant='h5'> (Suh{bull}kēb)</Typography>
                        <Typography className={classes.typography} variant='h4'> CS & Econ @NYU </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={10} s={10} md={10}> 
                <Card style={{marginTop: '5%', background:'linear-gradient( 135deg, #FEB692 10%, #EA5455 100%)'}} className={classes.card}>
                    <CardContent>
                        <Typography style={{fontSize: '1.7em'}} className={classes.typography} variant='body1'>
                            I'm currently an undergraduate student at New York University pursuing degrees in Computer 
                            Science and Economics (Theory). I have experience with front end development, UI/UX design, and state 
                            management in an agile environment. My interests include software development, natural langauge processing, and cryptography. 
                            Other interests are basketball, podcasts and music.  
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        <Skills>
        </Skills>
      </>
  );
}