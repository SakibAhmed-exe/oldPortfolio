import {Tooltip, Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Grid, withStyles,makeStyles, Zoom, Typography} from '@material-ui/core';
import {DiReact, DiGit, DiJavascript1, DiJava, DiVisualstudio, DiCss3, DiPython} from "react-icons/di";
import {SiRedux, SiJavascript} from "react-icons/si";
import {AiFillGithub, AiFillLinkedin, AiOutlineTwitter} from "react-icons/ai";
import {MdEmail} from "react-icons/md";
import twitterpic from '../twitterbotpic.png';

const useStyles = makeStyles((theme) => ({
    grid: {
        paddingTop: '4%',
        paddingBottom: '4%',
        paddingRight: '1%',
        paddingLeft: '1%',
        marginTop: '3%',
        marginBottom: '7%',
        background: "#fffff",
        boxShadow: "0px 10px 35px 5px rgba( 155, 164, 193, .8 )",
        borderRadius: "40px",
        justifyContent: 'space-evenly',
        alignItems: 'stretch',
      },
      card: {
        alignItems: 'center',
        background: 'linear-gradient( 350deg, #5EFCE8 10%, #736EFE 100%)',
        borderRadius: '40px',
        boxShadow: "0px 10px 35px 5px rgba( 155, 164, 193, .8 )",
      },
      cardmedia: {
        marginTop: '8%',
        borderRadius: "20px",
        width: "100%", 
        boxShadow: "0px 10px 35px 5px rgba( 155, 164, 193, .8 )",
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

export default function Contacts() {
    const classes = useStyles();
    return (
        <>
        <Grid container className={classes.grid}>
            <Grid item xs={4}> 
                <CardActionArea href="https://github.com/SakibAhmed-exe/todolist">
                    <CardMedia title="login" className={classes.cardmedia} image={twitterpic} component="img" />
                </CardActionArea>  
            </Grid>
            <Grid item xs={6}> 
                <Card style={{marginTop: '5%', background:'linear-gradient( 170deg, #E8D07A 10%, #5312D6 100%)'}} className={classes.card}>
                    <CardContent>
                        <Typography style={{fontSize: '1.2em'}} className={classes.typography} variant='body1'>
                            ToDo App - this is a React application that creates a simple todo list. Items can added/deleted, and 
                            marked as completed. Items can be filtered, to view only all, or completed, or uncompleted.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        <Grid container className={classes.grid}>
            <Grid item xs={4}> 
                <CardActionArea href="https://github.com/SakibAhmed-exe/twitterbot">
                    <CardMedia title="login" className={classes.cardmedia} image={twitterpic} component="img" />
                </CardActionArea>  
            </Grid>
            <Grid item xs={6}> 
                <Card style={{marginTop: '5%', background:'linear-gradient( 170deg, #E8D07A 10%, #5312D6 100%)'}} className={classes.card}>
                    <CardContent>
                        <Typography style={{fontSize: '1.2em'}} className={classes.typography} variant='body1'>
                            AllBallBot - this is a twitter bot that is scheduled to tweet basketball highlights. The bot was built using Node.js, and
                            uses the Twit library.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        
        </>
    );
}