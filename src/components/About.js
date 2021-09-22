import React from 'react';
import {Card, CardActions, CardContent, Grid, Avatar, CardMedia, Button, TextField, Typography, Tooltip} from '@material-ui/core';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import profilepic from '../portfolioavatar.png';
import memojipfp from '../memojipfp.jpg';
import {DiReact, DiGit, DiJavascript1, DiJava, DiVisualstudio} from "react-icons/di";
import {SiRedux} from "react-icons/si";
import Skills from './Skills';
import Contacts from './Contacts';

const useStyles = makeStyles((theme) => ({
      grid: {
        paddingTop: '40px',
        paddingBottom: '60px',
        padding: '20px',
        marginTop: '3%',
        background: "#fffff",
        boxShadow: "0px 10px 35px 5px rgba( 155, 164, 193, .8 )",
        borderRadius: "40px",
        justifyContent:"center",
        alignItems:"center"
        
      },
      cardmedia: {
        borderRadius: "75px",
        marginTop: '8%',
        marginBottom: '8%',
        margin: 'auto',
        width: "100%",
        height: '100%',
        boxShadow: "0px 10px 35px 5px rgba( 155, 164, 193, .8 )",
        maxHeight: '300px',
        maxWidth: '300px',
      },
      card: {
          alignItems: 'center',
          background: 'linear-gradient( 170deg, #76d275 35%, #736EFE 100%)',
          borderRadius: '40px',
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
        <Grid container className={classes.grid}>
            <Grid item xs={12} s={3} md={3}>
                <CardMedia title="login" className={classes.cardmedia} image={memojipfp} component="img" />
            </Grid>
            <Grid item xs={12} md={7}> 
                <Card style={{marginLeft: '7%', marginRight: '7%'}} className={classes.card}> 
                    <CardContent>
                        <Typography className={classes.typography} variant='h3'> Hi, I'm Sakib Ahmed </Typography> 
                        <Typography style={{color: '#424242',}} className={classes.typography} variant='h5'> (Suh{bull}kēb)</Typography>
                        <Typography className={classes.typography} variant='h4'> CS & Econ @NYU </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} s={10} md={10}> 
                <Card style={{marginTop: '5%', background:'linear-gradient( 350deg, #76d275 35%, #736EFE 100%)'}} className={classes.card}>
                    <CardContent>
                        <Typography style={{fontSize: '1.5em'}} className={classes.typography} variant='body1'>
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
        <Contacts>
        </Contacts>
      </>
  );
}