import React from 'react';
import {Card, CardActions, CardContent, Grid, Avatar, CardMedia, Button, TextField, Typography, Tooltip} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import profilepic from '../portfolioavatar.png';
import javapic from '../javalogo.png';

const useStyles = makeStyles((theme) => ({
      form: {
        marginTop: theme.spacing(1),
        padding: theme.spacing(5)
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
        background: "#F12D77",
        color: "#fff"
      },
      continue: {
        margin: theme.spacing(3)
      },
      grid: {
        padding: '20px',
        marginTop: '3%',
        background: "#fffff",
        boxShadow: "0 0 5px 5px rgba( 214, 227, 249, 1 )",
        borderRadius: "15px",
        
      },
      cardmedia: {
        borderRadius: "15px",
        marginTop: '8%',
        marginBottom: '8%',
        marginLeft: '0%',
        width: "100%",
		maxHeight: 300,
        minWidth: 250, 
      },
      card: {
          alignItems: 'center',
          background: 'linear-gradient(115deg, #00c6ff, #0072ff)',
          borderRadius: '15px',
          boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
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
        <Grid container className={classes.grid} justifyContent="center" alignItems="center">
            <Grid item xs={6} s={3} md={3}>
                <CardMedia title="login" className={classes.cardmedia} image={profilepic} component="img" />
            </Grid>
            <Grid item xs={6} s={7} md={8}> 
                <Card style={{marginLeft: '17%',}} className={classes.card}> 
                    <CardContent>
                        <Typography className={classes.typography} variant='h3'> Hi, I'm Sakib Ahmed </Typography> 
                        <Typography style={{color: '#424242',}} className={classes.typography} variant='h5'> (Sa{bull}kēb)</Typography>
                        <Typography className={classes.typography} variant='h4'> CS & Econ @NYU </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={10} s={10} md={10}> 
                <Card style={{marginTop: '5%'}} className={classes.card}>
                    <CardContent>
                        <Typography style={{fontSize: '1.3em'}} className={classes.typography} variant='body1'>
                            I'm currently an undergraduate student at New York University pursuing degrees in Computer 
                            Science and Economics (Theory). I have experience with front end development, UI/UX design, and state 
                            management in an agile environment. My interests include software development, natural langauge processing, and cryptography. 
                            Other interests are basketball, podcasts and music.  
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
  );
}