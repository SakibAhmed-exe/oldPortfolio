import {Card, CardActionArea, CardContent, CardMedia, Grid,makeStyles,Typography} from '@material-ui/core';
import tododefault from '../ToDoDefault.png';
import todoedit from '../ToDoEdit.png';
import todohover from '../ToDoHover.png';

const useStyles = makeStyles((theme) => ({
    grid: {
        paddingTop: '0%',
        paddingBottom: '4%',
        paddingRight: '1%',
        paddingLeft: '1%',
        marginTop: '3%',
        marginBottom: '7%',
        background: "#fffff",
        boxShadow: "0px 10px 35px 5px rgba( 155, 164, 193, .8 )",
        borderRadius: "40px",
      },
      card: {
        alignItems: 'center',
        marginTop: '6%',
        margin: 'auto',
        paddingTop: '2%',
        paddingBottom: '2%',
        width: '90%',
        background: 'linear-gradient( 350deg, #76d275 35%, #736EFE 100%)',
        borderRadius: '40px',
        boxShadow: "0px 10px 35px 5px rgba( 155, 164, 193, .8 )",
        '&:hover': {
            boxShadow: "0px 0px 50px 10px rgba(67,160,71)",
        }
      },
      cardmedia: {
        marginTop: '6%',
        borderRadius: "40px",
        width: "90%", 
        margin: 'auto',
        boxShadow: "0px 10px 35px 5px rgba( 155, 164, 193, .8 )",
        maxHeight: '500px',
        maxWidth: '500px',
        '&:hover': {
            boxShadow: "0px 0px 50px 10px rgba(67,160,71)",
        }
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
            <Grid item xs={12} s={6}> 
                <CardActionArea href="https://github.com/SakibAhmed-exe/todoit">
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography style={{fontSize: '16px'}} className={classes.typography} variant='body1'>
                                ToDoIt - this is a web application built using JavaScript and React.js. I've implemented the Material UI library 
                                and styled components using CSS3; tsparticles was also imported for the background animations. Redux was used to
                                manage the state and dispatch actions. I've included images of the application below, but feel free to check out 
                                my Github for the code too!
                            </Typography>
                        </CardContent>
                    </Card>
                </CardActionArea>  
            </Grid>
            <Grid item xs={12} s={4}> 
                <CardMedia title="default" className={classes.cardmedia} image={tododefault} component="img" />
            </Grid>
            <Grid item xs={12} s={4}> 
                <CardMedia title="edit" className={classes.cardmedia} image={todoedit} component="img" />
            </Grid>
            <Grid item xs={12} s={4}> 
                <CardMedia title="hover" className={classes.cardmedia} image={todohover} component="img" />
            </Grid>
        </Grid>
        </>
    );
}