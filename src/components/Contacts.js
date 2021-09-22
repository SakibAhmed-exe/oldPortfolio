import {Tooltip, Button, Grid, withStyles,makeStyles, Zoom} from '@material-ui/core';
import {AiFillGithub, AiFillLinkedin, AiOutlineTwitter} from "react-icons/ai";
import {MdEmail} from "react-icons/md";

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

export default function Contacts() {
    const classes = useStyles();
    return (
        <Grid container className={classes.grid}>
            <Grid item xs='auto' style={{paddingLeft: '5%', paddingRight: '5%'}}>
                <Button target="_blank" href="https://github.com/SakibAhmed-exe" className={classes.button}> 
                    <AiFillGithub size={'55px'}/>
                </Button>
            </Grid>
            <Grid item xs='auto' style={{paddingRight: '5%', paddingLeft: '5%'}}> 
                <Button target="_blank" href="https://www.linkedin.com/in/sakibahmed-exe/" lassName={classes.button}> 
                    <AiFillLinkedin size={'55px'}/>
                </Button>
            </Grid>
            <Grid item xs='auto' style={{paddingRight: '5%', paddingLeft: '5%'}}> 
                <Button target="_blank" href="https://twitter.com/Saboyyaboy" className={classes.button}> 
                    <AiOutlineTwitter size={'55px'}/>
                </Button>
            </Grid>
            <Grid item xs='auto' style={{paddingRight: '5%', paddingLeft: '5%'}}>
              <LightTooltip TransitionComponent={Zoom} TransitionProps={{timeout: 400}} title="ahmed.sakib@nyu.edu" enterDelay={400} leaveDelay={200}> 
                <Button className={classes.button}> 
                    <MdEmail size={'55px'}/>
                </Button>
              </LightTooltip> 
            </Grid>
        </Grid>
    );
}