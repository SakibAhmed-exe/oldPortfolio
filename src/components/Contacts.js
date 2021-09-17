import {Tooltip, Button, Grid, withStyles,makeStyles, Zoom, Typography} from '@material-ui/core';
import {DiReact, DiGit, DiJavascript1, DiJava, DiVisualstudio, DiCss3, DiPython} from "react-icons/di";
import {SiRedux, SiJavascript} from "react-icons/si";
import {AiFillGithub, AiFillLinkedin, AiOutlineTwitter} from "react-icons/ai";
import {MdEmail} from "react-icons/md";

const useStyles = makeStyles((theme) => ({
    grid: {
        paddingLeft: '14%',
        padding: '3%',
        marginTop: '3%',
        background: "#fffff",
        boxShadow: "0px 10px 35px 5px rgba( 155, 164, 193, .8 )",
        borderRadius: "40px",
        justifyContent: 'space-evenly',
        alignItems: 'stretch',
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
      background: 'linear-gradient( 350deg, #5EFCE8 10%, #736EFE 100%)',
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
            <Grid item xs={3} md={3}>
                <Button target="_blank" href="https://github.com/SakibAhmed-exe" className={classes.button}> 
                    <AiFillGithub size={'55px'}>
                    </AiFillGithub>
                </Button>
            </Grid>
            <Grid item xs={3} md={3}> 
                <Button target="_blank" href="https://www.linkedin.com/in/sakibahmed-exe/" lassName={classes.button}> 
                    <AiFillLinkedin size={'55px'}>
                    </AiFillLinkedin>
                </Button>
            </Grid>
            <Grid item xs={3} md={3}> 
                <Button target="_blank" href="https://twitter.com/Saboyyaboy" className={classes.button}> 
                    <AiOutlineTwitter size={'55px'}>
                    </AiOutlineTwitter>
                </Button>
            </Grid>
            <Grid item xs={3} md={3}>
              <LightTooltip TransitionComponent={Zoom} TransitionProps={{timeout: 400}} title="ahmed.sakib@nyu.edu" enterDelay={400} leaveDelay={200}> 
                <Button className={classes.button}> 
                    <MdEmail size={'55px'}>
                    </MdEmail>
                </Button>
              </LightTooltip> 
            </Grid>
        </Grid>
    );
}