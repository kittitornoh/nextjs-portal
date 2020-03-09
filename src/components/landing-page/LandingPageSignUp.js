/**
 * Landing page
 */
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

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

const LandingPageSignUp = props => {
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
        Sign up
      </Typography>
      <Typography variant='body2'>Already have an account?</Typography>
    </Grid>
  );
};

export default LandingPageSignUp;
