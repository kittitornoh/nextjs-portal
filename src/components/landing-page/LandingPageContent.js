/**
 * Landing page
 */
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Link from "../../_utils/Link";

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
  },
  ctaBtn: {
    marginBottom: theme.spacing(2)
  }
}));

const LandingPageContent = () => {
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
      <Typography component='h1' variant='h4' className={classes.cta}>
        Take control of your health data now
      </Typography>
      <Typography component='h2' variant='h6' className={classes.ctaSub}>
        Create a free account today.
      </Typography>
      <Button
        variant='contained'
        color='primary'
        className={classes.ctaBtn}
        fullWidth
        component={Link}
        naked
        href='/signup'
      >
        Sign up
      </Button>
      <Button
        variant='outlined'
        color='primary'
        className={classes.ctaBtn}
        fullWidth
        component={Link}
        naked
        href='/login'
      >
        Log in
      </Button>
    </Grid>
  );
};

export default LandingPageContent;
