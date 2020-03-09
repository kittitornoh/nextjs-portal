/**
 * Landing page
 */
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import LogInForm from "../login/LogInForm";

const useStyles = makeStyles(theme => ({
  content: {
    margin: theme.spacing(8, 4),
    maxWidth: 380
  },
  cta: {
    marginTop: theme.spacing(4)
  },
  ctaSub: {
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(2)
  }
}));

const LandingPageLogin = props => {
  const classes = useStyles();

  return (
    <Grid
      item
      container
      direction='column'
      justify='center'
      alignItems='flex-start'
      className={classes.content}
    >
      <img
        src='/inxite-logo.svg'
        alt='inxite logo'
        height={48}
        className={classes.logo}
      />
      <Typography component='h2' variant='h5' className={classes.ctaSub}>
        Log in
      </Typography>
      <LogInForm />
      <Typography variant='body2'>Don't have an account?</Typography>
    </Grid>
  );
};

export default LandingPageLogin;
