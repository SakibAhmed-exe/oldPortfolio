import React from 'react';
import {Card, CardActions, CardContent, Grid, Avatar, CardMedia, Button, TextField, Typography} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import profilepic from '../portfolioavatar.png';

const useStyles = makeStyles((theme) => ({
    avatar: {
        margin: theme.spacing(1)
      },
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
        marginTop: '1%',
        background: "#fffff",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        borderRadius: "20px",
      },
      cardmedia: {
        borderRadius: "20px",
        margin: '8%',
        width: "100%",
		maxHeight: 250,
		minWidth: 250, 
      },
      card: {
          margin: '10%',
          marginRight: '7%',
      },
    }));
export default function() {
    const classes = useStyles();
    return (
        <Grid container className={classes.grid} justifyContent="center" alignItems="center">
            <Grid item xs={6} s={4} md={3}>
                <CardMedia title="login" className={classes.cardmedia} image={profilepic} component="img" />
            </Grid>
            <Grid item xs={6} s={8} md={9}> 
                <Card className={classes.card}> 
                    <CardContent>
                        <Typography gutterBottom> Sakib Ahmed </Typography> 
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
  );
}