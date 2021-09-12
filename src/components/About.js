import React from 'react';
import {Card, Grid, Avatar} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import profilepic from '../portfolioavatar.png';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    }
})
export default function() {
    const classes = useStyles();
    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <Avatar style={{margin:'20px'}} height={24} width={24} alt="Sakib Ahmed" src={profilepic}> </Avatar>
                <h1> I'm currently a senior at NYU </h1> 
            </Grid>
            <Grid item xs={6}>
                <h1> Hi </h1>
            </Grid>
        </Grid>
    )
}